import React from 'react';
import s from './users.module.css'
import {UserType} from "../../redux/redux-store";
import {UserItem} from "./UserItem";
import {authRedirectHOC} from "../../hoc/authRedirectHOC";
import {CircularProgress} from "@material-ui/core";

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


export class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount(): void {

        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    setCurrentPage = (p: number) => {
        this.props.pagination(p, this.props.pageSize)
    }

    render(): React.ReactNode {

        //pagination
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let arrPageCount = [];


        for (let i = 1; pageCount >= i; i++) {
            arrPageCount.push(i)
        }
        // ---- pagination ----

        return (
            <div className={s.content__wrapper}>
                {this.props.isFetching && <CircularProgress className={s.circleProgress}/>}
                {/*pagination*/}
                {
                    arrPageCount.map(p => {
                        return <span key={p}
                                     className={(this.props.currentPage === p) ? `${s.page} ${s.active_page}` : `${s.page}`}
                                     onClick={() => this.setCurrentPage(p)}> {p} </span>
                    })
                }
                {/*-----pagination-----*/}
                {
                    this.props.users.map(u => {

                        const unfollow = (userId: number) => {

                            this.props.unfollow(userId)
                        }

                        const follow = (userId: number) => {

                            this.props.follow(userId)
                        }

                        return <UserItem key={u.id}
                                         id={u.id}
                                         status={u.status}
                                         photos={u.photos}
                                         followed={u.followed}
                                         unfollow={unfollow}
                                         follow={follow}
                                         name={u.name}
                                         isFollowingInProgress={this.props.isFollowingInProgress}/>

                    })
                }
            </div>
        )
    }

}

export default authRedirectHOC(UsersAPI)