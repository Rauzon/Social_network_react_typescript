import React from "react";
import style from './nav.module.css';
import { SidebarTitle } from "./sideBar/SidebarTitle";
import {FriendsBlock} from "./friendsBlock/FriendsBlock";
import {navPageType} from "../../redux/store";

type propsType = {
    navPage: navPageType
}

export const Nav:React.FC<propsType> = (props) => {
    return <div className={style.nav}>
        {props.navPage.navTitles.map((t) => <SidebarTitle key={t.id} title={t.title} path={t.path}/>)}
        <div className={style.nav__friendsBlock}>
            <div className={style.nav__friendsBlock_title}>
                <h4>Friends:</h4>
            </div>
            <FriendsBlock />
        </div>
    </div>
}