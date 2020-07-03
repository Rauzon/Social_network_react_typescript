import React from 'react';
import style from './profile.module.css'
import {MyPosts} from "./myPosts/myPosts";

export const Profile= () => {
    return (
        <div className={style.content}>
            <div className="content__avatar">
                avatar_icon
            </div>
            <div className="content__description">
                description
            </div>
            <MyPosts />
        </div>
    )

}