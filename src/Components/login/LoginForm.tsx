import React, {useCallback} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "./Login";
import {maxLength, required} from "../validators/validators";
import {renderCheckbox, renderTextField} from "../validators/CommonFormComponents";
import { Button } from "@material-ui/core";


interface IFormData {
}

export const LoginForm: React.FC<InjectedFormProps<IFormData & FormDataType>> = (props) => {


    const maxLength30 = useCallback(maxLength(30), [])


    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name={'login'} component={renderTextField} label={'email'} raw={1}
                    validate={[required,maxLength30]}/>
            </div>
            <div>
                <Field type={'password'} name={'password'} component={renderTextField}
                       label={'password'}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={renderCheckbox} label={'remember me'}/>
            </div>
            <div>
                <Button variant="contained">LOG IN</Button>
            </div>
        </form>
    </>
}


export const LoginReduxForm = reduxForm<IFormData & FormDataType>({form: 'LoginForm'})(LoginForm)