import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";

const User = () => {

  const user = useContext(UserContext);

  return (
    <div>
      <h2>User</h2>

      <div>
        {user && user.firstName ? (
          <>
            <img src={user.image} alt="" />
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>

            
          </>
        ) : (
          <p>Loading user...</p>
        )}
      </div>

    </div>
  );
};


export default User;

// use context