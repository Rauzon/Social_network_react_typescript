import React from "react";
import style from './nav.module.css';
import {SidebarTitle} from "./sideBar/SidebarTitle";
import {FriendsBlock} from "./friendsBlock/FriendsBlock";
import {useSelector} from "react-redux";
import {navPageType, stateType} from "../../redux/redux-store";

type propsType = {
    navPage: navPageType
}

export const Nav: React.FC<propsType> = (props) => {

    const isAuth = useSelector<stateType, boolean>(state => state.auth.isAuth)

    return <div className={style.nav}>
        {props.navPage.navTitles.map((t) => <SidebarTitle key={t.id} title={t.title} path={t.path}/>)}
        <div className={style.nav__friendsBlock}>
            {isAuth && <>
                <div className={style.nav__friendsBlock_title}>
                    <h4>Friends:</h4>
                </div>
                <FriendsBlock friends={props.navPage.friends}/>
            </>}
        </div>
    </div>
}