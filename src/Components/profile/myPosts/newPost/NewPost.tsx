import React from 'react';
import style from './newPost.module.css'

export const NewPost= () => {
    return (
        <div className={style.content}>
            <div className={style.content__textArea}>
                <textarea placeholder={'Enter text...'}></textarea>
            </div>
            <div className={style.content__button}>
                <button>Send</button>
            </div>
        </div>
    )

}