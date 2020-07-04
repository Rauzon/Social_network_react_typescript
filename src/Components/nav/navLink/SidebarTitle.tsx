import React from "react";
import style from './navLink.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    path: string,
    title: string
}

export const SidebarTitle: React.FC<PropsType> = (props) => {
    return <>
        <div className={style.nav__wrap_menu}>
            <NavLink to={props.path}>
                <li>{props.title}</li>
            </NavLink>
        </div>
    </>
}