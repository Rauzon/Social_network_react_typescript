import React from "react";
import {NavLink} from "react-router-dom";
import s from '../nav.module.css';

type PropsType = {
    path: string
    title: string
    key: number
}

export const SidebarTitle: React.FC<PropsType> = (props) => {

    return <>
        <NavLink to={props.path}>
            <li>{props.title}</li>
        </NavLink>
    </>
}