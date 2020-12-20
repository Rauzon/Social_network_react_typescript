import React from 'react';
import {storiesOf} from "@storybook/react";
import StoryRouter from 'storybook-react-router';
import {UserItem} from "./UserItem";

storiesOf('usersPage', module)
    .addDecorator(StoryRouter())
    .add('UserItemUnfollowed', () => <UserItem status={'some status'}
                                          id={1}
                                          name={'Vlad'}
                                          follow={userId => {
                                          }}
                                          followed={false}
                                          isFollowingInProgress={[]}
                                          photos={{
                                              large: 'https://i.ibb.co/F8yML1z/image.png',
                                              small: 'https://i.ibb.co/F8yML1z/image.png'
                                          }}
                                          unfollow={userId => {
                                          }}/>)
    .add('UserItemFollowed', () => <UserItem status={'status'}
                                          id={2}
                                          name={'Anton'}
                                          follow={userId => {
                                          }}
                                          followed={true}
                                          isFollowingInProgress={[]}
                                          photos={{
                                              large: 'https://i.ibb.co/F8yML1z/image.png',
                                              small: 'https://i.ibb.co/F8yML1z/image.png'
                                          }}
                                          unfollow={userId => {
                                          }}/>)