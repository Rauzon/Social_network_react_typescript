import React from 'react';
import style from './profile.module.css'
import {MyPosts} from "./myPosts/myPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {profilePageType} from "../../redux/store";

type propsType = {
    profilePage:profilePageType
    addPost: () => void
    updatePost: (newPostValue:string | number) => void
}

export const Profile:React.FC<propsType>= (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} newPost={props.profilePage.newPost} addPost={props.addPost}
                     updatePost={props.updatePost}/>
        </div>
    )

}