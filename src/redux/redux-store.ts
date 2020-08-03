import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./reducers/profilePage-reducer";
import {dialogsPageReducer} from "./reducers/dialogsPage-reducer";
import { navPageReducer } from "./reducers/navPage-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navPage: navPageReducer
});

export let store = createStore(reducers)