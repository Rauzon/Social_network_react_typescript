import React from "react";
import s from "./profileInfo.module.css";
import style from "../../nav/friendsBlock/friendsBlock.module.css";
import {AccordionDetails, AccordionSummary, createStyles, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {CommonDataProfileType, SocialContactsType} from "../../../redux/reducers/profilePage-reducer";
import {makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";

type ContactsPropsType = {
    userProfile: CommonDataProfileType
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

export const Contacts: React.FC<ContactsPropsType> = (props) => {

    const classes = useStyles();

    let contacts: any
    if (props.userProfile && props.userProfile.contacts) {
        let keys = Object.keys(props.userProfile.contacts)
        contacts = keys.map((key) => {
            return (
                <div className={s.content__socialLinks} key={key}>
                    <span><b>{key}</b>: {props.userProfile.contacts[key as keyof SocialContactsType]}</span>
                </div>
            )
        })
    }

    return <div className={s.content__description_contacts}>
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

}