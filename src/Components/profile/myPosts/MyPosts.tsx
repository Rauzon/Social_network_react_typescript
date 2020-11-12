import React from "react";
import style from './myPosts.module.css'
import { MyPost } from "./myPost/MyPost";
import { NewPostContainer } from "./newPost/NewPostContainer";
import {profilePostsType} from "../../../redux/redux-store";

type propsType = {
    posts:Array<profilePostsType>
}

export const MyPosts:React.FC<propsType> = (props) => {

    return (
        <div className={style.posts}>
            <div className="content__posts">
                Create a new post:
                <NewPostContainer />
                {props.posts.map((p) => <MyPost message ={p.message} key={p.id} />)}
            </div>
        </div>
    )
}