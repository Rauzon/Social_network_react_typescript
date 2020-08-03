import {navPageType} from "../store"
import {ActionCreatorsType} from "../TypesForRedux";


export type navPageReducerType = (state: navPageType, action: ActionCreatorsType) => navPageType

const initialState:navPageType = {
    navTitles: [
        {id: 1, title: 'Profile', path: '/profile'},
        {id: 2, title: 'Dialogs', path: '/dialogs'},
        {id: 3, title: 'Users', path: '/users'},
        {id: 4, title: 'News', path: '/news'},
        {id: 5, title: 'Settings', path: '/settings'}
    ],
    friends: [
        {id: 1, name: 'Marat', pathToDialog: '/dialogs/1', isOnline: true},
        {id: 2, name: 'Anton', pathToDialog: '/dialogs/2', isOnline: false},
        {id: 3, name: 'Arkasha', pathToDialog: '/dialogs/3', isOnline: true},
        {id: 4, name: 'Tolik', pathToDialog: '/dialogs/4', isOnline: false}
    ]
}

export const navPageReducer: navPageReducerType = (state = initialState, action) => {
    return state
}