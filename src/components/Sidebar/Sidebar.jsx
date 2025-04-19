import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar() {

    const location = useLocation();
    const isReactExample = location.pathname.startsWith('/example')
    return (
        <div className='w-64 h-screen bg-gray-100 text-white p-4 fixed left-0 top-0 overflow-y-auto flex flex-col'>
            {
                isReactExample &&
                <>
                    <NavLink to="/example/use-context" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>useContext hook</NavLink>
                    <NavLink to="/example/use-memo" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>useMemo hook</NavLink>
                    <NavLink to="/example/use-callback" className={({ isActive }) => `px-4 py-2 ${isActive ? 'text-orange-400' : 'text-gray-700'} hover:text-red-500`}>useCallback hook</NavLink>
                </>
            }
        </div>
    )
}

export default Sidebar