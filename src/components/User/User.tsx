import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();
  return <h2>Hi {userid}</h2>;
}

export default User;
