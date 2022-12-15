import { Formik,Form as FormikForm } from 'formik'
import React from 'react'

export default function Form({
    initialValues,
    children,
    onSubmit,
    ...rest
}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            {...rest}
        >
            <FormikForm>
                {children}
            </FormikForm>
        </Formik>
    )
}
