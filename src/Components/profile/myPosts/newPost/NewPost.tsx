import React from 'react';
import style from './newPost.module.css'
import {Field, InjectedFormProps, reduxForm, reset, ResetAction} from 'redux-form';
import {useDispatch} from "react-redux";

type FormDataType = {
    textareaPost: string
}

type propsType = {
    addPost: (newPostValue: string) => void
}

export const NewPost: React.FC<propsType> = (props) => {

    const dispatch = useDispatch()

    const addPost = (formData: FormDataType) => {
        debugger
        if (formData.textareaPost) {
            props.addPost(formData.textareaPost)
        }
    }

    return (
        <div className={style.content}>
            <ProfilePostReduxForm onSubmit={addPost} />
        </div>
    )
}

interface IProfilePostForm {

}

const ProfilePostForm: React.FC<InjectedFormProps<IProfilePostForm & FormDataType>> = (props) => {


    return <>
        <form onSubmit={props.handleSubmit}>
            <div className={style.content__textArea}>
                <Field placeholder={'enter some text...'} name={'textareaPost'} component={'textarea'}/>
            </div>
            <div className={style.content__button}>
                <button>Send</button>
            </div>
        </form>
    </>
}

export const ProfilePostReduxForm = reduxForm<IProfilePostForm & FormDataType>({form: "newProfileForm"})(ProfilePostForm)