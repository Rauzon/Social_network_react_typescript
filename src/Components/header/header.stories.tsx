import React from 'react';
import StoryRouter from "storybook-react-router";
import {storiesOf} from "@storybook/react";
import {Header} from "./Header";


storiesOf('header', module)
    .addDecorator(StoryRouter())
    .add('HeaderComponentAuthorized', () => <Header isAuth={true} login={'Keker'} logOutProfile={() => {}}/>)
    .add('HeaderComponentNotAuthorized', () => <Header isAuth={false} login={'Keker'} logOutProfile={() => {}}/>)