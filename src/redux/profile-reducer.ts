import profileAPI from "../api/profile-api"
import {ThunkAction} from "redux-thunk";
import {AppStateType, inferActionsTypes} from "./react-store";

export type postsType = {
    id: number,
    message: string,
    likesCount: number
}

export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type profileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string
    contacts: contactsType
    aboutMe: string,
    photos: photosType
}

export type photosType = {
    small: string | null,
    large: string | null
}

let initialState = {
    posts: [] as Array<postsType>,
    profile: null as profileType | null,
    status: "",
    messages: null as string | null
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: profileActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {
                id: 5,
                message: action.textForPost,
                likesCount: 5
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as profileType
            }
        case "ERROR_MESSAGE":
            return {
                ...state,
                messages: action.error
            }
        default:
            return state;
    }
}

type profileActionsTypes = inferActionsTypes<typeof actions>

export const actions = {
    addPost:(textForPost: string) => ({type: "ADD_POST", textForPost}) as const,
    setUserProfile:(profile: profileType) => ({type: "SET_USER_PROFILE", profile}) as const,
    setStatus:(status: string) => ({type: "SET_STATUS", status}) as const,
    savePhotoSuccess:(photos: any) => ({type: "SAVE_PHOTO_SUCCESS", photos}) as const,
    errorMessage:(error: string | null) => ({type: "ERROR_MESSAGE", error}) as const
}

type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, profileActionsTypes>

export const getUserProfile = (userId: number): thunkType => async (
    dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}

export const getUserStatus = (userId: number): thunkType => async (
    dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(response.data))
}

export const updateUsersStatus = (status: string): thunkType => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    }
}

export const savePhoto = (file: File): thunkType => {
    return async (dispatch) => {
        let response = await profileAPI.savePhotoApi(file)
        if (response.resultCode === 0) {
            dispatch(actions.savePhotoSuccess(response.data.photos));
        }
    }
}

export const updateUsersProfile = (profile: profileType): thunkType => async (
    dispatch, getState: () => AppStateType) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveNewProfile(profile);
    if (response.data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId as number))
            dispatch(actions.errorMessage(null))
        } else {
            dispatch(actions.errorMessage(response.data.messages[0]))
        }
    }
}

export default profileReducer