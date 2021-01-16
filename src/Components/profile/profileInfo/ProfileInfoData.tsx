import React, {ChangeEvent} from "react";
import s from "./profileInfo.module.css";
import {CommonDataProfileType} from "../../../redux/reducers/profilePage-reducer";
import {EditableStatus} from "./EditableStatus";
import {Contacts} from "./Contacts";

type ProfileInfoDataPropsType = {
    userProfile: CommonDataProfileType
    updatePhoto: (photo: any) => void
    paramsUserId: boolean
    status: string
    updateStatus: (title: string) => void
    userId: string
}


export const ProfileInfoData: React.FC<ProfileInfoDataPropsType> = (props) => {



    return <>
            <div className={s.content__description_aboutMe}>
                <b>AboutMe</b>: {props.userProfile?.aboutMe}
            </div>
            <div className={s.content__description_searchJob}>
                <b>Search a job:</b> {(props.userProfile?.lookingForAJob) ? "Yes" : "No"}
            </div>
            {props.userProfile?.lookingForAJob && <div className={s.content__description_desriptionOfJob}>
                <b>Description of job:</b> {(props.userProfile?.lookingForAJobDescription) ?
                props.userProfile.lookingForAJobDescription :
                "No description"}
            </div>
            }
            <Contacts userProfile={props.userProfile}/>
    </>
}