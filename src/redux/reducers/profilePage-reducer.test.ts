import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux";
import {profilePageType} from "../store";
import {profilePageReducerType} from "./profilePage-reducer";



describe('test for profile-reducer', () => {
    test('reducer should return valid value of newPost field', () => {

        //state
        const state: profilePageType = {
                posts: [
                    {id: 1, message: "Hey girls"},
                    {id: 2, message: "Hey guys"}
                ],
                newPost: ''
            }

        //action
        const action: ActionCreatorsType = {
            type: typeOfActionDispatch.UPDATE_POST,
            newPostValue: 'That party was great!!'
        }

        //reducer
        const profilePageReducer: profilePageReducerType = (state, action) => {
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

        //result
        const resultState:profilePageType = {
            posts: [
                {id: 1, message: "Hey girls"},
                {id: 2, message: "Hey guys"}
            ],
            newPost: 'That party was great!!'
        }

        expect(profilePageReducer(state, action)).toEqual(resultState)
    })
    test('reducer should add newPost in the state', () => {

        //state
        const state: profilePageType = {
                posts: [
                    {id: 1, message: "Hey girls"},
                    {id: 2, message: "Hey guys"}
                ],
                newPost: 'This meal was delicious!'
            }

        //action
        const action: ActionCreatorsType = {
            type: typeOfActionDispatch.ADD_POST
        }

        //reducer
        const profilePageReducer: profilePageReducerType = (state, action) => {
            switch (action.type) {
                case typeOfActionDispatch.ADD_POST:
                    let newPostValue = state.newPost
                    let newPost = {id: 3, message: newPostValue}

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

        //result
        const resultState:profilePageType = {
            posts: [
                {id: 1, message: "Hey girls"},
                {id: 2, message: "Hey guys"},
                {id: 3, message: "This meal was delicious!"}
            ],
            newPost: ''
        }

        expect(profilePageReducer(state, action)).toEqual(resultState)
    })
})