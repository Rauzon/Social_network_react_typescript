import {profileAPI} from "../API/API";
import {setIsFetching, setStatusProfile, setUserProfile} from "../redux/ActionCreators";
import {Dispatch} from "redux";
import {serverErrorHandler} from "../utils/errorHandlers";


export const setUserProfileThunk = (userId: string) => {

    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        profileAPI.setUserProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
                dispatch(setIsFetching(false))
            })
            .catch(err => {
                serverErrorHandler(err, dispatch)
            })
    }
};
export const setUserStatusThunk = (userId: string) => {

    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        profileAPI.setStatusProfile(userId)
            .then(res => {
                dispatch(setStatusProfile(res.data))
            })
            .catch(err => {
                serverErrorHandler(err, dispatch)
            })
    }
};
export const updateUserStatusThunk = (title: string) => {

    return (dispatch: Dispatch) => {
        profileAPI.updateStatusProfile(title)
            .then(() => {
                dispatch(setStatusProfile(title))
            })
            .catch(err => {
                serverErrorHandler(err, dispatch)
            })
    }
};