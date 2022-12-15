import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

export default function InputField({ name, ...rest }) {
    const [field, meta] = useField(name)
    return (
        <TextField
            {...field}
            error={meta.error && Boolean(meta.touched)}
            helperText={meta.error ?? ''}
            {...rest}
        />
    )
}
