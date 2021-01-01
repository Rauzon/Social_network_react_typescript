import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer, ProfilePageType} from "./reducers/profilePage-reducer";
import {dialogsPageReducer, DialogsPageType} from "./reducers/dialogsPage-reducer";
import {navPageReducer, NavPageType} from "./reducers/navPage-reducer";
import {usersReducer, UsersStateType} from "./reducers/usersPage-reducer";
import {authReducer, IAuthData} from "./reducers/auth-reducer";
import thunk from 'redux-thunk';
import {appReducer, InitialAppStateType} from "./reducers/app-reducer";


export type StateType = {
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