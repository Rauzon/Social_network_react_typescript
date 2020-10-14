import React from 'react';
import {connect} from 'react-redux';
import {UsersAPI} from "./UsersAPI";
import {setUsers,
    setCurrentPage, setIsFetching, setFollowingInProgress
} from "../../redux/TypesForRedux";
import {stateType, UserType} from "../../redux/redux-store";
import {getUsersThunk, followToUserThunk, unfollowToUserThunk} from '../../thunks/usersThunk';

type mapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow: followToUserThunk,
    unfollow:unfollowToUserThunk,
    setUsers,
    setCurrentPage,
    setIsFetching,
    setFollowingInProgress,
    getUsers: getUsersThunk,
})(UsersAPI)