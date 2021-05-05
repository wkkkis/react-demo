import React from "react";
import LoginForm from "./LoginForm/LoginReduxForm";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";
const Login = (props) => {
    const onSubmit = async values => {
        props.login(values.email, values.password, values.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <LoginForm onSubmit={onSubmit} {...props}/>
        </div>
    )
}

let mapDispatchToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        messages: state.auth.messages
    }
}

export default connect(mapDispatchToProps, {login})(Login);