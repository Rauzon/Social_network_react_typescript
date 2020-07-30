import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from "@storybook/react";
import StoryRouter from 'storybook-react-router';
import {Names} from "./Names";

export default {
    title: 'Names',
    component: Names,
};

storiesOf('Names', module)
    .addDecorator(StoryRouter())
    .add('Names1',() => <Names name={'Vasyl'} path={'/name1'}/> )
    .add('Names2',() => <Names name={'Maria'} path={'/name2'}/> )








    // export const Emoji = () => (
//     <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//     </Button>
// );