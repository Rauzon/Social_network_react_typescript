import React from "react";
import s from './nav.module.css';
import {SidebarTitle} from "./sideBar/SidebarTitle";
import {FriendsBlock} from "./friendsBlock/FriendsBlock";
import {useSelector} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {NavPageType} from "../../redux/reducers/navPage-reducer";

type propsType = {
    navPage: NavPageType
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
                <FriendsBlock friends={props.navPage.friends}/>
            </>}
        </div>
    </div>
}