import {dialogsPageType} from "../store"
import {ActionCreatorsType} from "../TypesForRedux";

enum typeOfActionDispatch {
    UPDATE_MESSAGE = "UPDATE_MESSAGE",
    ADD_MESSAGE = "ADD_MESSAGE",
}

export type dialogsPageReducerType = (state: dialogsPageType, action: ActionCreatorsType) => dialogsPageType

const initialState:dialogsPageType = {
    names: [
        {id: 1, name: 'Marat', path: '/dialogs/1'},
        {id: 2, name: 'Anton', path: '/dialogs/2'},
        {id: 3, name: 'Arkasha', path: '/dialogs/3'},
        {id: 4, name: 'Tolik', path: '/dialogs/4'}
    ],
    messages: [
        {id: 1, message: 'Hey man!'},
        {id: 2, message: 'How is it going?'},
        {id: 3, message: 'You forgot about my birthday(('},
        {id: 4, message: 'I want to break up with you, sorry'}
    ],
    newMessage: ''
}

export const dialogsPageReducer: dialogsPageReducerType = (state = initialState, action) => {
    switch (action.type) {
        case typeOfActionDispatch.ADD_MESSAGE:
            let newMessageValue = state.newMessage
            let newMessage = {id: 5, message:newMessageValue}

            state = {...state, messages: [...state.messages, newMessage]}
            state.newMessage = '';
            return state;
        case typeOfActionDispatch.UPDATE_MESSAGE:
            state = {...state}
            state.newMessage = action.newMessageValue;
            return state
        default:
            return state
    }
}