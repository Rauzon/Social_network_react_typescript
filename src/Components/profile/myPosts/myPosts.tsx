import React from "react";
import style from './myPosts.module.css'
import { MyPost } from "./myPost/MyPost";
import {profilePostsType} from "../../../redux/store";
import { NewPostContainer } from "./newPost/NewPostContainer";

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