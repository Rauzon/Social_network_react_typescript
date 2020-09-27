import React from 'react';
import {connect} from 'react-redux';
import {UsersAPI} from "./UsersAPI";
import {Dispatch} from "redux";
import {
    ActionCreatorsType,
    followToUserAC,
    unfollowToUserAC,
    setUsersAC,
    setTotalUsersCountAC, setCurrentPageAC, setIsFetchingAC
} from "../../redux/TypesForRedux";
import {stateType, UserType} from "../../redux/redux-store";

type mapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionCreatorsType>): mapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followToUserAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowToUserAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)