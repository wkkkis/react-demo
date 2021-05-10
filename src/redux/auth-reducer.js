import {authAPI} from "../api/api";
import {securityAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const ERROR_MESSAGE = 'auth/ERROR_MESSAGE';
const GET_CAPTCHA_URL_SUCCES = 'auth/GET_CAPTCHA_URL_SUCCES';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    messages: null,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case ERROR_MESSAGE:
            return {
                ...state,
                messages: action.error
            }
        case GET_CAPTCHA_URL_SUCCES:
            return {
                ...state,
                captcha: action.captchaUrl
            }
        default:
            return state;
    }
}

export const getDataUser = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
});
export const errorMessage = (error) => ({type: ERROR_MESSAGE, error});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCES, captchaUrl});

export const authMe = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(getDataUser(id, login, email, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(authMe());
        dispatch(errorMessage(null))
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        dispatch(errorMessage(response.data.messages[0]))
    }
}

export const getCaptcha = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaURL();
    const captchaURL = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaURL))
}
export const logOut = () => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(getDataUser(null, null, null, false));
    }
}

export default authReducer;