import React from 'react';
import style from './header.module.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import { Button, createMuiTheme } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {lightBlue} from "@material-ui/core/colors";

type PropsType = {
    login: string | null
    isAuth: boolean
    logOutProfile:() => void
}


export const Header: React.FC<PropsType> = (props) => {

    const logOut = () => {
        props.logOutProfile()
    }

    return (
        <div className={style.header}>
            <div className={style.header__wrapper}>
                <div className={style.header__wrapper_img}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={style.header__authBlock}>
                    {props.isAuth ?
                        <div className={style.header__authBlock_login}>
                            <span>{props.login}</span>
                            <div className={style.header__logOutBtn}>
                                <Button variant="contained" onClick={logOut}>
                                    <ExitToAppIcon />
                                    LOG OUT
                                </Button>
                            </div>
                        </div> :
                        <NavLink to={'/login'}>Sign In</NavLink>}
                </div>
            </div>
        </div>
    )

}
