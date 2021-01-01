import {setError} from "../redux/ActionCreators";
import {Dispatch} from "redux";

export const serverErrorHandler = (err: any, dispath: Dispatch<ReturnType<typeof setError>>) => {
    if (err.message) {
        dispath(setError(err.message))
    } else {
        dispath(setError('undefined network error'))
    }
};

export const errorHandler = (res: any, dispath: Dispatch<ReturnType<typeof setError>>) => {
    if (res.data.messages.length) {
        dispath(setError(res.data.messages[0]))
    } else {
        dispath(setError("some error"))
    }
};

