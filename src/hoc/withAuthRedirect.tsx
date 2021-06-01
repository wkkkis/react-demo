import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {AppStateType} from "../redux/react-store";

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
});

type mapStateToPropsType = {
    isAuth: boolean
}

type dispatchPropsType = {}

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<mapStateToPropsType & dispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={"/login"}/>

        return <Component  {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<mapStateToPropsType, dispatchPropsType, WCP, AppStateType>(
        mapStateToPropsForRedirect)
    (RedirectComponent);

    return ConnectedAuthRedirectComponent
}