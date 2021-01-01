import {userAPI} from "../API/API";
import {
    follow,
    setCurrentPage,
    setFollowingInProgress,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../redux/ActionCreators";
import {Dispatch} from "redux";
import {errorHandler, serverErrorHandler} from "../utils/errorHandlers";


export const getUsersThunk = (currentPage: number, pageSize: number) => {

    return (dispath: Dispatch) => {
        dispath(setIsFetching(true))
        userAPI.setUsers(currentPage, pageSize)
            .then(res => {
                dispath(setIsFetching(false))
                dispath(setUsers(res.data.items))
                dispath(setTotalUsersCount(res.data.totalCount))
            })
            .catch(err => {
                serverErrorHandler(err, dispath)
            })
    }
};

export const followToUserThunk = (userId: number) => {

    return (dispath: Dispatch) => {
        dispath(setFollowingInProgress(true, userId))
        userAPI.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispath(follow(userId))
                    dispath(setFollowingInProgress(false, userId))
                } else {
                    errorHandler(res, dispath)
                }
            })
            .catch(err => {
                serverErrorHandler(err, dispath)
            })
    }
}


export const unfollowToUserThunk = (userId: number) => {

    return (dispath: Dispatch) => {

        dispath(setFollowingInProgress(true, userId))
        userAPI.unfollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispath(unfollow(userId))
                    dispath(setFollowingInProgress(false, userId))
                } else {
                    errorHandler(res, dispath)
                }
            })
            .catch(err => {
                serverErrorHandler(err, dispath)
            })
    }
};

export const paginationThunk = (page: number, pageSize: number) => {

    return (dispath: Dispatch) => {
        dispath(setCurrentPage(page))
        dispath(setIsFetching(true))
        userAPI.setUsers(page, pageSize)
            .then(res => {
                dispath(setUsers(res.data.items))
                dispath(setIsFetching(false))
            })
            .catch(err => {
                serverErrorHandler(err, dispath)
            })
    }
};