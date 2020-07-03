import React from "react";
import style from './myPosts.module.css'
import { NewPost } from "./newPost/NewPost";
import { MyPost } from "./myPost/MyPost";


export const MyPosts = (props: any) => {
    return (
        <div className={style.posts}>
            <div className="content__posts">
                Create a new post:
                <NewPost />
                <MyPost message ={"Hey girls"}  />
                <MyPost message = {"Hey guys"} />
            </div>
        </div>
    )
}