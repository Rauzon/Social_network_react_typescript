import {addMessage} from "../../../redux/ActionCreators";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import React from "react";
import style from "../dialogs.module.css";
import {DialogMessageForm} from "./DialogMessageForm";

type MapDispatchToProps = {
    addMessage: (newMessage: string) => void
}

type NewMessageInputType = {
    addMessage: (newMessage: string) => void
}

export const NewMessageInput: React.FC<NewMessageInputType> = React.memo((props) => {

        return <div className={style.dialogs__messages_newMesssage}>
            <DialogMessageForm addMessage={props.addMessage}/>
        </div>
    }
)


export const NewMessageInputContainer = connect<{}, MapDispatchToProps, {}, StateType>(null, {addMessage})
(NewMessageInput);