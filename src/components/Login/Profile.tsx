import { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)
  if (!user) return <h2>Not logged in</h2>
  return (
    <div className='ms-auto px-4 flex items-center gap-3'>
      <img className="w-12 h-12 rounded-full" src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} alt="" />
      <span>Hi! {user.userName}</span>
    </div>
  )
}

export default Profile