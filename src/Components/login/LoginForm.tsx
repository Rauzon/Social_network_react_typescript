import React, {useCallback} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "./Login";
import {maxLength, required} from "../validators/validators";
import {Button, FormControl, FormGroup, TextField, Grid, FormControlLabel, Checkbox} from "@material-ui/core";


interface IFormData {
}

export const LoginForm: React.FC<InjectedFormProps<IFormData & FormDataType>> = (props) => {


    const maxLength30 = useCallback(maxLength(30), [])

    const renderTextField = ({label, input, meta: {touched, invalid, error}, ...props}: any) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...props}
        />
    )


    const renderCheckbox = ({ input, label }:any) => (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={input.value ? true : false}
                        onChange={input.onChange}
                    />
                }
                label={label}
            />
        </div>
    )


    return <>
        <FormControl>
            <FormGroup>
                <form onSubmit={props.handleSubmit}>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid item>
                            <div>
                                <Field name={'email'} component={renderTextField} label={'email'}
                                       validate={[required, maxLength30]}  />
                            </div>
                        </Grid>
                        <Grid item>
                            <div>
                                <Field name={'password'} component={renderTextField}
                                       label={'password'}
                                       type="password"
                                       validate={[required, maxLength30]}/>
                            </div>
                        </Grid>
                        <Grid item>
                            <div>
                                <Field name={'rememberMe'} type={'checkbox'} label={'remember me'} component={renderCheckbox} />
                            </div>
                        </Grid>
                        <Grid item>
                            <div>
                                <Button type={'submit'} variant="contained">LOG IN</Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </FormGroup>
        </FormControl>
    </>
}


export const LoginReduxForm = reduxForm<IFormData & FormDataType>({form: 'LoginForm'})(LoginForm)