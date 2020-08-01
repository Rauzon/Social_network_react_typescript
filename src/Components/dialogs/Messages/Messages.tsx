import React from "react";
import style from './messages.module.css'

type propsType = {
    message: string | number
}

export const Messages: React.FC<propsType> = (props) => {
    return <div className={style.newMessage}>
        <div className={style.newMessage__img}>
            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"/>
        </div>
        <div className={style.newMessage__content}>
            <span>{props.message}</span>
        </div>
    </div>
}