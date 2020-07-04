import React from 'react';
import style from './profile.module.css'
import {MyPosts} from "./myPosts/myPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile= () => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )

}