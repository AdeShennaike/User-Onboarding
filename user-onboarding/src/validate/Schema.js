import * as yup from 'yup'

const Schema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('first name required')
        .min(3, 'must be 3 characters minimum'),
    last_name: yup
        .string()
        .trim()
        .required('last name required')
        .min(3, 'must be 3 characters minimum'),
    email: yup
        .string()
        .email('must be valid email')
        .required('email required'),
    password: yup
        .string()
        .trim()
        .required('last name required')
        .min(3, 'must be 3 characters minimum'),
})