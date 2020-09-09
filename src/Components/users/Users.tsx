import React from 'react';
import s from './users.module.css'
import {userType} from "../../redux/redux-store";

type UsersType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    users: Array<userType>
}

export const Users: React.FC<UsersType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: "Nikita",
                status: " I'm looking for a job",
                isFollowed: true,
                location: {city: "Minsk", country: 'Belarus'},
                photoUrl: 'https://vignette.wikia.nocookie.net/justdance/images/a/a7/Hotncoldavatar.png/revision/latest/scale-to-width-down/340?cb=20160714203107'
            },
            {
                id: 2,
                name: "Maksim",
                status: " I'm a man",
                isFollowed: true,
                location: {city: "Mogilev", country: 'Belarus'},
                photoUrl: 'https://vignette.wikia.nocookie.net/justdance/images/a/a7/Hotncoldavatar.png/revision/latest/scale-to-width-down/340?cb=20160714203107'
            },
            {
                id: 3,
                name: "Ahmed",
                status: " I'm a brutal man",
                isFollowed: false,
                location: {city: "Kazan", country: 'Russia'},
                photoUrl: 'https://vignette.wikia.nocookie.net/justdance/images/a/a7/Hotncoldavatar.png/revision/latest/scale-to-width-down/340?cb=20160714203107'
            }
        ])
    }

    return (
        <div className={s.content__wrapper}>
            {
                props.users.map(u => {

                    const unfollow = (userId: number) => props.unfollow(userId)
                    const follow = (userId: number) => props.follow(userId)

                    return (<div className={s.content__item} key={u.id}>
                            <div className={s.content__item_leftBlock}>
                                <div className={s.content__item_leftBlock_img}>
                                    <img src={u.photoUrl} alt=""/>
                                </div>
                                <div className={s.content__item_leftBlock_button}>
                                    {(u.isFollowed) ? <button onClick={() => unfollow(u.id)}>unfollow</button> :
                                        <button onClick={() => follow(u.id)}>follow</button>}
                                </div>
                            </div>
                            <div className={s.content__item_rightBlock}>
                                <div className={s.content__item_rightBlock_name}>
                                    <span>{u.name}</span>
                                </div>
                                <div className={s.content__item_rightBlock_status}>
                                    <span>{u.status}</span>
                                </div>
                                <div className={s.content__item_rightBlock_location}>
                                    <span>{u.location.city}</span>
                                    <span>{u.location.country}</span>
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}