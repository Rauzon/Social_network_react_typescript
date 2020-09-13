import React from 'react';
import {connect} from 'react-redux';
import {Users} from "./Users";
import {Dispatch} from "redux";
import {ActionCreatorsType, followToUserAC, unfollowToUserAC, setUsersAC} from "../../redux/TypesForRedux";
import {stateType, UserType} from "../../redux/redux-store";

type mapStateToPropsType = {
    users: Array<UserType>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)