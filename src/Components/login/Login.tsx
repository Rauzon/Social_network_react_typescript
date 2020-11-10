import React from "react";
import {LoginForm} from "./LoginForm";
import s from './login.module.css';
import {connect} from "react-redux";
import {getCaptchaThunk, logInProfileThunk} from "../../thunks/authThunk";
import {stateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

//for Login
type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    isAuth: boolean
    error: string | null
    captcha?: string
    getCaptcha: () => void
}

//for LoginContainer
type MapDispatchToPropsType = {
    postLoginData: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    getCaptcha: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
    error: string | null
    captcha?: string
}
type LoginContainerPropsType = {}
type CommonLoginContainerType = MapStateToPropsType & MapDispatchToPropsType & LoginContainerPropsType


export const Login: React.FC<LoginPropsType> = (props) => {

    const getCaptcha = () => {
        props.getCaptcha()
    }

    return (
        <div className={s.login_content}>
            {(props.isAuth) ? <Redirect to={'/profile'}/> :
                <div className={s.login_content__inner}>
                    <h1>Login</h1>
                    <LoginForm login={props.login}
                               error={props.error}
                               captcha={props.captcha}
                               getCaptcha={getCaptcha}/>
                </div>
            }
        </div>
    )
}


const LoginContainer: React.FC<CommonLoginContainerType> = (props) => {

    const postLogin = (email: string, password: string, rememberMe: boolean, captcha: string) => {
        props.postLoginData(email, password, rememberMe, captcha)
    }
    debugger
    return <div className={s.login_content_wrapper}>
        <Login login={postLogin}
               isAuth={props.isAuth}
               error={props.error}
               captcha={props.captcha}
               getCaptcha={props.getCaptcha}/>
    </div>
}


const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error,
        captcha: state.auth.captcha,
    }
}


export default connect(mapStateToProps, {
    postLoginData: logInProfileThunk,
    getCaptcha: getCaptchaThunk,
})(LoginContainer)
