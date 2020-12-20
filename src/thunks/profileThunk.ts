import {profileAPI} from "../API/API";
import {setIsFetching, setStatusProfile, setUserProfile} from "../redux/ActionCreators";
import {Dispatch} from "redux";

type SetUserProfileThunkType = (userId: string) => void
type SetUserStatusThunkType = (userId: string) => void
type UpdateUserStatusThunkType = (userId: string) => void
type UpdateProfilePhotoThunk = (photoURL: File) => void


export const setUserProfileThunk: SetUserProfileThunkType = (userId) => {

    return (dispatch: Dispatch) => {

        dispatch(setIsFetching(true))
        profileAPI.setUserProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
                dispatch(setIsFetching(false))
            })
    }
};
export const setUserStatusThunk: SetUserStatusThunkType = (userId) => {

    return (dispatch: Dispatch) => {

        dispatch(setIsFetching(true))
        profileAPI.setStatusProfile(userId)
            .then(res => {
                dispatch(setStatusProfile(res.data))
            })
    }
};
export const updateUserStatusThunk: UpdateUserStatusThunkType = (title) => {

    return (dispatch: Dispatch) => {
        profileAPI.updateStatusProfile(title)
            .then(() => {
                dispatch(setStatusProfile(title))
            })
    }
};
