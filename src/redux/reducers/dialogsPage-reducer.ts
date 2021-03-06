import {ActionCreatorsType, typeOfActionDispatch} from "../ActionCreators";
import {v4 as uuid} from 'uuid';


export type DialogsNamesType = {
    id: string,
    name: string,
    path: string
}

export type DialogsMessagesType = {
    id: string,
    message: string
}

export type DialogsPageType = typeof initialState

const initialState = {
    names: [
        {id: uuid(), name: 'Marat', path: '/dialogs/1'},
        {id: uuid(), name: 'Anton', path: '/dialogs/2'},
        {id: uuid(), name: 'Arkasha', path: '/dialogs/3'},
        {id: uuid(), name: 'Tolik', path: '/dialogs/4'},
    ] as DialogsNamesType[],
    messages: [
        {id: uuid(), message: 'Hey man!'},
        {id: uuid(), message: 'How is it going?'},
        {id: uuid(), message: 'You forgot about my birthday(('},
        {id: uuid(), message: 'I want to break up with you, sorry'},
    ] as DialogsMessagesType[]
};

export const dialogsPageReducer = (state: DialogsPageType = initialState, action: ActionCreatorsType): DialogsPageType => {
    switch (action.type) {
        case typeOfActionDispatch.ADD_MESSAGE:
            let message = action.message;
            let newMessage = {id: uuid(), message};
            state = {...state, messages: [...state.messages, newMessage]};
            return state;

        default:
            return state
    }
};