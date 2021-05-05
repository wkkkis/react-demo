import {authAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const ERROR_MESSAGE = 'auth/ERROR_MESSAGE';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    messages: null
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
        default:
            return state;
    }
}

export const getDataUser = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
});
export const errorMessage = (error) => ({type: ERROR_MESSAGE, error});

export const authMe = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(getDataUser(id, login, email, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authMe());
        dispatch(errorMessage(null))
    } else {
        dispatch(errorMessage(response.data.messages[0]))
    }
}
export const logOut = () => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(getDataUser(null, null, null, false));
    }
}

export default authReducer;