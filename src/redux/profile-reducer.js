import {profileAPI} from "../api/api";

const ADD_POST = 'post/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'status/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const ERROR_MESSAGE = 'profile/ERROR_MESSAGE';

let initialState = {
    posts: [],
    newPostText: '',
    profile: null,
    status: "",
    messages: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.textForPost,
                likesCount: 5
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case ERROR_MESSAGE:
            return {
                ...state,
                messages: action.error
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (textForPost) => ({type: ADD_POST, textForPost});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
const errorMessage = (error) => ({type: ERROR_MESSAGE, error});

export const getUserProfile = userId => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
}

export const getUserStatus = userId => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateUsersStatus = status => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = file => async (dispatch) => {
    let response = await profileAPI.savePhotoApi(file)
    if (response.data.resultCode === 0) {
        console.log(response.data)
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const updateUsersProfile = profile => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        let response = await profileAPI.saveNewProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
            dispatch(errorMessage(null))
        }else{
            dispatch(errorMessage(response.data.messages[0]))
        }
    }
}

export default profileReducer;