import React, {CSSProperties} from 'react';
import s from './users.module.css'
import {UserType} from "../../redux/redux-store";
import {UserItem} from "./UserItem";
import {userAPI} from "../../API/API";
import {authRedirectHOC} from "../../hoc/authRedirectHOC";
import {CircularProgress} from "@material-ui/core";

type UsersPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
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
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        userAPI.setUsers(p, this.props.pageSize).then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.items)
            this.props.setIsFetching(false)
        })
    }


    render(): React.ReactNode {

        //pagination
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let arrPageCount = [];


        for (let i = 1; pageCount >= i; i++) {
            arrPageCount.push(i)
        }
        // ---- pagination ----

        const circleProgressStyle: CSSProperties = {
            display: 'block',
            position: "absolute",
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            margin: 'auto',

        }

        return (
            <div className={s.content__wrapper}>
                {this.props.isFetching && <CircularProgress style={circleProgressStyle} />}
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