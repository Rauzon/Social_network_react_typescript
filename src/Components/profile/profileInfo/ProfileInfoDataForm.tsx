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
import * as yup from 'yup';

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

//error validation
let validationSchema = yup.object().shape({
    aboutMe: yup.string()
        .required()
        .max(300, '300 or less chars'),
    lookingForAJobDescription: yup.string()
        .required()
        .max(300, '300 or less chars'),
    contacts: yup.object({
        facebook: yup.string().length(30, '30 or less chars'),
        website: yup.string().length(30, '30 or less chars'),
        vk: yup.string().length(30, '30 or less chars'),
        twitter: yup.string().length(30, '30 or less chars'),
        instagram: yup.string().length(30, '30 or less chars'),
        github: yup.string().length(30, '30 or less chars'),
        youtube: yup.string().length(30, '30 or less chars'),
        mainLink: yup.string().length(30, '30 or less chars'),
    })
});

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

    const [isChecked, setIsChecked] = useState<boolean>(props.userProfile.lookingForAJob);

    const classes = useStyles();

    const formik = useFormik({
        validationSchema,
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
            props.updateProfileData({
                userId: props.userId,
                fullName: props.fullName,
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

    const errorStyle = {color: 'red'}

    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className={s.content__description_aboutMe}>
                <b>About me:</b><TextField
                id="AboutMe"
                name="aboutMe"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.aboutMe}
                rows={3}
                variant="outlined"
            />
                {formik.errors.aboutMe && formik.touched.aboutMe ? (
                    <div style={errorStyle}>{formik.errors.aboutMe}</div>
                ) : null}
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
                    name="lookingForAJobDescription"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lookingForAJobDescription}
                    rows={3}
                    variant="outlined"
                />
                {formik.errors.lookingForAJobDescription && formik.touched.lookingForAJobDescription ? (
                    <div style={errorStyle}>{formik.errors.lookingForAJobDescription}</div>
                ) : null}
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