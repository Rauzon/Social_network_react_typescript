import {createSelector} from 'reselect'
import {StateType} from "../redux-store";
import {DialogsPageType} from "../reducers/dialogsPage-reducer";

type GetDialogPageType = (state: StateType) => DialogsPageType




//dialogPage
const getDialogPage:GetDialogPageType = (state) => state.dialogsPage

export const getDialogPageSelector = createSelector(getDialogPage,(dialogPage) => {
        return dialogPage
})