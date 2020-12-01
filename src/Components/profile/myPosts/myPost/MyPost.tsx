import React from 'react';
import style from './myPost.module.css'

type propsType = {
    message: string | number
    photo: string | null | undefined
}


export const MyPost: React.FC<propsType> = (props) => {

    let defaultAvatarPhoto = `https://i.ibb.co/F8yML1z/image.png`

    return (
        <div className={style.content}>
            <div className={style.content__img}>
                <img src={(props.photo) ? props.photo : defaultAvatarPhoto} alt=""/>
            </div>
            <div className={style.content__text}>
                <span>{props.message}</span>
            </div>
        </div>
    )
}