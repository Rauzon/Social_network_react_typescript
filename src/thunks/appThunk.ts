import {Dispatch} from "redux";
import {authProfileThunk} from "./authThunk";
import {initializedApp} from "../redux/ActionCreators";




export const initializedAppThunk: any = () => {

    return (dispath: any) => {

        const promise = dispath(authProfileThunk())

        promise.then(() => {
                return
            })
            .finally(() => {
            dispath(initializedApp())
        })
    }
};

