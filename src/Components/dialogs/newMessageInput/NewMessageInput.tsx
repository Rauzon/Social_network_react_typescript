import React, {RefObject} from "react";
import style from "../dialogs.module.css";


type NewMessageInputType = {
    newMessageValue: string | number
    updateMessageValue: (messageValue: string) => void
    addNewMessage: () => void
}

export const NewMessageInput: React.FC<NewMessageInputType> = (props) => {

    let refTextarea: RefObject<HTMLTextAreaElement> = React.createRef()

    const addNewMessage = () => {
        props.addNewMessage()
    }

    const changeMessageValue = () => {
        if (refTextarea.current) {
            let newMessage = refTextarea.current.value;
            props.updateMessageValue(newMessage)
        }
    }

    return <div className={style.dialogs__messages_newMesssage}>
        <div className={style.dialogs__messages_newMesssage_textarea}>
                            <textarea placeholder='Enter new message...' ref={refTextarea} onChange={changeMessageValue}
                                      value={props.newMessageValue}></textarea>
        </div>
        <div className={style.dialogs__messages_newMesssage_button}>
            <button onClick={addNewMessage}>Send</button>
        </div>
    </div>
}