import {dialogsPageReducer, DialogsPageType} from "./dialogsPage-reducer";
import {v4 as uuid} from 'uuid';
import { addMessage } from "../TypesForRedux";

describe('test for dialogs-reducer', () => {

    let initialState: DialogsPageType;

    beforeEach(() => {
        initialState = {
            names: [
                {id: uuid(), name: 'Marat', path: '/dialogs/1'},
                {id: uuid(), name: 'Anton', path: '/dialogs/2'},
            ],
            messages: [
                {id: uuid(), message: 'Hey man!'},
                {id: uuid(), message: 'How is it going?'},
            ]
        };
    });

    test('should be added message', () => {

        let action = addMessage('some new message');

        let resultState = dialogsPageReducer(initialState, action);

        let expectedState = {
            names: [
                {id: uuid(), name: 'Marat', path: '/dialogs/1'},
                {id: uuid(), name: 'Anton', path: '/dialogs/2'},
            ],
            messages: [
                {id: uuid(), message: 'Hey man!'},
                {id: uuid(), message: 'How is it going?'},
                {id: uuid(), message: 'some new message'},
            ]
        };

        expect(resultState.messages.length).toBe(3)
        expect(resultState.messages[0].message).toBe('Hey man!')
        expect(resultState.messages[2].message).toBe("some new message")
    })
})
