import {authAPI} from "../API/API";
import {Dispatch} from "redux";
import {setAuthData} from "../redux/TypesForRedux";

type AuthProfileThunkType = () => any
type AuthPostProfileDataThunkType = (email: string, password: string, rememberMe: boolean) => void


export const authProfileThunk: AuthProfileThunkType = () => {

    return (dispath: Dispatch) => {

        authAPI.setAuth()
            .then(res => {
            if (res.resultCode === 0) {
                dispath(setAuthData(res.data))
            }
        })

    }
};

export const logInProfileThunk: AuthPostProfileDataThunkType = (email, password, rememberMe) => {

    return (dispath: Dispatch) => {

        authAPI.logIn(email, password, rememberMe)
            .then(res => {
                debugger
                if (res.resultCode === 0) {
                    dispath(authProfileThunk())
                }
            })

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