import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedCreator = () => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(authMe())

    Promise.all([promise]).then(() => {
        setTimeout(() => {
            dispatch(initializedCreator())
        }, 3000)
    })
}

export default appReducer;