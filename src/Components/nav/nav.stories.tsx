import React from 'react';
import {storiesOf} from "@storybook/react";
import StoryRouter from 'storybook-react-router';
import {FriendsBlock} from './friendsBlock/FriendsBlock';
import {FriendsNavType} from '../../redux/redux-store';


let friendsData: FriendsNavType[] = [{
    id: "1",
    name: 'Vlad',
    pathToDialog: '/dialog',
    isOnline: true,
}, {
    id: "2",
    name: 'Anton',
    pathToDialog: '/dialog',
    isOnline: false,
}];

storiesOf('nav', module)
    .addDecorator(StoryRouter())
    .add('FriendBlock', () => <FriendsBlock friends={friendsData}/>)
