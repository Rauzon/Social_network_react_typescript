import React from 'react';
import {storiesOf} from "@storybook/react";
import StoryRouter from 'storybook-react-router';
import {LoginForm} from "./LoginForm";


storiesOf('Login', module)
    .addDecorator(StoryRouter())
    .add('LoginForm', () => <LoginForm login={email => {}} error={null} getCaptcha={() => {}}/>)