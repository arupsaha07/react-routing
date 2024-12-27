import { NavLink } from 'react-router-dom';
import Profile from '../Login/Profile';

function Header() {
  return (
    <header className="shadow">
      <div className="flex justify-center gap-3">
        <NavLink to="/" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>about</NavLink>
        <NavLink to="/user" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>user</NavLink>
        <NavLink to="/github" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>github</NavLink>
      </div>

      <Profile />

    </header>
  );
}

export default Header;
