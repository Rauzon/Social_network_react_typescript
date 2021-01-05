import React from 'react';
import {addPost} from "../../../../redux/ActionCreators";
import {connect} from "react-redux";
import style from "./newPost.module.css";
import {ProfilePostForm} from "./ProfilePostForm";

type MapDispatchToProps = {
    addPost: (value: string) => void
}

type NewPostPropsType = {
    addPost: (newPostValue: string) => void
}

export const NewPost: React.FC<NewPostPropsType> = React.memo((props) => {

    return (
        <div className={style.content}>
            <ProfilePostForm addPost={props.addPost}/>
        </div>
    )
})


export const NewPostContainer = connect<{}, MapDispatchToProps, {}, {}>(null, {addPost})(NewPost);
