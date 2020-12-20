import React, {CSSProperties} from 'react';
import style from './profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/reducers/profilePage-reducer";
import {CircularProgress} from "@material-ui/core";

type PropsType = {
    profilePage: ProfilePageType
    updateStatus: (title: string) => void
    userId: string
}

export const Profile: React.FC<PropsType> = React.memo((props) => {

    const circleProgressStyle: CSSProperties = {
        display: 'block',
        position: "absolute",
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        margin: 'auto',

    }


    return (
        <div className={style.content}>
            {props.profilePage.isFetching ?
                <CircularProgress style={circleProgressStyle}/> : <>
                    <ProfileInfo userProfile={props.profilePage.userProfile}
                                 status={props.profilePage.profileStatus}
                                 updateStatus={props.updateStatus}
                                 userId={props.userId}/>
                    <MyPosts posts={props.profilePage.posts}
                             photo={props.profilePage.userProfile.photos?.large}/>
                </>
            }
        </div>
    )

})