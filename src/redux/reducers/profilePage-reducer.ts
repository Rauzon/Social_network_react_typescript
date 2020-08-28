import {profilePageType} from "../store"
import {ActionCreatorsType} from "../TypesForRedux";

enum typeOfActionDispatch {
    ADD_POST = "ADD_POST",
    UPDATE_POST = "UPDATE_POST",
}


export type profilePageReducerType = (state: profilePageType, action: ActionCreatorsType) => profilePageType

const initialState:profilePageType = {
    posts: [
        {id: 1, message: "Hey girls"},
        {id: 2, message: "Hey guys"}
    ],
    newPost: ''
}

export const profilePageReducer: profilePageReducerType = (state = initialState, action) => {
    switch (action.type) {
        case typeOfActionDispatch.ADD_POST:
            let newPostValue = state.newPost
            let newPost = {id: 5, message: newPostValue}

            state = {...state, posts: [...state.posts, newPost]}
            state.newPost = '';
            return state;
        case typeOfActionDispatch.UPDATE_POST:
            state.newPost = action.newPostValue;
            return {...state}
        default:
            return {...state}
    }
}