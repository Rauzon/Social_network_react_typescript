import React from 'react';
import style from './newPost.module.css'
import {Field, InjectedFormProps, reduxForm, reset, ResetAction} from 'redux-form';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {TextField} from "@material-ui/core";

type FormDataType = {
    textareaPost: string
}

type propsType = {
    addPost: (newPostValue: string) => void
}

export const NewPost: React.FC<propsType> = (props) => {

    return (
        <div className={style.content}>
            <ProfilePostForm  addPost={props.addPost} />
        </div>
    )
}

interface IProfilePostForm {
    addPost: (newPostValue: string) => void
}

const ProfilePostForm: React.FC<IProfilePostForm> = (props) => {

    const formik = useFormik({
        initialValues: {
            textareaPost: '',
        },
        onSubmit: values => {
            if (values.textareaPost){
                props.addPost(values.textareaPost)
            }
        },
    });

    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className={style.content__textArea}>
                <TextField placeholder={'enter some text...'} name={'textareaPost'} />
            </div>
            <div className={style.content__button}>
                <button>Send</button>
            </div>
        </form>
    </>
}
