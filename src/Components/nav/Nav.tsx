import React from "react";
import style from './nav.module.css';
import { SidebarTitle } from "./navLink/SidebarTitle";

export const Nav = (props:any) => {
    type navType = {
        id: number,
        title: string,
        path: string
    }
    type navBarType = Array<navType>


    const titles: navBarType = [
        {id: 1, title: 'Profile', path: '/profile'},
        {id: 2, title: 'Dialogs', path: '/dialogs'},
        {id: 3, title: 'Users', path: '/users'},
        {id: 4, title: 'News', path: '/news'},
        {id: 5, title: 'Settings', path: '/settings'}
    ]

    return <div className={style.nav}>
        {titles.map((t) => <SidebarTitle key={t.id} title={t.title} path={t.path}/>)}
    </div>
}