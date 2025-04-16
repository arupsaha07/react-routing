import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {

    const[user, setUser] = useState()
    
    useEffect(() => {
        axios.get('https://dummyjson.com/users/1')
        .then(res => {
            // console.log(res.data)
            setUser(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// Import UserContext
// create UserContextProvider