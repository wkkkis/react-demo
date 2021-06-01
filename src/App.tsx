import React, {useEffect} from 'react'
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import {connect, Provider} from "react-redux"
import {compose} from "redux"
import store, {AppStateType} from "./redux/react-store"
import {initializedApp} from "./redux/app-reducer"

import './App.css';
import Nav from './components/Navbar/Nav'
import Footer from "./components/Footer/Footer"
import withSuspense from "./hoc/WithSuspense/withSuspense"
import forOverlayLoader from "./assets/images/giphy.gif"
import {Redirect, Switch} from "react-router"
import HeaderContainer from "./components/Header/HeaderContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
//@ts-ignore
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
//@ts-ignore
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))
const News = React.lazy(() => import('./components/News/News'))
const Music = React.lazy(() => import('./components/Music/Music'))
//@ts-ignores
const SettingsContainer = React.lazy(() => import('./components/Settings/SettingsContainer'))
const NotFound = React.lazy(() => import('./components/common/NotFoundPage/NotFound'))

type AppPropsType = {
    initialized: boolean
    initializedApp: () => void
}

type mapStateToPropsType = {
    initialized: boolean
}

type mapDispatchToPropsType = {
    initializedApp: () => void
}

const App = (props: AppPropsType) => {

    let catchAllUnHandleErrors = (promise: any) => {
        console.log(promise)
        alert("возможно проблемы со сервером")
    }

    useEffect(() => {
        props.initializedApp()

        window.addEventListener("unhandledrejection", function (promiseRejectionEvent) {
            catchAllUnHandleErrors(promiseRejectionEvent)
        });
    }, [initializedApp])

    if (!props.initialized) {
        return (
            <div className='overlay'>
                <img className="forOverlayLoad" src={forOverlayLoader} alt="" width="30%"/>
            </div>
        )
    }

    return (
        <div className="mainWrapper">
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to="/profile"/>}/>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/massage'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/users'
                               render={withSuspense(UsersContainer)}/>
                        <Route path='/login'
                               render={withSuspense(Login)}/>
                        <Route path='/news'
                               render={withSuspense(News)}/>
                        <Route path='/music'
                               render={withSuspense(Music)}/>
                        <Route path='/settings'
                               render={withSuspense(SettingsContainer)}/>
                        <Route path='*'
                               render={withSuspense(NotFound)}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect<mapStateToPropsType, mapDispatchToPropsType, AppPropsType, AppStateType>(
        mapStateToProps, {initializedApp}))
(App)

const MainApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp

