import React from "react";
import style from './names.module.css'
import {NavLink} from "react-router-dom";

type propsType = {
    name: string,
    path: string
}

export const Names: React.FC<propsType> = (props) => {
    return <div className={style.dialogs__people_name}>
        <div className={style.dialogs__people_name_img}>
            <img src={'https://i.ibb.co/F8yML1z/image.png'} alt=""/>
        </div>
        <div className={style.dialogs__people_name_content}>
            <NavLink to={props.path}><span>{props.name}</span></NavLink>
        </div>
    </div>
}