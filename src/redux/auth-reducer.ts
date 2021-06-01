import {resultCodeEnum} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType, inferActionsTypes} from "./react-store";
import authAPI from "../api/auth-api";
import securityAPI from "../api/security-api";

export type InitialStateType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean | false,
    messages: string | null,
    captcha: string | null
}

let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    messages: null,
    captcha: null
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload
            };
        case "ERROR_MESSAGE":
            return {
                ...state,
                messages: action.error
            }
        case "GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                captcha: action.captchaUrl
            }
        default:
            return state;
    }
}

export const actions = {
    getDataUser: (userId: number | null, login: string | null, email:
        string | null, isAuth: boolean) => ({
                                                type: "SET_USER_DATA",
                                                payload: {userId, login, email, isAuth}
                                            }) as const,
    errorMessage: (error: string | null) => ({type: "ERROR_MESSAGE", error}) as const,
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: "GET_CAPTCHA_URL_SUCCESS", captchaUrl}) as const
}

type authActionsTypes = inferActionsTypes<typeof actions>

type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, authActionsTypes>

export const authMe = ():thunkType => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === resultCodeEnum.Success) {
        let {id, login, email} = response.data;
        dispatch(actions.getDataUser(id, login, email, true));
    }
}

export const login = (email: string, password: number, rememberMe: boolean, captcha: string):thunkType =>
    async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === resultCodeEnum.Success) {
        dispatch(authMe())
        dispatch(actions.errorMessage(null))
    } else {
        if (response.resultCode === resultCodeEnum.captchaIsRequired) {
            dispatch(getCaptcha())
        }
        dispatch(actions.errorMessage(response.messages[0]))
    }
}

export const getCaptcha = ():thunkType => async (
    dispatch) => {
        let response = await securityAPI.getCaptchaURL();
        const captchaURL = response.data.url
        dispatch(actions.getCaptchaUrlSuccess(captchaURL))
}

export const logOut = ():thunkType => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.resultCode === 0) {
        dispatch(actions.getDataUser(null, null, null, false));
    }
}

export default authReducer;