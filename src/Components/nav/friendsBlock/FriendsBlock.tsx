import React from "react";
import style from './friendsBlock.module.css';
import {NavLink} from "react-router-dom";
import {FriendsNavType} from "../../../redux/redux-store";
import Accordion from "@material-ui/core/Accordion";
import {AccordionDetails, AccordionSummary, createStyles, Typography} from "@material-ui/core";
import {makeStyles, withStyles, Theme} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type PropsType = {
    friends: FriendsNavType[]
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

export const FriendsBlock: React.FC<PropsType> = (props) => {

    const classes = useStyles();

    return <>
        <CssAccordion className={`${style.MuiPaperRoot} ${style.contentBlockWrapperRoot}`}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Friends</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.contentBlockWrapper}>
                <Typography className={classes.contentBlock}>
                    {props.friends.map(f => <div key={f.id} className={style.nav__friendsBlock_item}>
                            <div className={style.nav__friendsBlock_item_img}>
                                <img src="https://i.ibb.co/F8yML1z/image.png" alt=""/>
                            </div>
                            <div className={style.nav__friendsBlock_item_name}>
                                <NavLink to={f.pathToDialog}>{f.name}</NavLink>
                            </div>
                            {f.isOnline && <div className={style.nav__friendsBlock_item_onlineStatus}></div>}
                        </div>
                    )}
                </Typography>
            </AccordionDetails>
        </CssAccordion>
    </>
}