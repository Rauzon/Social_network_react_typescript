import React, {useCallback} from "react";
import {LoginForm} from "./LoginForm";
import s from './login.module.css';
import {connect} from "react-redux";
import {getCaptchaThunk, logInProfileThunk} from "../../thunks/authThunk";
import {stateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {getIsAuthSelector, getServerErrorSelector, getCaptchaSelector} from "../../redux/selectors/LoginSelectors";

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


export const Login: React.FC<LoginPropsType> = React.memo((props) => {

    const getCaptcha = useCallback(() => {
        props.getCaptcha()
    }, [props.getCaptcha])

    return (
        <div className={s.login__content}>
            <div className={s.login__content_inner_textHelper}>
                <h4>You can enter and test features using those data:</h4>
                <span>login:</span><b> vladby86@gmail.com</b><br/>
                <span>password:</span><b> HardPassword_2020</b>
            </div>
            {(props.isAuth) ? <Redirect to={'/profile'}/> :
                <div className={s.login__content_inner}>
                    <h1>Login</h1>
                    <LoginForm login={props.login}
                               error={props.error}
                               captcha={props.captcha}
                               getCaptcha={getCaptcha}/>
                </div>
            }
        </div>
    )
})


const LoginContainer: React.FC<CommonLoginContainerType> = React.memo((props) => {

    const postLogin = useCallback((email: string, password: string, rememberMe: boolean, captcha: string) => {
        props.postLoginData(email, password, rememberMe, captcha)
    }, [props])

    return <Login login={postLogin}
                  isAuth={props.isAuth}
                  error={props.error}
                  captcha={props.captcha}
                  getCaptcha={props.getCaptcha}/>
})


const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        isAuth: getIsAuthSelector(state),
        error: getServerErrorSelector(state),
        captcha: getCaptchaSelector(state),
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, LoginContainerPropsType, stateType>(mapStateToProps, {
    postLoginData: logInProfileThunk,
    getCaptcha: getCaptchaThunk,
})(LoginContainer)
