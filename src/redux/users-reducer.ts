import usersAPI from "../api/user-api";
import {updateObjectInArray} from "../components/utils/Object-helper";
import {photosType} from "./profile-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, inferActionsTypes} from "./react-store";

export type usersType = {
    name: string,
    id: number,
    photos: photosType,
    status: string | null,
    followed: boolean
}

let initialState = {
    users: [] as Array<usersType>,
    pageSize: 10,
    totalCount: 100,
    currentPage: 1,
    isFetching: false as boolean,
    followingProgression: [] as Array<number>,
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: usersActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.usersId, "id", {followed: true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.usersId, "id", {followed: false})
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.current
            }
        case "SET_TOTAL_COUNT":
            return {
                ...state, totalCount: action.count
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE_FOLLOW_FETCHING":
            return {
                ...state,
                followingProgression: action.isFetchingProgress ?
                    [...state.followingProgression, action.id]
                    : state.followingProgression.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

type usersActionsTypes = inferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (usersId: number) => ({type: "FOLLOW", usersId} as const),
    unFollowSuccess: (usersId: number) => ({type: "UNFOLLOW", usersId} as const),
    setUsers: (users: any) => ({type: "SET_USERS", users} as const),
    setCurrent: (current: number) => ({type: "SET_CURRENT_PAGE", current} as const),
    setTotal: (totalCount: number) => ({type: "SET_TOTAL_COUNT", count: totalCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const),
    isFollowingProgression: (isFetchingProgress: any, id: number) => ({type: "TOGGLE_FOLLOW_FETCHING",
        isFetchingProgress,
        id
    } as const)
}


export const getUsersPage = (currentPage: number, pageSize: number): thunkType => async (
    dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(actions.setCurrent(currentPage))
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotal(data.totalCount));
}

type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, usersActionsTypes>

export const follow = (userId: number): thunkType => {
    return async (dispatch) => {
        dispatch(actions.isFollowingProgression(true, userId));
        let data = await usersAPI.follow(userId)
        if (data.resultCode === 0) {
            dispatch(actions.followSuccess(userId));
            dispatch(actions.isFollowingProgression(false, userId));
        }
    }
}

export const unfollow = (userId: number): thunkType => {
    return async (dispatch) => {
        dispatch(actions.isFollowingProgression(true, userId));
        let data = await usersAPI.unfollow(userId)
        if (data.resultCode === 0) {
            dispatch(actions.unFollowSuccess(userId));
            dispatch(actions.isFollowingProgression(false, userId));
        }
    }
}

export default usersReducer;