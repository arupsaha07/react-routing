import React, { useState, useRef, } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UseRefExample = () => {

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

export default UserContextProvider`

  return (
    <>
      <p>Create a context and Name it UserContext.jsx</p>
      <div className="w-1/3">
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {userContext}
        </SyntaxHighlighter>
      <p>Create UserContextProvider</p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {userContextProvider}
        </SyntaxHighlighter>


      </div>
    </>
  )
};


export default UseRefExample;
