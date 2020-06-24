import React from "react";
import style from './nav.module.css'


export const Nav = () => {
    return (
        <div className={'nav'}>
            <div className={style.nav__wrap}>
                <nav className={style.nav__wrap_menu}>
                    <a href="#"><li>Profile</li></a>
                    <a href="#"><li>Users</li></a>
                    <a href="#"><li>Message</li></a>
                    <a href="#"><li>News</li></a>
                    <a href="#"><li>Settings</li></a>
                </nav>
            </div>
        </div>
    )

}