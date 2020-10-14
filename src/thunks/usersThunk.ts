import {userAPI} from "../API/API";
import {
    setIsFetching,
    setUsers,
    setTotalUsersCount,
    setFollowingInProgress,
    unfollow,
    follow
} from "../redux/TypesForRedux";
import {Dispatch} from "redux";

type GetUsersThunkType = (currentPage: number, pageSize: number) => void
type FollowToUserThunkType = (userId: number) => void
type UnfollowToUserThunkType = (userId: number) => void


export const getUsersThunk: GetUsersThunkType = (currentPage, pageSize) => {

    return (dispath: Dispatch) => {
        dispath(setIsFetching(true))
        userAPI.setUsers(currentPage, pageSize).then(res => {
            dispath(setIsFetching(false))
            dispath(setUsers(res.items))
            dispath(setTotalUsersCount(res.totalCount))
        })
    }
};

export const followToUserThunk: FollowToUserThunkType = (userId) => {

    return (dispath: Dispatch) => {
        dispath(setFollowingInProgress(true, userId))
        userAPI.follow(userId)
            .then(res => {
                if (res.resultCode === 0) {
                    dispath(follow(userId))
                    dispath(setFollowingInProgress(false, userId))
                }
            })
    }
}

export const unfollowToUserThunk: UnfollowToUserThunkType = (userId) => {

    return (dispath: Dispatch) => {

        dispath(setFollowingInProgress(true, userId))
        userAPI.unfollow(userId)
            .then(res => {
                if (res.resultCode === 0) {
                    dispath(unfollow(userId))
                    dispath(setFollowingInProgress(false, userId))
                }
            })
    }
};