import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./reducers/profilePage-reducer";
import {dialogsPageReducer} from "./reducers/dialogsPage-reducer";
import { navPageReducer } from "./reducers/navPage-reducer";
import {usersReducer} from "./reducers/usersPage-reducer";

export type locationType = {
    city: string,
    country: string
}
export type dialogsNamesType = {
    id: number,
    name: string,
    path: string
}
export type dialogsMessagesType = {
    id: number,
    message: string | number
}
export type profilePostsType = {
    id: number,
    message: string | number
}
export type navTitlesType = {
    id: number,
    title: string,
    path: string
}
export type FriendsNavType = {
    id:number
    name: string
    pathToDialog: string
    isOnline: boolean
}
export type userType = {
    id: number,
    name: string,
    status: string,
    location: locationType
    isFollowed: boolean
    photoUrl: string
}

export type profilePageType = {
    posts: Array<profilePostsType>
    newPost: string | number
}
export type dialogsPageType = {
    names: Array<dialogsNamesType>
    messages: Array<dialogsMessagesType>
    newMessage: number | string
}
export type navPageType = {
    navTitles: Array<navTitlesType>
    friends: Array<FriendsNavType>
}
export type UsersStateType = {
    users: Array<userType>
}

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    navPage: navPageType
    usersPage: UsersStateType
}

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navPage: navPageReducer,
    usersPage: usersReducer
});


export let store = createStore(reducers)