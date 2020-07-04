import React from "react";
import style from './messages.module.css'

type propsType = {
    message: string
}

export const Messages: React.FC<propsType> = (props) => {
    return <>
        <div className={style.newMessage__content}>
            <span>{props.message}</span>
        </div>
    </>
}