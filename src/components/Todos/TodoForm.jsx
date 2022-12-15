import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import Form from '../Forms/Form'
import InputField from '../Forms/InputField'
import * as yup from 'yup'
const initialValues = {
    title: '',
    archivedAt: null,
    finishedAt: null,
    createdAt: null,
    checked: false,
    description: '',
    id:null
}
let schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().nullable()
}); export default function TodoForm({ handleSubmit, data }) {
    return (
        <Form onSubmit={handleSubmit}
            initialValues={data || initialValues}
            validationSchema={schema}
            enableReinitialize
        >
            <Box display={'flex'}
                justifyContent={'space-between'}
                flexDirection="column"
                gap={2}
                p={4}
            >
                <InputField
                    name='title'
                />
                <InputField
                    name='description'
                    multiline
                    rows={4}
                />
            </Box>
            <Box
                display={'flex'}
                flexDirection='column'
                justifyContent={'center'}
                alignItems='center'

            >

                <Button type='submit'>
                    Submit
                </Button>
            </Box>
        </Form>
    )
}
