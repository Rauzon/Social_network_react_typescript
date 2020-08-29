import React, { RefObject } from 'react';
import style from './newPost.module.css'


type propsType = {
    newPost: number | string
    updatePost: (newPost: string) => void
    addPost: () => void
}

export const NewPost:React.FC<propsType> = (props) => {

    let refPost:RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const changeValue = () => {
        if(refPost.current){
            let newPost = refPost.current.value;
            props.updatePost(newPost);
        }
    }

    return (
        <div className={style.content}>
            <div className={style.content__textArea}>
                <textarea placeholder={'Enter text...'} ref={refPost}
                          value={props.newPost} onChange={changeValue}></textarea>
            </div>
            <div className={style.content__button}>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    )
}