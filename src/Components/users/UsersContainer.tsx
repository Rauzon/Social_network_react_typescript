import React from 'react';
import {connect} from 'react-redux';
import {UsersAPI} from "./UsersAPI";
import {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount, setCurrentPage, setIsFetching
} from "../../redux/TypesForRedux";
import {stateType, UserType} from "../../redux/redux-store";

type mapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
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

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
})(UsersAPI)