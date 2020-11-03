import React, {useCallback} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "./Login";
import {maxLength, required} from "../validators/validators";
import {renderCheckbox} from "../validators/CommonFormComponents";


interface IFormData {
}

export const LoginForm: React.FC<InjectedFormProps<IFormData & FormDataType>> = (props) => {


    const maxLength30 = useCallback(maxLength(30), [])


    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={'input'} label={'email'} raw={1}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field name={'password'} component={'input'}
                       label={'password'}
                       type="password"
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={renderCheckbox} label={'remember me'}/>
            </div>
            <div>
                <button>LOG IN</button>
            </div>
        </form>
    </>
}


export const LoginReduxForm = reduxForm<IFormData & FormDataType>({form: 'LoginForm'})(LoginForm)