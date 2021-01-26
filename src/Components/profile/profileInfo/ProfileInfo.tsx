import React, {useState} from "react";
import s from './profileInfo.module.css';
import {CommonDataProfileType} from "../../../redux/reducers/profilePage-reducer";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import {createStyles, IconButton, Theme} from "@material-ui/core";
import {ProfileInfoData} from "./ProfileInfoData";
import {EditableStatus} from "./EditableStatus";
import {ProfileInfoDataForm} from "./ProfileInfoDataForm";
import {makeStyles} from "@material-ui/core/styles";
import {PhotoCamera} from "@material-ui/icons";

type PropsType = {
    userProfile: CommonDataProfileType
    status: string
    updateStatus: (title: string) => void
    userId: string
    paramsUserId: boolean
    updatePhoto: (photo: any) => void
    updateProfileData: (data: any) => void
}

export const ProfileInfo: React.FC<PropsType> = React.memo((props) => {

    const [editeMode, setEditeMode] = useState<boolean>(false)

    let defaultAvatarPhoto = `https://i.imgur.com/d8HZHxF.jpg`

    const onChangePhotoProfile = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let target = event.target as HTMLInputElement;
        let file = target.files;
        if (file) {
            props.updatePhoto(file[0])
        }

    }

    //change editeMode to false pressing button save
    const setEditeModeHandler = () => {
        setEditeMode(false)
    }

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                },
            },
            input: {
                display: 'none',
            },
        }),
    );

    const classes = useStyles();

    return <div className={s.content__profileInfo}>
        <div className={s.content__mainInfo}>
            <div className={s.content__mainInfo_avatar}>
                <img src={(props.userProfile?.photos?.large) ? props.userProfile?.photos?.large :
                    defaultAvatarPhoto}
                     alt=""/>
                {!props.paramsUserId &&
                <div className={s.content__mainInfo_photoBtn}>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file"
                           onChange={onChangePhotoProfile}/>
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera fontSize={"large"}/>
                        </IconButton>
                    </label>
                </div>
                }
            </div>
            < div className={s.content__mainInfo_contactStatus}>
                <div className={s.content__description_fullName}>
                    <b>FullName</b>: {props.userProfile?.fullName}
                </div>
                <EditableStatus status={props.status} updateStatus={props.updateStatus} userId={props.userId}/>
            </div>
        </div>
        <div className={s.content__description}>
            {!editeMode ? <ProfileInfoData updatePhoto={props.updatePhoto}
                                           paramsUserId={props.paramsUserId}
                                           updateStatus={props.updateStatus}
                                           userId={props.userId}
                                           status={props.status}
                                           userProfile={props.userProfile}/>
                : <ProfileInfoDataForm updatePhoto={props.updatePhoto}
                                       paramsUserId={props.paramsUserId}
                                       updateStatus={props.updateStatus}
                                       userId={props.userId}
                                       status={props.status}
                                       userProfile={props.userProfile}
                                       setEditeModeHandler={setEditeModeHandler}
                                       fullName={props.userProfile?.fullName}
                                       updateProfileData={props.updateProfileData}
                />
            }
            {(!props.paramsUserId && !editeMode) && <div className={s.content__description_editBtn}>
                <IconButton>
                    <BorderColorIcon onClick={() => setEditeMode(true)} fontSize="small"/>
                </IconButton>
            </div>}
        </div>
    </div>
})