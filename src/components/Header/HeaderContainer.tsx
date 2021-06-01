import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logOut} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/react-store";
import {compose} from "redux";

type HeaderContainerPropsType = {
    login: string
    isAuth: boolean
    logOut: () => void
}

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type mapDispatchToProps = {
    logOut: () => void
}

function HeaderContainer({login, isAuth, logOut}: HeaderContainerPropsType) {
    return <Header login={login} isAuth={isAuth} logOut={logOut}/>
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToProps, HeaderContainerPropsType, AppStateType>(
    mapStateToProps, {logOut})
)(HeaderContainer);