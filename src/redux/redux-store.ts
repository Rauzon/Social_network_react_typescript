import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer, ProfilePageType} from "./reducers/profilePage-reducer";
import {dialogsPageReducer, DialogsPageType} from "./reducers/dialogsPage-reducer";
import {navPageReducer} from "./reducers/navPage-reducer";
import {usersReducer} from "./reducers/usersPage-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunk from 'redux-thunk';
import {appReducer, InitialAppStateType} from "./reducers/app-reducer";

export type PhotosType = {
    small: string | null
    large: string | null
}
export type dialogsNamesType = {
    id: string,
    name: string,
    path: string
}
export type dialogsMessagesType = {
    id: string,
    message: string
}
export type ProfilePostsType = {
    id: string,
    message: string
}
export type NavTitlesType = {
    id: string
    title: string
    path: string
}
export type FriendsNavType = {
    id: string
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

//Profile data
export type SocialContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    github: string
    youtube: string
    mainLink: string

}

type PhotoUserType = {
    small: string | null
    large: string | null
}

export type CommonDataUsersType<T> = {
    error: string | null
    items: T
    totalCount: number
}
export type CommonDataProfileType = {
    aboutMe: string | null
    contacts: SocialContactsType
    fullName: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: PhotoUserType | null
    userId: number
}

//auth data
export type CommonAuthStateType = {
    resultCode: number
    messages: string[]
    fieldsErrors: [] | null
    data: AuthDataType
}

//follow and unfollow data
export type CommonSibscribeDataType = {
    data: {}
    fieldsErrors: []
    messages: string[] | null
    resultCode: number
}

export type dialogsPageType = {
    names: Array<dialogsNamesType>
    messages: Array<dialogsMessagesType>
}
export type NavPageType = {
    navTitles: Array<NavTitlesType>
    friends: Array<FriendsNavType>
}
export type UsersStateType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}
export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    captcha?: string
}

export interface IAuthData extends AuthDataType{
    isAuth: boolean
    error: string | null
}


export type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navPage: NavPageType
    usersPage: UsersStateType
    auth: IAuthData
    app: InitialAppStateType
}

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navPage: navPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});


export let store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store