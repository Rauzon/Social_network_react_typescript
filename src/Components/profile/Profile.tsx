import React from 'react';
import style from './profile.module.css'
import {MyPosts} from "./myPosts/myPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {profilePageType} from "../../redux/store";

type propsType = {
    profilePage:profilePageType
}

export const Profile:React.FC<propsType>= (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}/>
        </div>
    )

}