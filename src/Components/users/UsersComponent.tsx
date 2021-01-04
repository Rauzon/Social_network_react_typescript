import React, {useEffect} from 'react';
import s from './users.module.css'
import {UserItem} from "./UserItem";
import {authRedirectHOC} from "../../hoc/authRedirectHOC";
import {CircularProgress} from "@material-ui/core";
import {UserType} from "../../redux/reducers/usersPage-reducer";
import {PaginationComponent} from "./PaginationComponent";
import {ButtonUpComponent} from "./ButtonUpComponent";

export type UsersPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    pagination: (page: number, pageSize: number) => void
    users: Array<UserType>
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    isFollowingInProgress: number[]
}

const UsersContainer: React.FC<UsersPropsType> = React.memo((props) => {

    useEffect(() => {
        if (props.users.length === 0) {
            props.getUsers(props.currentPage, props.pageSize)
        }
    }, [props.currentPage, props.pageSize]);


    return (
        <div className={s.content__wrapper}>
            {props.isFetching && <CircularProgress className={s.circleProgress}/>}
            <PaginationComponent pageSize={props.pageSize}
                                 currentPage={props.currentPage}
                                 pagination={props.pagination}
                                 setCurrentPage={props.setCurrentPage}
                                 totalUsersCount={props.totalUsersCount}/>
            <ButtonUpComponent currentPage={props.currentPage}
                               isFetching={props.isFetching}/>
            {
                props.users.map(u => {

                    const unfollow = ((userId: number) => {
                        props.unfollow(userId)
                    })

                    const follow = (userId: number) => {
                        props.follow(userId)
                    }

                    return <UserItem key={u.id}
                                     id={u.id}
                                     status={u.status}
                                     photos={u.photos}
                                     followed={u.followed}
                                     unfollow={unfollow}
                                     follow={follow}
                                     name={u.name}
                                     isFollowingInProgress={props.isFollowingInProgress}/>

                })
            }
        </div>
    )
})

export const UsersContainerWithRedirect = authRedirectHOC(UsersContainer)
