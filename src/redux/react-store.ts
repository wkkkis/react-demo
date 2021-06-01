import {applyMiddleware, combineReducers, createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import appReducer from "./app-reducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

type propertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type inferActionsTypes<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<propertiesTypes<T>>

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.store = store

export default store