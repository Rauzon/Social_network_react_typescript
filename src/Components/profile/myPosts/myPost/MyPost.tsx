import React from 'react';
import style from './myPost.module.css'

type propsType = {
    message: string
}


export const MyPost: React.FC<propsType> = (props) => {
    return (
        <div className={style.content}>
            <div className={style.content__img}>
                <img src={'https://tr.rbxcdn.com/47055e576c5566fb6b384a8fccf98c64/420/420/Decal/Png'} alt=""/>
            </div>
            <div className={style.content__text}>
                <span>{props.message}</span>
            </div>
        </div>
    )

}