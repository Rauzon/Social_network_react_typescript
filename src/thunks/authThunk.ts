import {authAPI} from "../API/API";
import {Dispatch} from "redux";
import {setAuthData, setAuthError, setCaptchaValue} from "../redux/TypesForRedux";

type AuthProfileThunkType = () => any
type AuthPostProfileDataThunkType = (email: string, password: string, rememberMe: boolean, captcha?: string) => void
type GetCaptchaThunkType = () => any

export const getCaptchaThunk: GetCaptchaThunkType = () => {

    return (dispath: Dispatch) => {
        authAPI.getCaptcha()
            .then(res => {
                    dispath(setCaptchaValue(res.url))
                }
            )

    }
};

export const authProfileThunk: AuthProfileThunkType = () => {

    return (dispath: Dispatch) => {
        return authAPI.setAuth()
            .then(res => {
                if (res.resultCode === 0) {
                    dispath(setAuthData(res.data))
                }
            })

    }
};

export const logInProfileThunk: AuthPostProfileDataThunkType = (email, password, rememberMe, captcha) => {

    return (dispath: Dispatch) => {
        dispath(setAuthError(null))
        authAPI.logIn(email, password, rememberMe, captcha)
            .then(res => {
                    if (res.resultCode === 0) {
                        dispath(authProfileThunk())
                    } else if (res.resultCode === 10) {
                        dispath(getCaptchaThunk())
                    } else {
                        if (res.messages.length) {
                            dispath(setAuthError(res.messages[0]))
                        }
                    }
                }
            )

    }
};

export const logOutProfileThunk: AuthPostProfileDataThunkType = () => {

    return (dispath: Dispatch) => {

        authAPI.logout()
            .then(res => {
                debugger
                if (res.resultCode === 0) {
                    dispath(setAuthData({email: null, login: null, id: null}))
                }
            })

    }
};