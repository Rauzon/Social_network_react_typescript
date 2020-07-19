import React, { RefObject } from 'react';
import style from './newPost.module.css'

type propsType = {
    addPost: () => void
    updatePost: (newPostValue:string | number) => void
    newPost: number | string
}

export const NewPost:React.FC<propsType> = (props) => {

    let refPost:RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        // @ts-ignore
        props.addPost()
    }

    const changeTextarea = () => {
        // @ts-ignore
        let newPost = refPost.current.value;
        props.updatePost(newPost)
    }

    return (
        <div className={style.content}>
            <div className={style.content__textArea}>
                <textarea placeholder={'Enter text...'} ref={refPost}
                          value={props.newPost} onChange={changeTextarea}></textarea>
            </div>
            <div className={style.content__button}>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    )

}