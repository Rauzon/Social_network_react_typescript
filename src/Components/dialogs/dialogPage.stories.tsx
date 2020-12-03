import React from 'react';
import {storiesOf} from "@storybook/react";
import StoryRouter from 'storybook-react-router';
import {NewMessageInput} from './newMessageInput/NewMessageInput';
import {Messages} from "./Messages/Messages";
import {Names} from "./Names/Names";

storiesOf('dialogPage', module)
    .addDecorator(StoryRouter())
    .add('NewMessageInput1', () => <NewMessageInput addMessage={newMessage => (newMessage)}/>)
    .add('Message1',() => <Messages message={'Vasyl'} /> )
    .add('Message2',() => <Messages message={'Maria'} /> )
    .add('Names1',() => <Names name={'Vasyl'} path={'/name1'}/> )
    .add('Names2',() => <Names name={'Maria'} path={'/name2'}/> );