import React from 'react';
import {ActionCreatorsType, addPostAC, updatePostAC} from "../../../../redux/TypesForRedux";
import {NewPost} from "./NewPost";


type propsType = {
    newPost: number | string
    dispatch: (action: ActionCreatorsType) => void
}

export const NewPostContainer: React.FC<propsType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const changeValue = (newPost: string) => {
        props.dispatch(updatePostAC(newPost))
    }

    return <NewPost changeValue={changeValue} addPost={addPost} newPost={props.newPost}/>
}