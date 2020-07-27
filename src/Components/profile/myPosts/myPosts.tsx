import React from "react";
import style from './myPosts.module.css'
import { NewPost } from "./newPost/NewPost";
import { MyPost } from "./myPost/MyPost";
import {profilePostsType} from "../../../redux/store";
import {ActionCreatorsType} from "../../../redux/TypesForRedux";

type propsType = {
    posts:Array<profilePostsType>
    newPost:string | number
    dispatch: (action:ActionCreatorsType) => void
}

export const MyPosts:React.FC<propsType> = (props) => {

    return (
        <div className={style.posts}>
            <div className="content__posts">
                Create a new post:
                <NewPost dispatch={props.dispatch} newPost={props.newPost} />
                {props.posts.map((p) => <MyPost message ={p.message} key={p.id} />)}
            </div>
        </div>
    )
}