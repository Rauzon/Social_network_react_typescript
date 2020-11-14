import {createSelector} from 'reselect'
import {dialogsPageType, stateType} from "../redux-store";

type GetDialogPageType = (state: stateType) => dialogsPageType




//dialogPage
const getDialogPage:GetDialogPageType = (state) => state.dialogsPage

export const getDialogPageSelector = createSelector(getDialogPage,(dialogPage) => {
        return dialogPage
})