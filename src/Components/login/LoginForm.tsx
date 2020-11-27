import React, {useCallback} from "react";
import s from "./loginForm.module.css";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
} from "@material-ui/core";
import * as Yup from 'yup';
import {useFormik} from "formik";
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from "./loginForm.module.css";

interface IFormData {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    error: string | null
    captcha?: string
    getCaptcha: () => void
}

type InitialValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
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

    const {error, login, captcha} = props

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: '',
        },

        validationSchema,
        onSubmit: (values: InitialValuesType, {resetForm}) => {
            login(values.email, values.password, values.rememberMe, values.captcha)
            resetForm({values: '' || undefined})
        },
    });

    const getCaptcha = useCallback(() => {
        props.getCaptcha()
    }, [])

    return <>
        <FormControl>
            <FormGroup>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid item>
                            <div>
                                <TextField name={'email'}
                                           label={'email'}
                                           variant="outlined"
                                           {...formik.getFieldProps('email')}
                                           InputProps={{
                                               classes: {
                                                   root: classes.fieldErr,
                                               }
                                           }}
                                />
                            </div>
                            {formik.errors.email && formik.touched.email ? (
                                <div className={s.styleError}>{formik.errors.email}</div>) : null}
                        </Grid>
                        <Grid item>
                            <div>
                                <TextField name={'password'}
                                           label={'password'}
                                           type="password"
                                           variant="outlined"
                                           {...formik.getFieldProps('password')}/>
                            </div>
                            {!formik.errors.password && error ? <div className={s.styleError}>{error}</div> : null}
                            {formik.errors.password && formik.touched.password ? (
                                <div className={s.styleError}>{formik.errors.password}</div>) : null}
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
                        {
                            captcha && <Grid item>
                                <div className={s.captcha__content}>
                                    <img src={captcha} alt=""/>
                                    <div className={s.captcha__content_img}>
                                        <RefreshIcon style={{fontSize: 30}} onClick={getCaptcha}/>
                                    </div>
                                </div>
                                <TextField name={'captcha'}
                                           label={'captcha'}
                                           {...formik.getFieldProps('captcha')}/>
                            </Grid>
                        }
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
