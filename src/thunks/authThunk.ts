import {authAPI} from "../API/API";
import {Dispatch} from "redux";
import { setAuthData } from "../redux/TypesForRedux";

type AuthProfileThunkType = () => void


export const authProfileThunk: AuthProfileThunkType = () => {

    return (dispath: Dispatch) => {

        authAPI.setAuth().then(res => {
            if (res.resultCode === 0) {
                dispath(setAuthData(res.data))
            }
        })

    }
};