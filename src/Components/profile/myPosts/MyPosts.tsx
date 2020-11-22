import React from "react";
import s from './myPosts.module.css'
import { MyPost } from "./myPost/MyPost";
import { NewPostContainer } from "./newPost/NewPostContainer";
import {profilePostsType} from "../../../redux/redux-store";

type propsType = {
    posts:Array<profilePostsType>
}

export const MyPosts:React.FC<propsType> = (props) => {

    return (
        <div className={s.content__posts}>
            <h4><span>Create a new post:</span></h4>
                <NewPostContainer />
                {props.posts.map((p) => <MyPost message ={p.message} key={p.id} />)}
        </div>
    )
}