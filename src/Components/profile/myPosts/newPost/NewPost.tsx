import React, { RefObject } from 'react';
import style from './newPost.module.css'
import {ActionCreatorsType, addPostAC, updatePostAC} from "../../../../redux/TypesForRedux";


type propsType = {
    newPost: number | string
    dispatch: (action: ActionCreatorsType) => void
}

export const NewPost:React.FC<propsType> = (props) => {

    let refPost:RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const changeTextarea = () => {
        if(refPost.current){
            let newPost = refPost.current.value;
            props.dispatch(updatePostAC(newPost))
        }
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