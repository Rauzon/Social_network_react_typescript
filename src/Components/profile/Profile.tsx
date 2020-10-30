import React from 'react';
import style from './profile.module.css'
import {MyPosts} from "./myPosts/myPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {profilePageType} from "../../redux/reducers/profilePage-reducer";


type propsType = {
    profilePage: profilePageType
    updateStatus: (title: string) => void
    userId: string
}

export const Profile: React.FC<propsType> = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo userProfile={props.profilePage.userProfile}
                         isFetching={props.profilePage.isFetching}
                         status={props.profilePage.profileStatus}
                         updateStatus={props.updateStatus}
                         userId={props.userId}/>
            <MyPosts posts={props.profilePage.posts} />
        </div>
    )

}