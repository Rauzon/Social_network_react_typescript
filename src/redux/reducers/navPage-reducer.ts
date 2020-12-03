import {ActionCreatorsType} from "../TypesForRedux";
import {NavPageType} from "../redux-store";
import {v4 as id} from 'uuid';


export type navPageReducerType = (state: NavPageType, action: ActionCreatorsType) => NavPageType

const initialState:NavPageType = {
    navTitles: [
        {id: id(), title: 'Profile', path: '/profile'},
        {id: id(), title: 'Dialogs', path: '/dialogs'},
        {id: id(), title: 'Users', path: '/users'},
        {id: id(), title: 'News', path: '/news'},
        {id: id(), title: 'Settings', path: '/settings'}
    ],
    friends: [
        {id: id(), name: 'Marat', pathToDialog: '/dialogs/1', isOnline: true},
        {id: id(), name: 'Anton', pathToDialog: '/dialogs/2', isOnline: false},
        {id: id(), name: 'Arkasha', pathToDialog: '/dialogs/3', isOnline: true},
        {id: id(), name: 'Tolik', pathToDialog: '/dialogs/4', isOnline: false}
    ]
};

export const navPageReducer: navPageReducerType = (state = initialState, action) => {
    return {...state}
}