import React, {useCallback} from "react";
import style from "../dialogs.module.css";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {maxLength, required} from "../../validators/validators";
import {TextField} from "@material-ui/core";
import {renderTextField} from "../../validators/CommonFormComponents";

type DialogFormDataType = {
    DialogMessageTextarea: string
}

type NewMessageInputType = {
    addMessage: (newMessage: string) => void
}

export const NewMessageInput: React.FC<NewMessageInputType> = (props) => {

    const addNewMessage = (formData: DialogFormDataType) => {
        if (formData) {
            props.addMessage(formData.DialogMessageTextarea)
        }
    }

    return <div className={style.dialogs__messages_newMesssage}>
        <DialogMessageReduxForm onSubmit={addNewMessage}/>
    </div>
}


type IDialogMessageForm = {}


const DialogMessageForm: React.FC<InjectedFormProps<IDialogMessageForm & DialogFormDataType>> = (props) => {

    const maxLength300 = useCallback(maxLength(300), [])

    return <>
        <form onSubmit={props.handleSubmit}>
            <div className={style.dialogs__messages_newMesssage_textarea}>
                <Field placeholder={'enter your message...'} name={'DialogMessageTextarea'} component={renderTextField}
                       validate={[required, maxLength300]} label={'message field'} row={3}/>
            </div>
            <div className={style.dialogs__messages_newMesssage_button}>
                <button>Send</button>
            </div>
        </form>
    </>

}





const DialogMessageReduxForm = reduxForm<IDialogMessageForm & DialogFormDataType>({form: 'DialogMessageForm'})(DialogMessageForm)