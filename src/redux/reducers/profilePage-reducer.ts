import {profilePageType} from "../store"
import {ActionCreatorsType} from "../TypesForRedux";

enum typeOfActionDispatch {
    ADD_POST = "ADD_POST",
    UPDATE_POST = "UPDATE_POST",
}


type profilePageReducerType = (state: profilePageType, action: ActionCreatorsType) => profilePageType

export const profilePageReducer: profilePageReducerType = (state, action) => {
    switch (action.type) {
        case typeOfActionDispatch.ADD_POST:
            let newPostValue = state.newPost
            let newPost = {id: 5, message: newPostValue}

            state.posts.push(newPost)
            state.newPost = '';
            return state;
        case typeOfActionDispatch.UPDATE_POST:
            state.newPost = action.newPostValue;
            return state
        default:
            return state
    }
}