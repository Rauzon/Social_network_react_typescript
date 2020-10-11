import React from 'react';
import s from './users.module.css'
import {UserType} from "../../redux/redux-store";
import {UserItem} from "./UserItem";
import {Preloader} from '../preloader/Preloader';
import {userAPI} from "../../API/API";

type UsersPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUserCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
    users: Array<UserType>
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
}


export class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount(): void {

        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)
            userAPI.setUsers(this.props.currentPage, this.props.pageSize).then(res => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(res.items)
                    this.props.setTotalUsersCount(res.totalCount)
                })
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

        return (
            <div className={s.content__wrapper}>
                {this.props.isFetching && <Preloader/>}
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
                            userAPI.unfollow(userId)
                                .then(res => {
                                if(res.resultCode === 0){
                                    this.props.unfollow(userId)
                                }
                            })
                        }

                        const follow = (userId: number) => {
                           userAPI.follow(userId)
                               .then(res => {
                                if(res.resultCode === 0){
                                    this.props.follow(userId)
                                }
                            })
                        }

                        return <UserItem key={u.id}
                                         id={u.id}
                                         status={u.status}
                                         photos={u.photos}
                                         followed={u.followed}
                                         unfollow={unfollow}
                                         follow={follow}
                                         name={u.name}/>
                    })
                }
            </div>
        )
    }

}