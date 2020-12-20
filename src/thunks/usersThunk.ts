import {userAPI} from "../API/API";
import {
    setIsFetching,
    setUsers,
    setTotalUsersCount,
    setFollowingInProgress,
    unfollow,
    follow,
    setCurrentPage
} from "../redux/ActionCreators";
import {Dispatch} from "redux";

type GetUsersThunkType = (currentPage: number, pageSize: number) => void
type FollowToUserThunkType = (userId: number) => void
type UnfollowToUserThunkType = (userId: number) => void
type PaginationThunkType = (page: number, pageSize:number) => void


export const getUsersThunk: GetUsersThunkType = (currentPage, pageSize) => {

    return (dispath: Dispatch) => {
        dispath(setIsFetching(true))
        userAPI.setUsers(currentPage, pageSize).then(res => {
            dispath(setIsFetching(false))
            dispath(setUsers(res.data.items))
            dispath(setTotalUsersCount(res.data.totalCount))
        })
    }
};

export const followToUserThunk: FollowToUserThunkType = (userId) => {

    return (dispath: Dispatch) => {
        dispath(setFollowingInProgress(true, userId))
        userAPI.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
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
                if (res.data.resultCode === 0) {
                    dispath(unfollow(userId))
                    dispath(setFollowingInProgress(false, userId))
                }
            })
    }
};

export const paginationThunk: PaginationThunkType = (page, pageSize) => {

    return (dispath: Dispatch) => {
        dispath(setCurrentPage(page))
        dispath(setIsFetching(true))
        userAPI.setUsers(page, pageSize).then(res => {
            dispath(setUsers(res.data.items))
            dispath(setIsFetching(false))
        })
    }
};