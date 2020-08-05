import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from "@storybook/react";
import StoryRouter from 'storybook-react-router';
import { NewMessageInput } from './NewMessageInput';

export default {
    title: 'NewMessageInput',
    component: NewMessageInput,
};

// storiesOf('NewMessageInput', module)
//     .addDecorator(StoryRouter())
    // .add('NewMessageInput1',() => <NewMessageInput newMessageValue={"Enter your message..."} addNewMessage={() => void}  updateMessageValue={x => x}/> )



    // export const Emoji = () => (
//     <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//     </Button>
// );