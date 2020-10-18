import React from "react";
import style from './dialogs.module.css'
import {Messages} from "./Messages/Messages";
import {Names} from "./Names/Names";
import {dialogsPageType} from "../../redux/store";
import {NewMessageInputContainer} from "./newMessageInput/NewMessageInputContainer";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {authRedirectHOC} from "../../hoc/authRedirectHOC";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogPage: dialogsPageType
}

type PropsType = MapStateToPropsType

export const Dialog = (props: PropsType) => {

    return (
        <div className={style.dialogs}>
            <div className={style.wrapper__header}>
                <div className={style.wrapper__header_left}>Messages</div>
                <div className={style.wrapper__header_right}>Some name</div>
            </div>
            <div className={style.wrapper}>
                <div className={style.dialogs__people}>
                    {props.dialogPage.names.map((n) => <Names key={n.id} name={n.name} path={n.path}/>)}
                </div>
                <div className={style.dialogs__messages}>
                    {props.dialogPage.messages.map((m) => <Messages key={m.id} message={m.message}/>)}
                    <NewMessageInputContainer/>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state: stateType): MapStateToPropsType => ({
    dialogPage: state.dialogsPage
})


export const DialogContainer = compose(
    authRedirectHOC,
    // @ts-ignore
    (connect<PropsType>(mapStateToProps, null)))(Dialog)
