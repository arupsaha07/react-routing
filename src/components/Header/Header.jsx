import { NavLink } from 'react-router-dom';
import Profile from '../Login/Profile';

function Header() {
  return (
    <header className="shadow flex items-center justify-between py-4">
      <div className="flex justify-center gap-3">
        <NavLink to="/" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>Login</NavLink>
      </div>

      

    </header>
  );
}

export default Header;
