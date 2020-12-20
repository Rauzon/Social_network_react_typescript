import React from "react";
import s from './profileInfo.module.css';
import {EditableStatus} from "./EditableStatus";
import style from "../../nav/friendsBlock/friendsBlock.module.css";
import {AccordionDetails, AccordionSummary, createStyles, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import {CommonDataProfileType, SocialContactsType} from "../../../redux/reducers/profilePage-reducer";

type PropsType = {
    userProfile: CommonDataProfileType
    status: string
    updateStatus: (title: string) => void
    userId: string
}

export const ProfileInfo: React.FC<PropsType> = (props) => {

    let contacts: any
    if (props.userProfile && props.userProfile.contacts) {
        let keys = Object.keys(props.userProfile.contacts)
        contacts = keys.map((key) => {
            return (
                <div className={s.content__socialLinks} key={key}>
                    <span>{key}: {props.userProfile.contacts[key as keyof SocialContactsType]}</span>
                </div>
            )
        })
    }

    let defaultAvatarPhoto = `https://i.imgur.com/d8HZHxF.jpg`

    const CssAccordion = withStyles({
        root: {
            '& .MuiAccordionDetails-root': {
                padding: '0px',
            },
        },
    })(Accordion);

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                width: '100%',
                "& .MuiAccordionDetails": {
                    padding: '0px',
                },
            },
            heading: {
                fontSize: theme.typography.pxToRem(15),
                fontWeight: theme.typography.fontWeightRegular,
            },
            contentBlock: {
                width: '100%',
            },
            contentBlockWrapper: {
                width: '100%',
            },
            contentBlockWrapperRoot: {
                width: '100%',
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
            </div>
            <div className={s.content__mainInfo_contactStatus}>
                <div className={s.content__description_fullName}>
                    <b>FullName</b>: {props.userProfile?.fullName}
                </div>
                <EditableStatus status={props.status} updateStatus={props.updateStatus} userId={props.userId}/>
            </div>
        </div>
        <div className={s.content__description}>
            <div className={s.content__description_aboutMe}>
                <b>AboutMe</b>: {props.userProfile?.aboutMe}
            </div>
            <div className={s.content__description_searchJob}>
                <b>Search a job:</b> {(props.userProfile?.lookingForAJob) ? "Yes" : "No"}
            </div>
            <div className={s.content__description_desriptionOfJob}>
                <b>Description of job:</b> {(props.userProfile?.lookingForAJobDescription) ?
                props.userProfile.lookingForAJobDescription :
                "No description"}
            </div>
            <div className={s.content__description_contacts}>
                <CssAccordion className={`${style.MuiPaperRoot} ${style.contentBlockWrapperRoot}`}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}><b>Contacts:</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.contentBlockWrapper}>
                        <Typography className={classes.contentBlock} component={'span'}>
                            {contacts}
                        </Typography>
                    </AccordionDetails>
                </CssAccordion>
            </div>
        </div>
    </div>

}