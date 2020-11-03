import React from "react";
import {LoginReduxForm} from "./LoginForm";
import s from './login.module.css';
import {connect} from "react-redux";
import {logInProfileThunk} from "../../thunks/authThunk";
import {stateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login: React.FC<LoginPropsType> = (props) => {

    const login = ({email, password, rememberMe, ...formData}: FormDataType) => {
        props.login(email, password, rememberMe)
    }


    return <div className={s.login_content}>
        {(props.isAuth) ? <Redirect to={'/profile'}/> :
            <>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={login}/>
            </>

        }
    </div>
}


type MapDispatchToPropsType = {
    postLoginData: (email: string, password: string, rememberMe: boolean) => void
}

type MapStateToPropsType = {
    isAuth: boolean
}

type LoginContainerPropsType = {}

type CommonLoginContainerType = MapStateToPropsType & MapDispatchToPropsType & LoginContainerPropsType

const LoginContainer: React.FC<CommonLoginContainerType> = (props) => {

    const postLogin = (email: string, password: string, rememberMe: boolean) => {
        props.postLoginData(email, password, rememberMe)
    }


    return <div className={s.login_content_wrapper}>
        <Login login={postLogin} isAuth={props.isAuth}/>
    </div>
}


const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {postLoginData: logInProfileThunk})(LoginContainer)
