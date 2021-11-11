import React from 'react';

export default function Form (props){
    const {submit, change } = props
    const {disable, errors, value, email, password, terms_of_service, checked} = props.values

    const onChange = evt => {
        const {first_name, last_name, value, checked, type} = evt.target
        const newInfoVal = type === 'checkbox' ? checked : value
    }

    const onSubmit = (evt) =>{
        evt.preventDefault()
        submit()
    }
        return (
        <form className = 'form container' onSubmit={'submit'}>
            {/* Submit button */}
            <div className = 'create-user submit'>
                <h2>Create User</h2>
                {/* initially disable */}
                <button disable = {'disable'}>Submit</button>
            </div>

            {/* Error Messages */}
            <div className = 'errors'>
                <div>{'errors.first_name'}</div>
                <div>{'errors.last_name'}</div>
                <div>{'errors.email'}</div>
                <div>{'errors.password'}</div>
            </div>
            {/* Text Inputs */}
            <div className = 'create-user inputs'>
                <h2>Information</h2>
                <label>First Name
                    <input
                        value = {value.first_name}
                        type = 'text'
                        name = 'first_name'
                        onChange = {onChange}
                    />
                </label>
                <label>Last Name
                    <input
                        // value = {props.value.last_name}
                        type = 'text'
                        name = 'last_name'
                        onChange = {onChange}
                    />
                </label>
                <label>Email
                    <input
                        // value = {props.value.email}
                        type = 'text'
                        name = 'email'
                        onChange = {onChange}
                    />
                </label>Password
                <label>
                    <input
                        // value = {props.value.password}
                        type = 'text'
                        name = 'password'
                        onChange = {onChange}
                    />
                </label>
            </div>

            <div className = 'create-user checkboxes'>
                <h2>Terms of Service</h2>
                {/* Checkbox Inputs */}
                <label>Terms Of Service
                    <input
                        // value = {props.value.terms_of_service}
                        type = 'checkbox'
                        name = 'terms_of_service'
                        onChange = {onChange}
                        checked = {''}
                    />
                </label>
            </div>
        </form>
        )
}