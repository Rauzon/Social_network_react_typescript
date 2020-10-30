import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux";
import {dialogsPageType} from "../redux-store";


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
    ]
}

export const dialogsPageReducer: dialogsPageReducerType = (state = initialState, action) => {
    switch (action.type) {
        case typeOfActionDispatch.ADD_MESSAGE:
            let newMessageValue = action.message
            let newMessage = {id: 5, message:newMessageValue}

            state = {...state, messages: [...state.messages, newMessage]}
            return state;
        default:
            return state
    }
}