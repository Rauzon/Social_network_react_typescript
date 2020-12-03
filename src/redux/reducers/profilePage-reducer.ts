import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux";
import {CommonDataProfileType, ProfilePostsType} from "../redux-store";
import {v4 as uuid} from 'uuid';

export type ProfilePageType = typeof initialState
const initialState = {
    posts: [
        {id: uuid(), message: "Hey girls"},
        {id: uuid(), message: "Hey guys"}
    ] as Array<ProfilePostsType>,
    userProfile: {} as CommonDataProfileType,
    isFetching: false,
    profileStatus: '',
};


export const profilePageReducer = (state:ProfilePageType = initialState, action:ActionCreatorsType):ProfilePageType => {
    switch (action.type) {
        case typeOfActionDispatch.ADD_POST:
            let newPostValue = action.value
            let newPost = {id: uuid(), message: newPostValue};

            state = {...state, posts: [...state.posts, newPost]};
            return state;
        case typeOfActionDispatch.SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile};
        case typeOfActionDispatch.SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case typeOfActionDispatch.SET_STATUS_PROFILE:
            return {...state, profileStatus: action.statusProfile};

        default:
            return state
    }
};