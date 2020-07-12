import React from "react";
import style from './friendsBlock.module.css';

export const FriendsBlock = (props:any) => {

    return <div className={style.nav__friendsBlock_item}>
        <div className={style.nav__friendsBlock_item_icon}>
            <img src="" alt=""/>
        </div>
        <div className={style.nav__friendsBlock_item_name}>
            <span>{'sometext'}</span>
        </div>
    </div>
}