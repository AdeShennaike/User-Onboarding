import React from 'react';

export default function Form (props){
const onSubmit = (evt) =>{
    evt.preventDefault()
}
    return (
    <form className = 'form container' onSubmit={'onSubmit'}>
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
                    type = 'text'
                    name = 'first_name'
                    onChange = {'onChange'}
                />
            </label>
            <label>Last Name
                <input
                    type = 'text'
                    name = 'last_name'
                    onChange = {props.change}
                />
            </label>
            <label>Email
                <input
                    type = 'text'
                    name = 'email'
                    onChange = {props.change}
                />
            </label>Password
            <label>
                <input
                    type = 'text'
                    name = 'password'
                    onChange = {props.change}
                />
            </label>
        </div>

        <div className = 'create-user checkboxes'>
            <h2>Terms of Service</h2>
            {/* Checkbox Inputs */}
            <label>Terms Of Service
                <input
                    type = 'checkbox'
                    name = 'terms_of_service'
                    onChange = {props.change}
                    checked = {''}
                />
            </label>
        </div>
    </form>
    )
}