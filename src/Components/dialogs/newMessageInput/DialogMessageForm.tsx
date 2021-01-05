import React from "react";
import style from "../dialogs.module.css";
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import * as Yup from "yup";


type IDialogMessageForm = {
    addMessage: (newMessage: string) => void
}


const validationSchema = Yup.object({
    DialogMessageTextarea: Yup.string()
        .max(300, 'message should consists 300 char or less')
        .required('you cannot create post without text')
});

export const DialogMessageForm: React.FC<IDialogMessageForm> = React.memo((props) => {

    const formik = useFormik({
            initialValues: {
                DialogMessageTextarea: "",
            },
            validationSchema,
            onSubmit: (values, {resetForm}) => {
                props.addMessage(values.DialogMessageTextarea)
                resetForm({values: '' || undefined})
            },
        })
    ;

    const errorStyle = {
        color: "red",
    }
    
    return <>
        <FormControl>
            <FormGroup>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container direction={'column'} spacing={2}>
                        <Grid item>
                            <div className={style.dialogs__messages_newMesssage_textarea}>
                                <TextField placeholder={'enter your message...'}
                                           name={'DialogMessageTextarea'}
                                           label={'message field'}
                                           multiline
                                           rows={2}
                                           rowsMax={4}
                                           {...formik.getFieldProps('DialogMessageTextarea')}
                                           onBlur={() => !formik.touched.DialogMessageTextarea}
                                />
                            </div>
                            {formik.errors.DialogMessageTextarea && formik.touched.DialogMessageTextarea ?
                                <div style={errorStyle}>{formik.errors.DialogMessageTextarea}</div> : null}
                        </Grid>
                        <Grid item>
                            <div className={style.dialogs__messages_newMesssage_button}>
                                <Button color={'primary'} type={'submit'}>Send</Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </FormGroup>
        </FormControl>
    </>

})