import React from 'react';
import style from './newPost.module.css'
import {useFormik} from "formik";
import {FormControl, FormGroup, Grid, TextField, Button} from "@material-ui/core";
import * as Yup from "yup";

type FormDataType = {
    textareaPost: string
}

type PropsType = {
    addPost: (newPostValue: string) => void
}

interface IProfilePostForm {
    addPost: (newPostValue: string) => void
}

const validationSchema = Yup.object({
    textareaPost: Yup.string()
        .max(300,'post should consists 300 char or less')
});

export const NewPost: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={style.content}>
            <ProfilePostForm addPost={props.addPost}/>
        </div>
    )
})

export const ProfilePostForm: React.FC<IProfilePostForm> = React.memo((props) => {

    const formik = useFormik({
        initialValues: {
            textareaPost: '',
        },
        validationSchema,
        onSubmit: (values,{resetForm}) => {
            if (values.textareaPost) {
                props.addPost(values.textareaPost)
            }
            resetForm({values: '' || undefined})
        },
    });

    const errorStype = {
        color: "red",
    }

    return <>
        <FormControl>
            <FormGroup>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container direction={"column"} spacing={3}>
                        <Grid item>
                            <div className={style.content__textArea}>
                                <TextField placeholder={'enter some text...'}
                                           name={'textareaPost'}
                                           variant="outlined"
                                           multiline
                                           rows={2}
                                           rowsMax={4}
                                           {...formik.getFieldProps('textareaPost')}/>
                            </div>
                            {formik.errors.textareaPost && formik.touched.textareaPost ?
                                <div style={errorStype}>{formik.errors.textareaPost}</div> : null}
                        </Grid>
                        <Grid item>
                            <div className={style.content__button}>
                                <Button type={'submit'} variant='contained'>PUBLISH</Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </FormGroup>
        </FormControl>
    </>
})
