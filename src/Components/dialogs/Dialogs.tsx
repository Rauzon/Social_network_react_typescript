import React, {RefObject} from "react";
import style from './dialogs.module.css'
import {Messages} from "./Messages/Messages";
import {Names} from "./Names/Names";
import { dialogsPageType } from "../../redux/store";

type propsType = {
    dialogPage: dialogsPageType
    addMessage: () => void
    updateMessage: (newMessageValue:string | number) => void
}


export const Dialogs:React.FC<propsType> = (props) => {

    let refTextarea: RefObject<HTMLTextAreaElement> = React.createRef()

    const addNewMessage = () => {
        props.addMessage();
    }

    const changeMessageValue = () => {
        // @ts-ignore
        let newMessage = refTextarea.current.value;
        props.updateMessage(newMessage);
    }

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
                    <div className={style.dialogs__messages_newMesssage}>
                        <div className={style.dialogs__messages_newMesssage_textarea}>
                            <textarea placeholder='Enter new message...' ref={refTextarea} onChange={changeMessageValue}
                                                                            value={props.dialogPage.newMessage}></textarea>
                        </div>
                        <div className={style.dialogs__messages_newMesssage_button}>
                            <button onClick={addNewMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}