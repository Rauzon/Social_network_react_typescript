import React from "react";
import style from "../dialogs.module.css";
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {useFormik} from "formik";


type NewMessageInputType = {
    addMessage: (newMessage: string) => void
}

export const NewMessageInput: React.FC<NewMessageInputType> = (props) => {

    return <div className={style.dialogs__messages_newMesssage}>
        <DialogMessageForm addMessage={props.addMessage}/>
    </div>
}


type IDialogMessageForm = {
    addMessage: (newMessage: string) => void
}


const DialogMessageForm: React.FC<IDialogMessageForm> = (props) => {

    const formik = useFormik({
            initialValues: {
                DialogMessageTextarea: "",
            },
            onSubmit: values => {
                props.addMessage(values.DialogMessageTextarea)
            },
        })
    ;

    return <>
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <div className={style.dialogs__messages_newMesssage_textarea}>
                        <TextField placeholder={'enter your message...'}
                                   name={'DialogMessageTextarea'}
                                   label={'message field'} />
                    </div>
                    <div className={style.dialogs__messages_newMesssage_button}>
                        <Button color={'default'} type={'submit'}>Send</Button>
                    </div>
                </FormGroup>
            </FormControl>
        </form>
    </>

}