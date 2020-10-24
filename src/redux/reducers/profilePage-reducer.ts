import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux";
import {profilePageType} from "../redux-store";


export type profilePageReducerType = (state: profilePageType, action: ActionCreatorsType) => profilePageType

const initialState:profilePageType = {
    posts: [
        {id: 1, message: "Hey girls"},
        {id: 2, message: "Hey guys"}
    ],
    newPost: '',
    userProfile: null,
    isFetching: false,
    profileStatus: '',
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
            state = {...state}
            state.newPost = action.newPostValue;
            return state
        case typeOfActionDispatch.SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile}
        case typeOfActionDispatch.SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case typeOfActionDispatch.SET_STATUS_PROFILE:
            return {...state, profileStatus: action.statusProfile}

        default:
            return state
    }
}