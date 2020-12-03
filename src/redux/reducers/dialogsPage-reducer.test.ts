import {DialogsPageType} from "./dialogsPage-reducer";
import {v4 as uuid} from 'uuid';

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
        }
    })

})