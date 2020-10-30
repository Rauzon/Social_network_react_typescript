import React from "react";
import {LoginReduxForm} from "./LoginForm";
import s from './login.module.css';

type LoginPropsType = {
    login?: (email: string, password: string, rememberMe: boolean) => void
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        debugger
        console.log(formData)
    }


    return <div className={s.login_content}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}