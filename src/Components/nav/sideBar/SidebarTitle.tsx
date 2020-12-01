import React from "react";
import {NavLink} from "react-router-dom";

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