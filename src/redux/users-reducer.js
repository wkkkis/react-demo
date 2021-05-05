import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../components/utils/Object-helper";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "currentPage/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "totalCount/SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "isFetching/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOW_FETCHING = "disabled/TOGGLE_FOLLOW_FETCHING";

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 100,
    currentPage: 1,
    isFetching: false,
    followingProgression: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.usersId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.usersId, "id", {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.current
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOW_FETCHING:
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

export const followSuccess = (usersId) => ({type: FOLLOW, usersId});
export const unFollowSuccess = (usersId) => ({type: UNFOLLOW, usersId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrent = (current) => ({type: SET_CURRENT_PAGE, current});
export const setTotal = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const isFollowingProgression = (isFetchingProgress, id) => ({
    type: TOGGLE_FOLLOW_FETCHING,
    isFetchingProgress,
    id
});

export const getUsersPage = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setCurrent(currentPage))
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotal(data.totalCount));
}

export const follow = (userId) => async (dispatch) => {
    dispatch(isFollowingProgression(true, userId));
    let data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
        dispatch(isFollowingProgression(false, userId));
    }
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(isFollowingProgression(true, userId));
    let data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unFollowSuccess(userId));
        dispatch(isFollowingProgression(false, userId));
    }
}

export default usersReducer;