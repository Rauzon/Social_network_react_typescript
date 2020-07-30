import React, {RefObject} from "react";
import style from './dialogs.module.css'
import {Messages} from "./Messages/Messages";
import {Names} from "./Names/Names";
import { dialogsPageType } from "../../redux/store";
import { ActionCreatorsType, addMessageAC, updateMessageAC } from "../../redux/TypesForRedux";
import { NewMessageInput } from "./newMessageInput/NewMessageInput";

type propsType = {
    dialogPage: dialogsPageType
    dispatch: (action:ActionCreatorsType) => void
}


export const Dialogs:React.FC<propsType> = (props) => {


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
                    <NewMessageInput newMessageValue={props.dialogPage.newMessage} dispatch={props.dispatch}/>
                </div>
            </div>
        </div>
    )

}