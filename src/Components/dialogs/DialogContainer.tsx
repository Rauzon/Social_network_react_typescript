import React, {ComponentType} from "react";
import style from './dialogs.module.css'
import {Messages} from "./Messages/Messages";
import {Names} from "./Names/Names";
import {NewMessageInputContainer} from "./newMessageInput/NewMessageInputContainer";
import {connect} from "react-redux";
import {dialogsPageType, stateType} from "../../redux/redux-store";
import {authRedirectHOC} from "../../hoc/authRedirectHOC";
import {compose} from "redux";
import {getDialogPageSelector} from "../../redux/selectors/DialogSelectors";

type MapStateToPropsType = {
    dialogPage: dialogsPageType
}

type PropsType = MapStateToPropsType

export const Dialog = (props: PropsType) => {

    return (
        <div className={style.dialogs}>
                <div className={style.dialogs__people}>
                    {props.dialogPage.names.map((n) => <Names key={n.id} name={n.name} path={n.path}/>)}
                </div>
                <div className={style.dialogs__messages}>
                    {props.dialogPage.messages.map((m) => <Messages key={m.id} message={m.message}/>)}
                    <NewMessageInputContainer/>
                </div>
        </div>
    )
}


const mapStateToProps = (state: stateType): MapStateToPropsType => ({
    dialogPage: getDialogPageSelector(state)
})


export const DialogContainer = compose<ComponentType<{}>>(
    authRedirectHOC,
    (connect<MapStateToPropsType, {}, {}, stateType>(mapStateToProps)))(Dialog)
