import React from "react";
import style from './messages.module.css'

type propsType = {
    message: string | number
}

export const Messages: React.FC<propsType> = (props) => {

    let defaultAvatarPhoto = `https://i.ibb.co/F8yML1z/image.png`

    return <div className={style.newMessage}>
        <div className={style.newMessage__img}>
            <img src={defaultAvatarPhoto} alt={'avatarPhoto'}/>
        </div>
        <div className={style.newMessage__content}>
            <span>{props.message}</span>
        </div>
    </div>
}