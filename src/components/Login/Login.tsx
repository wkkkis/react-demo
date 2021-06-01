import React from "react";
import LoginForm from "./LoginForm/LoginReduxForm";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {AppStateType} from "../../redux/react-store";

type LoginPropsType = {
    isAuth: boolean
    messages: string | null
    captcha: string | null
    login: (email: string, password: any, rememberMe: boolean, captcha: string) => void
}

type mapStateToPropsType = {
    isAuth: boolean,
    messages: string | null
    captcha: string | null
}

type mapDispatchToProps = {
    login: (email: string, password: any, rememberMe: boolean, captcha: string) => void
}

const Login = ({isAuth, captcha, login, messages}:LoginPropsType) => {
    const onSubmit = (values: any) => {
        login(values.email, values.password, values.rememberMe, values.captcha)
    }

    if(isAuth){
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <LoginForm onSubmit={onSubmit} messages={messages} captcha={captcha}/>
        </div>
    )
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        messages: state.auth.messages,
        captcha: state.auth.captcha
    }
}

export default connect<mapStateToPropsType, mapDispatchToProps, LoginPropsType, AppStateType>(
    mapStateToProps, {login})(Login);