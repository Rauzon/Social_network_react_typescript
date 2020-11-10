import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer, profilePageType} from "./reducers/profilePage-reducer";
import {dialogsPageReducer} from "./reducers/dialogsPage-reducer";
import {navPageReducer} from "./reducers/navPage-reducer";
import {usersReducer} from "./reducers/usersPage-reducer";
import { authReducer } from "./reducers/auth-reducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

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


//
// export type profilePageType = {
//     posts: Array<profilePostsType>
//     newPost: string | number
//     userProfile: CommonDataProfileType | null
//     isFetching: boolean
//     profileStatus: string
// }

export type dialogsPageType = {
    names: Array<dialogsNamesType>
    messages: Array<dialogsMessagesType>
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
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    navPage: navPageType
    usersPage: UsersStateType
    auth: IAuthData
}

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navPage: navPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
});


export let store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store