import React from "react";
import style from './myPosts.module.css'
import { NewPost } from "./newPost/NewPost";
import { MyPost } from "./myPost/MyPost";
import {profilePostsType} from "../../../redux/store";

type propsType = {
    posts:Array<profilePostsType>
    newPost:string | number
    addPost: () => void
    updatePost: (newPostValue:string | number) => void
}

export const MyPosts:React.FC<propsType> = (props) => {

    return (
        <div className={style.posts}>
            <div className="content__posts">
                Create a new post:
                <NewPost addPost={props.addPost} newPost={props.newPost} updatePost={props.updatePost}/>
                {props.posts.map((p) => <MyPost message ={p.message} key={p.id} />)}
            </div>
        </div>
    )
}