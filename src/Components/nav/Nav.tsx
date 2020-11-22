import React from "react";
import s from './nav.module.css';
import {SidebarTitle} from "./sideBar/SidebarTitle";
import {FriendsBlock} from "./friendsBlock/FriendsBlock";
import {useSelector} from "react-redux";
import {navPageType, stateType} from "../../redux/redux-store";

type propsType = {
    navPage: navPageType
}

export const Nav: React.FC<propsType> = (props) => {

    const isAuth = useSelector<stateType, boolean>(state => state.auth.isAuth)

    return <div className={s.nav}>
        <div className={s.wrap__title}>
            {props.navPage.navTitles.map((t) => <SidebarTitle key={t.id}
                                                              title={t.title}
                                                              path={t.path}/>)}
        </div>
        <div className={s.nav__friendsBlock}>
            {isAuth && <>
                <div className={s.nav__friendsBlock_title}>
                    <h4>Friends:</h4>
                </div>
                <FriendsBlock friends={props.navPage.friends}/>
            </>}
        </div>
    </div>
}