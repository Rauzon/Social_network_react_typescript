import React from 'react';
import {storiesOf} from "@storybook/react";
import StoryRouter from 'storybook-react-router';
import {MyPost} from './myPosts/myPost/MyPost';
import {MyPosts} from './myPosts/MyPosts';
import {Provider} from "react-redux";
import {store} from "../../redux/redux-store";
import { ProfilePostForm } from './myPosts/newPost/ProfilePostForm';
import {EditableStatus} from "./profileInfo/EditableStatus";

let postsData = [{
    id: '1',
    message: 'I am here'
}, {
    id: '2',
    message: 'What are u doing here?'
}]

storiesOf('profilePage', module)
    .addDecorator(StoryRouter())
    .add('PostComponent', () => <MyPost photo={'https://i.ibb.co/F8yML1z/image.png'} message={'What are u doing here?'}/>)
    .add('ProfilePostForm', () => <ProfilePostForm addPost={newPostValue => {}}/>)
    .add('CombinePostsComponent', () => {
        return <Provider store={store}>
            <MyPosts photo={'https://i.ibb.co/F8yML1z/image.png'} posts={postsData}/>
        </Provider>
    });