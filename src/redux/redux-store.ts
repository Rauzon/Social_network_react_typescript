import {applyMiddleware, combineReducers, createStore, compose} from "redux";
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

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

// export let store = createStore(reducers, applyMiddleware(thunk))
