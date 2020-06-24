import React from 'react';
import style from './header.module.css'
import logo from '../../images/logo.png'

export const Header: React.FC = (props: any) => {

    return (
        <div className={'header'}>
            <div className={style.header__wrapper}>
                <div className={style.header__wrapper_img}>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    )

}