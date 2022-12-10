import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../GraphQL/Mutations'


function Form() {
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    // first arg has to be same name as function in Server Mutation
    const [createUser, {error}] = useMutation(CREATE_USER);


    const addUser = () => {
        if (inputFirstName != null || inputLastName != null ||
            inputEmail != null || inputPassword  != null) {
                return
            }
            
        createUser({
            variables: {
                firstName: inputFirstName,
                lastName: inputLastName,
                email: inputEmail,
                password: inputPassword
            }    
        })
        if (error) {
            console.log("Error: " + error)
        }
    }

    return (
        <div>
            <div>
                <input
                    type='text'
                    placeholder='First Name'
                    onChange={(event) => {
                        setInputFirstName(event.target.value)
                    }}
                    />
                <input
                    type='text'
                    placeholder='Last Name'
                    onChange={(event) => {
                        setInputLastName(event.target.value)
                    }}
                    />
            </div>
            <div>
                <input
                    type='email'
                    placeholder='Email'
                    onChange={(event) => {
                        setInputEmail(event.target.value)
                    }}
                />
                <input
                    type='text'
                    placeholder='Password'
                    onChange={(event) => {
                        setInputPassword(event.target.value)
                    }}
                />
            </div>
            <div>
                <button onClick={addUser} >Create user</button>
            </div>
        </div>
    )
}

export default Form;