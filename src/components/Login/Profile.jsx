import { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import axios from 'axios'

function Profile() {

  // const user = useContext(UserContext)

  const [profileData, setProfileData] = useState()

  useEffect(() => {
    getProfileData()
  }, [])
  

  const getProfileData = () => {
    const bearer_token = JSON.parse(localStorage.getItem('access_token'))

    const header = {
      headers: {
        Authorization: `Bearer ${bearer_token}`
      }
    }

    axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
      .then((res) => {
        setProfileData(res.data)
        console.log('profile data', res)
      })
      .catch((err) => {
        console.log('no profile data found', err)
      })
  }

  


  return (
    <div>
      {
        profileData &&
        <div className='flex items-center gap-3'>
          <img className="w-12 h-12 rounded-full" src={profileData.avatar} alt="" />
          <p>Name: {profileData?.name || 'NA'}</p>
          <p>Role: {profileData?.role || 'NA'}</p>
        </div>

      }
    </div>
  )
}
export default Profile