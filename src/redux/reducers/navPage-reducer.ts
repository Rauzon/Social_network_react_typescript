import {ActionCreatorsType} from "../ActionCreators";
import {v4 as id} from 'uuid';


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

export type NavPageType = typeof initialState


const initialState = {
    navTitles: [
        {id: id(), title: 'Profile', path: '/profile'},
        {id: id(), title: 'Dialogs', path: '/dialogs'},
        {id: id(), title: 'Users', path: '/users'},
        {id: id(), title: 'News', path: '/news'},
        {id: id(), title: 'Settings', path: '/settings'}
    ] as NavTitlesType[],
    friends: [
        {id: id(), name: 'Marat', pathToDialog: '/dialogs/1', isOnline: true},
        {id: id(), name: 'Anton', pathToDialog: '/dialogs/2', isOnline: false},
        {id: id(), name: 'Arkasha', pathToDialog: '/dialogs/3', isOnline: true},
        {id: id(), name: 'Tolik', pathToDialog: '/dialogs/4', isOnline: false}
    ] as FriendsNavType[]
};

export const navPageReducer = (state:NavPageType = initialState, action:ActionCreatorsType):NavPageType => {
    return {...state}
}