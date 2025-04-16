import axios from 'axios'
import React, { useState } from 'react'
import Profile from './Profile'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        const payload = {
            email: email,
            password: password
        }
        // console.log(payload);

        axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
            .then(res => {
                localStorage.setItem('access_token', JSON.stringify(res.data.access_token))
                console.log('Login Successful')
            })
            .catch(err => {
                console.log('Login failed', err)
            })
    }


    return (
        <div className='flex flex-col items-center mx-auto max-w-80'>
            <Profile />
            <p>Login</p>
            <input
                type="text"
                placeholder='email'
                className='border border-gray-500 mb-4'
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="text"
                placeholder='password'
                className='border border-gray-500 mb-4'
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className='border border-gray-700 py-1 px-3' onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login