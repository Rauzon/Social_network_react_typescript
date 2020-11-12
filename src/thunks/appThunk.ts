import {Dispatch} from "redux";
import {authProfileThunk} from "./authThunk";
import {initializedApp} from "../redux/TypesForRedux";

type AuthProfileThunkType = () => any
type AuthPostProfileDataThunkType = (email: string, password: string, rememberMe: boolean, captcha?: string) => void
type GetCaptchaThunkType = () => any

export const initializedAppThunk: GetCaptchaThunkType = () => {

    return (dispath: Dispatch) => {

        const promise = dispath(authProfileThunk())

        promise.finally(() => {
            dispath(initializedApp())
        })
    }
};

