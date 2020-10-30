import React from "react";
import style from "../dialogs.module.css";
import {reduxForm,Field, InjectedFormProps} from "redux-form";

type DialogFormDataType = {
    DialogMessageTextarea: string
}

type NewMessageInputType = {
    addMessage: (newMessage: string) => void
}

export const NewMessageInput: React.FC<NewMessageInputType> = (props) => {

    const addNewMessage = (formData: DialogFormDataType) => {
        if(formData){
            props.addMessage(formData.DialogMessageTextarea)
        }
    }

    return <div className={style.dialogs__messages_newMesssage}>
        <DialogMessageReduxForm onSubmit={addNewMessage} />
    </div>
}


type IDialogMessageForm = {}


const DialogMessageForm:React.FC<InjectedFormProps<IDialogMessageForm & DialogFormDataType>> = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div className={style.dialogs__messages_newMesssage_textarea}>
                <Field placeholder={'enter your message...'} name={'DialogMessageTextarea'} component={'textarea'} />
            </div>
            <div className={style.dialogs__messages_newMesssage_button}>
                <button>Send</button>
            </div>
        </form>
        </>

}

const DialogMessageReduxForm = reduxForm<IDialogMessageForm & DialogFormDataType>({form: 'DialogMessageForm'})(DialogMessageForm)