import { useContext, useState } from 'react'

function UseCallbackForm(props) {

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    console.log("rendering UseCallbackForm");

    return (
        <div className='flex flex-col items-center mx-auto max-w-80'>

            <input
                type="text"
                placeholder='email'
                className='border border-gray-500 mb-4'
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />

            <input 
                type="text" 
                placeholder='password'
                className='border border-gray-500 mb-4'
                name={credentials.password}
                onChange={e => setCredentials({...credentials, password: e.target.value})} />

            <div>{JSON.stringify(credentials)}</div>

            <button className='border border-gray-700 py-1 px-3'>{props.btnName}</button>
        </div>
    )
}

export default UseCallbackForm