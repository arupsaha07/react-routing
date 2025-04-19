import React, { useContext } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import UserContext from "../../context/UserContext";
import User from "../User/User";

const UseContextExample = () => {

  const userContext = `import React, { createContext } from "react";
const UserContext = createContext();
export default UserContext;`

  const userContextProvider = `import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
    const[user, setUser] = useState()
    
    useEffect(() => {
        axios.get('https://dummyjson.com/users/1')
        .then(res => {
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

export default UserContextProvider`

  const userDetailShow = `
import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const User = () => {

  const user = useContext(UserContext);

  return (
    <div>
      <div>
        {user && user.id ? (
          <>
            <img src={user.avatar} alt="" />
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </>
        ) : (
          <p>Loading user...</p>
        )}
      </div>

    </div>
  );
};


export default User;

  `

  return (
    <>
      <div className="flex gap-4">
        <div className="w-1/3">
          <p>Create a context and Name it UserContext.jsx</p>
          <code className='bg-gray-300 px-1 rounded'>UserContext.jsx</code>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {userContext}
          </SyntaxHighlighter>
        </div>

        <div className="w-1/3">
          <p>Create UserContextProvider</p>
          <code className='bg-gray-300 px-1 rounded'>UserContextProvider.jsx</code>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {userContextProvider}
          </SyntaxHighlighter>
        </div>

        <div className="w-1/3">
          <p>Create Uses.jsx</p>
          <code className='bg-gray-300 px-1 rounded'>UserContextProvider.jsx</code>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {userDetailShow}
          </SyntaxHighlighter>
        </div>
      </div>
      <User />
    </>
  )
};


export default UseContextExample;
