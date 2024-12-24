import { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

    return (
        <div className='flex flex-col my-4 mx-auto w-1/4'>
            <input type="text" className='mb-3 px-3 py-2 border' value={userName} name="username" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
            <input type="password" className='mb-3 px-3 py-2 border' value={password} name="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button className='bg-blue-500 p-2 text-white' onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login