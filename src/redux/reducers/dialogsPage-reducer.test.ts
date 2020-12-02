import {ActionCreatorsType, addMessage, initializedApp, typeOfActionDispatch} from "../TypesForRedux";
import {dialogsPageReducer, DialogsPageType} from "./dialogsPage-reducer";
import {appReducer} from "./app-reducer";


describe('test for dialogs-reducer', () => {

    let initialState: DialogsPageType;

    beforeEach(() => {
        initialState = {
            names: [
                {id: 1, name: 'Marat', path: '/dialogs/1'},
                {id: 2, name: 'Anton', path: '/dialogs/2'},
            ],
            messages: [
                {id: 1, message: 'Hey man!'},
                {id: 2, message: 'How is it going?'},
            ]
        }
    })

    it('should ', () => {

        let action = addMessage('some new message');

        let resultReducerState = dialogsPageReducer(initialState, action)

        let expectedState = {
            names: [
                {id: 1, name: 'Marat', path: '/dialogs/1'},
                {id: 2, name: 'Anton', path: '/dialogs/2'},
            ],
            messages: [
                {id: 1, message: 'Hey man!'},
                {id: 2, message: 'How is it going?'},
                {id: 5, message: 'some new message'},
            ]
        }

        expect(resultReducerState).toEqual(expectedState)
        expect(resultReducerState).toEqual(expectedState)

    });


})