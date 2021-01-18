import React, {useState} from "react";
import s from "./profileInfo.module.css";
import {CommonDataProfileType, SocialContactsType} from "../../../redux/reducers/profilePage-reducer";
import {useFormik} from "formik";
import {
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    createStyles,
    TextField,
    Typography
} from "@material-ui/core";
import style from "../../nav/friendsBlock/friendsBlock.module.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";

type ProfileInfoDataPropsType = {
    userProfile: CommonDataProfileType
    updatePhoto: (photo: any) => void
    paramsUserId: boolean
    status: string
    updateStatus: (title: string) => void
    userId: string
    setEditeModeHandler: () => void
    fullName: string | null
    updateProfileData: (data: any) => void
}


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

export const ProfileInfoDataForm: React.FC<ProfileInfoDataPropsType> = (props) => {

    const [isChecked, setIsChecked] = useState<boolean>(props.userProfile.lookingForAJob)

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            aboutMe: props.userProfile.aboutMe,
            lookingForAJob: props.userProfile.lookingForAJob,
            lookingForAJobDescription: props.userProfile.lookingForAJobDescription,
            contacts: {
                facebook: (props.userProfile.contacts.facebook),
                website: props.userProfile.contacts.website,
                vk: props.userProfile.contacts.vk,
                twitter: props.userProfile.contacts.twitter,
                instagram: props.userProfile.contacts.instagram,
                github: props.userProfile.contacts.github,
                youtube: props.userProfile.contacts.youtube,
                mainLink: props.userProfile.contacts.mainLink,
            }
        },
        onSubmit: values => {
            debugger
            props.updateProfileData({
                fullName: (props.fullName) ? props.fullName : '',
                ...values
            })
            props.setEditeModeHandler()
        },
    });

    let contacts: any
    if (props.userProfile && props.userProfile.contacts) {
        let keys = Object.keys(props.userProfile.contacts)
        contacts = keys.map((key) => {
            return (
                <div className={s.content__socialLinks} key={key}>
                    <span><b>{key}</b>:<TextField
                        id={`${key}`}
                        label={`${key}`}
                        name={`contacts.${key}`}
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.contacts[key as keyof SocialContactsType]}
                    />
                    </span>
                </div>
            )
        })
    }

    //for changing checkbox
    const onChangeCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!e.currentTarget.checked)
        formik.handleChange(e)
    }

    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className={s.content__description_aboutMe}>
                <b>About me:</b>
                <TextField
                    id="AboutMe"
                    label="Describe yourself"
                    name="AboutMe"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.aboutMe}
                    rows={3}
                    variant="outlined"
                />
            </div>
            <div className={s.content__description_searchJob}>
                <b>Search a job:</b>
                <Checkbox
                    checked={formik.values.lookingForAJob}
                    onChange={onChangeCheckboxHandler}
                    name="lookingForAJob"
                    color="primary"
                />
            </div>
            {(props.userProfile?.lookingForAJob || !isChecked) &&
            <div className={s.content__description_desriptionOfJob}>
                <b>Description of job:</b>
                <TextField
                    id="lookingForAJobDescription"
                    label="what you want"
                    name="lookingForAJobDescription"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lookingForAJobDescription}
                    rows={3}
                    variant="outlined"
                />
            </div>
            }
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
            <Button type="submit">Save</Button>
        </form>
    </>
}