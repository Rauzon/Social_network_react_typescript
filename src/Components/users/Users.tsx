import React from 'react';
import s from './users.module.css'
import {UserType, CommonDataType} from "../../redux/redux-store";
import {UserItem} from "./UserItem";
import axios from 'axios';

type UsersPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    users: Array<UserType>
}


export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount(): void {

        if (this.props.users.length === 0) {
            axios.get<CommonDataType<UserType[]>>('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    debugger
                    this.props.setUsers(res.data.items)
                })
        }
    }

    render(): React.ReactNode {
        return (
            <div className={s.content__wrapper}>
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