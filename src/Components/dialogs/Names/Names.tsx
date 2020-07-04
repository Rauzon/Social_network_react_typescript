import React from "react";
import style from './names.module.css'
import {NavLink} from "react-router-dom";

type propsType = {
    name: string,
    path: string
}

export const Names: React.FC<propsType> = (props) => {
    return <>
        <div className={style.dialogs__people_name}>
            <NavLink to={props.path}><span>{props.name}</span></NavLink>
        </div>
    </>
}