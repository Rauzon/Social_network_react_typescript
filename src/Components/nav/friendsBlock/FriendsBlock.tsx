import React from "react";
import style from './friendsBlock.module.css';
import {NavLink} from "react-router-dom";
import {FriendsNavType} from "../../../redux/redux-store";

type PropsType = {
    friends: FriendsNavType[]
}

export const FriendsBlock: React.FC<PropsType> = (props) => {

    return <>
        {props.friends.map(f => <div key={f.id} className={style.nav__friendsBlock_item}>
                <div className={style.nav__friendsBlock_item_img}>
                    <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt=""/>
                </div>
                <div className={style.nav__friendsBlock_item_name}>
                    <NavLink to={f.pathToDialog}>{f.name}</NavLink>
                </div>
                {f.isOnline && <div className={style.nav__friendsBlock_item_onlineStatus}></div>}
            </div>
        )}
    </>
}