import React from 'react';
import s from './users.module.css'
import {UserType, CommonDataType} from "../../redux/redux-store";
import {UserItem} from "./UserItem";
import axios from 'axios';
import { Preloader } from '../preloader/Preloader';

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
            axios.get<CommonDataType<UserType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.setIsFetching(true)
                    this.props.setUsers(res.data.items)
                    this.props.setTotalUsersCount(res.data.totalCount)
                    this.props.setIsFetching(false)
                })
        }
    }

    setCurrentPage = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get<CommonDataType<UserType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setIsFetching(true)
                this.props.setUsers(res.data.items)
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

                        const unfollow = (userId: number) => this.props.unfollow(userId)
                        const follow = (userId: number) => this.props.follow(userId)

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