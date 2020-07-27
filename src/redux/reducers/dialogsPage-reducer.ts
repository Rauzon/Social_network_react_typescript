import {dialogsPageType} from "../store"
import {ActionCreatorsType} from "../TypesForRedux";

enum typeOfActionDispatch {
    UPDATE_MESSAGE = "UPDATE_MESSAGE",
    ADD_MESSAGE = "ADD_MESSAGE",
}

type dialogsPageReducerType = (state: dialogsPageType, action: ActionCreatorsType) => dialogsPageType

export const dialogsPageReducer: dialogsPageReducerType = (state, action) => {
    switch (action.type) {
        case typeOfActionDispatch.ADD_MESSAGE:
            let newMessageValue = state.newMessage
            let newMessage = {id: 5, message:newMessageValue}

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