import React from 'react';
import style from './news.module.css'

export const News= React.memo(() => {
    return (
        <div className={style.content}>
           The page of news is being developed
        </div>
    )
})