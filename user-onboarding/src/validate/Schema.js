import * as yup from 'yup'

const schema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Dont forget first name')
        .min(3, 'must be 3 characters minimum'),
    last_name: yup
        .string()
        .trim()
        .required('Dont forget last name!')
        .min(3, 'must be 3 characters minimum'),
    email: yup
        .string()
        .email("I don't think thats")
        .required('email required'),
    password: yup
        .string()
        .required('Password required')
        .min(3, 'must be 6 characters minimum'),
    tos: yup
        .boolean()
        .oneOf([true], 'accept those terms now!!')
})

export default schema