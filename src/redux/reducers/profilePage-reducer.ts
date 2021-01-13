import {ActionCreatorsType, typeOfActionDispatch} from "../ActionCreators";
import {v4 as uuid} from 'uuid';

export type ProfilePostsType = {
    id: string,
    message: string
}

export type SocialContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    github: string
    youtube: string
    mainLink: string

}

export type PhotoUserType = {
    small: string | null
    large: string | null
}

export type CommonDataProfileType = {
    aboutMe: string | null
    contacts: SocialContactsType
    fullName: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: PhotoUserType | null
    userId: number
}

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


export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionCreatorsType): ProfilePageType => {
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

        case typeOfActionDispatch.UPDATE_PHOTO:
            return {...state, userProfile: {...state.userProfile, photos: action.photo}};

        default:
            return state
    }
};