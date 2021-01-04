import {Dispatch} from "redux";
import {authAPI} from "../API/API";
import {setAuthData, setAuthError, setCaptchaValue} from "../redux/ActionCreators";
import {errorHandler, serverErrorHandler} from "../utils/errorHandlers";


export const getCaptchaThunk = () => {

    return (dispath: Dispatch) => {
        authAPI.getCaptcha()
            .then(res => {
                    dispath(setCaptchaValue(res.data.url))
                }
            )
    }
};

export const authProfileThunk = () => {

    return (dispath: Dispatch) => {
        return authAPI.setAuth()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispath(setAuthData(res.data.data))
                } else {
                    errorHandler(res, dispath)
                }
            })
            .catch((err) => {
                serverErrorHandler(err, dispath)
            })
    }
};

export const logInProfileThunk = (email: string, password: string, rememberMe: boolean, captcha?: string) => {

    return (dispath: Dispatch<any>) => {
        dispath(setAuthError(null))
        authAPI.logIn(email, password, rememberMe, captcha)
            .then(res => {
                    if (res.data.resultCode === 0) {
                        dispath(authProfileThunk())
                    } else if (res.data.resultCode === 10) {
                        dispath(getCaptchaThunk())
                    } else {
                        errorHandler(res, dispath)
                    }
                }
            )
            .catch(err => {
                serverErrorHandler(err, dispath)
            })

    }
};

export const logOutProfileThunk = () => {

    return (dispath: Dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispath(setAuthData({email: null, login: null, id: null}))
                } else {
                    errorHandler(res, dispath)
                }
            })
            .catch(err => {
                serverErrorHandler(err, dispath)
            })

    }
}