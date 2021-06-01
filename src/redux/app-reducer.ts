import {authMe} from "./auth-reducer";
import {Dispatch} from "redux";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: InitializedActionType): InitialStateType => {
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

type InitializedActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedCreator = (): InitializedActionType => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => (dispatch: Dispatch<InitializedActionType>) => {
    let promise = dispatch(authMe() as any)

    Promise.all([promise]).then(() => {
        setTimeout(() => {
            dispatch(initializedCreator())
        }, 2000)
    })
}

export default appReducer;