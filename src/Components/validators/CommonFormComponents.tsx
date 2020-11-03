import {TextField, FormControlLabel, Checkbox} from "@material-ui/core";
import React from "react";


export const renderTextField = ({type, row, label, input, meta: {touched, invalid, error}, ...props}: any) => {
    return <TextField
        label={label}
        placeholder={label}
        type={type}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...props}
        multiline
        rows={row}
    />
}

export const renderCheckbox = ({input, label, ...props}: any) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
            label={label}
            {...props}
        />
    </div>
)