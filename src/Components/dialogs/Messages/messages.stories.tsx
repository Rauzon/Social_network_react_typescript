import React from 'react';
import {action} from '@storybook/addon-actions';
import {Messages} from "./Messages";
import {storiesOf} from "@storybook/react";
import StoryRouter from 'storybook-react-router';

export default {
    title: 'Messages',
    component: Messages,
};

storiesOf('Messages', module)
    .addDecorator(StoryRouter())
    .add('Message1',() => <Messages message={'Vasyl'} /> )
    .add('Message2',() => <Messages message={'Maria'} /> )








    // export const Emoji = () => (
//     <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//     </Button>
// );