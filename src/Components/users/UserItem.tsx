import React, {useCallback} from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import {PhotoUserType} from "../../redux/reducers/profilePage-reducer";


type UserItemType = {
    id: number
    photos: PhotoUserType
    followed: boolean
    name: string | null
    status: string | null
    isFollowingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


export const UserItem: React.FC<UserItemType> = React.memo((props) => {


    const follow = useCallback(() => {
        props.follow(props.id)
    }, [props.id])

    const unfollow = useCallback(() => {
        props.unfollow(props.id)
    }, [props.id])

    let defaultAvatarPhoto = `https://i.ibb.co/F8yML1z/image.png`;

    return <div className={s.content__item}>
        <div className={s.content__item_img}>
            <NavLink to={'/profile/' + props.id}>
                <img
                    src={(props.photos.small) ? props.photos.small : defaultAvatarPhoto}
                    alt=""/>
            </NavLink>
        </div>
        <div className={s.content__item_info}>
            <div className={s.content__item_info_name}>
                <span>{props.name}</span>
            </div>
            <div className={s.content__item_info_status}>
                <span>{props.status}</span>
            </div>
        </div>
        <div className={s.content__item_button}>
            {(props.followed) ? <button onClick={unfollow} className={s.content__item_button_unfollow}
                                        disabled={props.isFollowingInProgress.some(id => id == props.id)}><img src="https://img.icons8.com/material-sharp/24/000000/unsubscribe.png" alt=""/></button> :
                <button onClick={follow} className={s.content__item_button_follow}
                        disabled={props.isFollowingInProgress.some(id => id == props.id)}><img src="https://img.icons8.com/fluent-systems-filled/24/000000/subscription.png" alt=""/></button>}
        </div>
    </div>
})

