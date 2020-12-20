import {createSelector} from 'reselect'
import {stateType} from "../redux-store";
import {DialogsPageType} from "../reducers/dialogsPage-reducer";

type GetDialogPageType = (state: stateType) => DialogsPageType




//dialogPage
const getDialogPage:GetDialogPageType = (state) => state.dialogsPage

export const getDialogPageSelector = createSelector(getDialogPage,(dialogPage) => {
        return dialogPage
})