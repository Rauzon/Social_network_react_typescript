import React from 'react';
import style from './profile.module.css'
import {MyPosts} from "./myPosts/myPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import { profilePageType } from '../../redux/redux-store';

type propsType = {
    profilePage:profilePageType
}

export const Profile:React.FC<propsType>= (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo userProfile={props.profilePage.userProfile}
                         isFetching={props.profilePage.isFetching}/>
            <MyPosts posts={props.profilePage.posts} newPost={props.profilePage.newPost} />
        </div>
    )

}