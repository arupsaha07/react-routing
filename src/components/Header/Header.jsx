import { NavLink, useNavigate } from 'react-router-dom';
import Profile from '../Login/Profile';

function Header() {

  const token = localStorage.getItem('access_token')
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem("access_token")
    navigate("/")
    console.log("logout successfull !")
  }


  return (
    <header className="shadow flex items-center justify-between py-4">
      <div className="flex justify-between w-full">
        <div className='flex gap-3'>
          <NavLink to="/" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>Home</NavLink>
          <NavLink to="/example" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>React</NavLink>
        </div>

        <div className='flex gap-3'>
          <NavLink to="/profile" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>Profile</NavLink>
          {token ?
            <p to="/profile" onClick={logoutHandler} cl className='px-4 py-2 hover:text-red-500 cursor-pointer'>Logout</p>
            :
            <NavLink to="/login" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>Login</NavLink>
          }
        </div>
      </div>



    </header>
  );
}

export default Header;
