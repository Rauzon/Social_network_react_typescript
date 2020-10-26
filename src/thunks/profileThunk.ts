import {profileAPI} from "../API/API";
import {setIsFetching, setStatusProfile, setUserProfile} from "../redux/TypesForRedux";
import {Dispatch} from "redux";

type SetUserProfileThunkType = (userId: string) => void
type SetUserStatusThunkType = (userId: string) => void
type UpdateUserStatusThunkType = (userId: string) => void
type UpdateProfilePhotoThunk = (photoURL: File) => void


export const setUserProfileThunk: SetUserProfileThunkType = (userId) => {

    return (dispatch: Dispatch) => {

        dispatch(setIsFetching(true))
        profileAPI.setUserProfile(userId)
            .then(data => {
                debugger
                dispatch(setUserProfile(data))
                dispatch(setIsFetching(false))
            })
    }
};
export const setUserStatusThunk: SetUserStatusThunkType = (userId) => {

    return (dispatch: Dispatch) => {

        dispatch(setIsFetching(true))
        profileAPI.setStatusProfile(userId)
            .then(data => {
                dispatch(setStatusProfile(data))
            })
    }
};
export const updateUserStatusThunk: UpdateUserStatusThunkType = (title) => {

    return (dispatch: Dispatch) => {
        profileAPI.updateStatusProfile(title)
            .then(data => {
                dispatch(setStatusProfile(title))
            })
    }
};
// export const updateProfilePhotoThunk: UpdateProfilePhotoThunk = (photoURL) => {
//
//     return (dispatch: Dispatch) => {
//         profileAPI.updatePhotoProfile(photoURL)
//             .then(data => {
//                 debugger
//                     dispatch(updatePhotoProfile(photoURL))
//             })
//     }
// };