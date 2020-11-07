import React from 'react';
import style from './header.module.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

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
                            <button onClick={logOut}>LOG OUT</button>
                        </div> :
                        <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </div>
    )

}
