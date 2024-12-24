import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="shadow">
      <div className="flex justify-center gap-3">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-gray-7000'}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-gray-7000'}>about</NavLink>
        <NavLink to="/user" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-gray-7000'}>user</NavLink>
        <NavLink to="/github" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-gray-7000'}>github</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-gray-7000'}>login</NavLink>
      </div>
    </header>
  );
}

export default Header;
