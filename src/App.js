import React, {useEffect} from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import forOverlayLoader from "./assets/images/giphy.gif"
import store from "./redux/react-store";
import withSuspense from "./hoc/WithSuspense/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

const App = ({initializedApp, ...props}) => {
    useEffect(() => {
        initializedApp()
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
                    <Route path='/massage'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
                    <Route path='/users'
                           render={withSuspense(UsersContainer)}/>
                    <Route path='/login'
                           render={withSuspense(Login)}/>
                    <Route path='/news'
                           render={withSuspense(News)}/>
                    <Route path='/music'
                           render={withSuspense(Music)}/>
                    <Route path='/settings'
                           render={withSuspense(Settings)}/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))
(App);

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp

