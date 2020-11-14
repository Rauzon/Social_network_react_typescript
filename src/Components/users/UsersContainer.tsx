import React from 'react';
import {connect} from 'react-redux';
import UsersAPI from "./UsersAPI";
import {setUsers,
    setCurrentPage, setIsFetching, setFollowingInProgress
} from "../../redux/TypesForRedux";
import {stateType, UserType} from "../../redux/redux-store";
import {getUsersThunk, followToUserThunk, unfollowToUserThunk} from '../../thunks/usersThunk';
import {getTotalUsersCountSelector, getUsersSelector, getPageSizeSelector, getCurrentPageSelector, getIsFetchingSelector, getIsFollowingInProgressTypeSelector} from '../../redux/selectors/UsersSelectors';

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
        users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        pageSize: getPageSizeSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowingInProgress: getIsFollowingInProgressTypeSelector(state)
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