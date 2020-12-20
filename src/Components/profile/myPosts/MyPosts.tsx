import React from "react";
import s from './myPosts.module.css'
import {MyPost} from "./myPost/MyPost";
import {NewPostContainer} from "./newPost/NewPostContainer";
import {ProfilePostsType} from "../../../redux/reducers/profilePage-reducer";


type propsType = {
    posts: Array<ProfilePostsType>
    photo: string | null | undefined
}

export const MyPosts: React.FC<propsType> = React.memo((props) => {

    return (
        <div className={s.content__posts}>
            <h4><span>Create a new post:</span></h4>
            <NewPostContainer/>
            {props.posts.map((p) => <MyPost message={p.message}
                                            key={p.id}
                                            photo={props.photo}/>)}
        </div>
    )
})