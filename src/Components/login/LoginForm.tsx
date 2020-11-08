import React from "react";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField} from "@material-ui/core";
import * as Yup from 'yup';
import {useFormik} from "formik";

interface IFormData {
    login: (email: string, password: string, rememberMe: boolean) => void
}


const validationSchema = Yup.object({
    email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Minimum 8 characters length')
        .max(20, 'Max 20 characters length')
        .required('Password is required'),
});


export const LoginForm: React.FC<IFormData> = (props) => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationSchema,
        onSubmit: values => {
            debugger
            props.login(values.email, values.password, values.rememberMe)
        },
    });

    const style = {
        color: "red",
    }

    return <>
        <FormControl>
            <FormGroup>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid item>
                            <div>
                                <TextField name={'email'}
                                           label={'email'}
                                           {...formik.getFieldProps('email')}/>
                            </div>
                            {formik.errors.email && formik.touched.email ? (<div style={style}>{formik.errors.email}</div>) : null}
                        </Grid>
                        <Grid item>
                            <div>
                                <TextField name={'password'}
                                           label={'password'}
                                           type="password"
                                           {...formik.getFieldProps('password')}/>
                            </div>
                            {formik.errors.password && formik.touched.password ? (<div style={style}>{formik.errors.password}</div>) : null}
                        </Grid>
                        <Grid item>
                            <div>
                                <FormControlLabel
                                    label={'Remember me'}
                                    control={<Checkbox
                                        name={'rememberMe'}
                                        {...formik.getFieldProps('rememberMe')}
                                    />}
                                />
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
