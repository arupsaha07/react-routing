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
