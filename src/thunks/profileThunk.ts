import {profileAPI} from "../API/API";
import {setIsFetching, setUserProfile} from "../redux/TypesForRedux";
import {Dispatch} from "redux";

type SetUserProfileThunkType = (userId: string) => void


export const setUserProfileThunk: SetUserProfileThunkType = (userId) => {

    return (dispath: Dispatch) => {

       dispath(setIsFetching(true))
        profileAPI.setUserProfile(userId)
            .then(data => {
                dispath(setUserProfile(data))
                dispath(setIsFetching(false))
            })

    }
};