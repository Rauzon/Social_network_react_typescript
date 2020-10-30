import React from "react";
import {Button, Checkbox, TextField} from "@material-ui/core";
import {reduxForm, InjectedFormProps} from "redux-form";
import {Field} from "redux-form";
import {FormDataType} from "./Login";

// type ButtonComponentType = {
//     value:string
// }
// type CheckComponentType = {}
//
// type InputLoginComponentType = {
//     label: string
// }

// const InputLoginComponent = (props:InputLoginComponentType) => {
//     return <TextField id="outlined-basic" label={'login'} variant="outlined"/>
// }
// const ButtonComponent: React.FC<ButtonComponentType> = (props) => {
//     return <Button variant="contained" color="primary">{props.value}</Button>
// }
// const CheckComponent:React.FC<CheckComponentType> = (props) => {
//     return <Checkbox defaultChecked color="primary" inputProps={{'aria-label': 'secondary checkbox'}}/>
// }


interface IFormData {}

export const LoginForm: React.FC<InjectedFormProps<IFormData & FormDataType>> = (props) => {

    // const emailInput = inputLoginComponent('email')
    // const passwordInput = inputLoginComponent('password')


    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'password'} type={'password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'}  component={'checkbox'} />
            </div>
            <div>
                <button>eke</button>
            </div>
        </form>
    </>
}


export const LoginReduxForm = reduxForm<IFormData & FormDataType>({form: 'LoginForm'})(LoginForm)