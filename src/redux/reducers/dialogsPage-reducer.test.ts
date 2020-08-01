import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux";
import {dialogsPageReducerType} from "./dialogsPage-reducer";
import {dialogsPageType} from "../store";


describe('test for dialogs-reducer', () => {
    test('reducer should return valid value of NewMessage field', () => {

        //state
        const state: dialogsPageType = {
            names: [
                {id: 1, name: "Arkasha", path: '/profile'}
            ],
            messages: [
                {id: 1, message: 'How is it going man?'}
            ],
            newMessage: ''
        }

        //action
        const action: ActionCreatorsType = {
            type: typeOfActionDispatch.UPDATE_MESSAGE,
            newMessageValue: "You should go tomorrow to me"
        }

        //reducer
        const dialogsPageReducer: dialogsPageReducerType = (state, action) => {
            switch (action.type) {
                case typeOfActionDispatch.ADD_MESSAGE:
                    let newMessageValue = state.newMessage
                    let newMessage = {id: 5, message: newMessageValue}

                    state.messages.push(newMessage)
                    state.newMessage = '';
                    return state;
                case typeOfActionDispatch.UPDATE_MESSAGE:
                    state.newMessage = action.newMessageValue;
                    return state
                default:
                    return state
            }
        }

        //result
        const resultState:dialogsPageType = {
            names:[
                {id:1, name: "Arkasha", path: '/profile'}
            ],
            messages:[
                {id:1, message: 'How is it going man?'}
            ],
            newMessage: "You should go tomorrow to me"
        }

        expect(dialogsPageReducer(state, action)).toEqual(resultState)
    })
    test('reducer should add new message in the state', () => {

        //state
        const state: dialogsPageType = {
            names: [
                {id: 1, name: "Arkasha", path: '/profile'}
            ],
            messages: [
                {id: 1, message: 'How is it going man?'}
            ],
            newMessage: 'Dude, what do you think about that?'
        }

        //action
        const action: ActionCreatorsType = {
            type: typeOfActionDispatch.ADD_MESSAGE,
        }

        //reducer
        const dialogsPageReducer: dialogsPageReducerType = (state, action) => {
            switch (action.type) {
                case typeOfActionDispatch.ADD_MESSAGE:
                    let newMessageValue = state.newMessage
                    let newMessage = {id: 2, message: newMessageValue}

                    state.messages.push(newMessage)
                    state.newMessage = '';
                    return state;
                case typeOfActionDispatch.UPDATE_MESSAGE:
                    state.newMessage = action.newMessageValue;
                    return state
                default:
                    return state
            }
        }

        //result
        const resultState:dialogsPageType = {
            names:[
                {id:1, name: "Arkasha", path: '/profile'}
            ],
            messages:[
                {id:1, message: 'How is it going man?'},
                {id:2, message: 'Dude, what do you think about that?'}
            ],
            newMessage: ''
        }

        expect(dialogsPageReducer(state, action)).toEqual(resultState)
    })
})