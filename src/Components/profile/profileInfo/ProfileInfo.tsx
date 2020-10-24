import React from "react";
import s from './profileInfo.module.css';
import {CommonDataProfileType} from "../../../redux/redux-store";
import {Preloader} from "../../preloader/Preloader";
import {EditableStatus} from "./EditableStatus";

type PropsType = {
    userProfile: CommonDataProfileType | null
    isFetching: boolean
    status: string
    updateStatus: (title: string) => void
    userId: string
}

export const ProfileInfo: React.FC<PropsType> = (props) => {

    return <>
        {props.isFetching && <Preloader/>}
        <div className={s.content__avatar}>
            <img src={(props.userProfile?.photos?.large) ? props.userProfile?.photos?.large :
                "https://i.pinimg.com/originals/1d/a5/a0/1da5a0d16d1f7dd7e43b6da4b68cdf46.png"} alt=""/>
        </div>
        <div className={s.content__description}>
            <EditableStatus status={props.status} updateStatus={props.updateStatus} userId={props.userId}/>
            <div className={s.content__description_fullName}>
                <b>FullName</b>: {props.userProfile?.fullName}
            </div>
            <div className={s.content__description_aboutMe}>
                <b>AboutMe</b>: {props.userProfile?.aboutMe}
            </div>
            <div className={s.content__description_contacts}>
                <b>Contacts</b>:

                {/*{*/}
                {/*    // @ts-ignore*/}
                {/*    Object.keys(props.userProfile?.contacts).map(contact => (*/}
                {/*        <span className="card-panel">*/}
                {/*            {*/}
                {/*                // @ts-ignore*/}
                {/*                props.userProfile?.contacts[contact]*/}
                {/*            }*/}
                {/*        </span>*/}
                {/*    ))}*/}
            </div>
            <div className={s.content__description_searchJob}>
                <b>Search a job:</b> {(props.userProfile?.lookingForAJob) ? "Yes" : "No"}
            </div>
            <div className={s.content__description_desriptionOfJob}>
                <b>Description of job:</b> {(props.userProfile?.lookingForAJobDescription) ?
                props.userProfile.lookingForAJobDescription :
                "No description"}
            </div>
        </div>
    </>
}