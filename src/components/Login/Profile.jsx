import { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Profile() {

  const user = useContext(UserContext)


  return (
    <div>
      {user && user.firstName ? (
        <div className='flex items-center gap-3'>
          <img className="w-12 h-12 rounded-full" src={user.image} alt="" />
          <p>Name: {user.firstName} {user.lastName}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  )
}
export default Profile