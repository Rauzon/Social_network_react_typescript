import React from "react";
import style from './nav.module.css';
import {NavLink} from "react-router-dom";

export const Nav = (props:any) => {
    type navType = {
        id: number,
        title: string,
        path: string
    }
    type navBarType = Array<navType>


    const titles: navBarType = [
        {id: 1, title: 'profile', path: '/profile'},
        {id: 2, title: 'dialogs', path: '/dialogs'},
        {id: 3, title: 'users', path: '/users'},
        {id: 4, title: 'news', path: '/news'},
        {id: 5, title: 'settings', path: '/settings'}
    ]

    return <div className={style.nav}>
        {
            titles.map((t) => <div className={style.nav__wrap_menu} key={t.id}>
                <NavLink to={t.path}><li>{t.title}</li></NavLink>
            </div>)
        }
    </div>
}