import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./reducers/profilePage-reducer";
import {dialogsPageReducer} from "./reducers/dialogsPage-reducer";
import {navPageReducer} from "./reducers/navPage-reducer";
import {usersReducer} from "./reducers/usersPage-reducer";

export type PhotosType = {
    small: string | null
    large: string | null
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
    id: number
    name: string
    pathToDialog: string
    isOnline: boolean
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}

export type CommonDataType<T> = {
    error: string | null
    items: T
    totalCount: number
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
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
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