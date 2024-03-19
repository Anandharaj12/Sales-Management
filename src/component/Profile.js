import React from 'react'
import { useAuth } from './Auth'
import uimg from '../component/login1.png'
export const Profile = () => {
    const auth=useAuth()
    const handlelogout=()=>{
        auth.logout()
    }
  return (
    <div><div class="div-1">
       <img src={uimg}/>
      <h1>Welcome</h1> {auth.user}<br></br><br></br>
      <button onClick={handlelogout}>logout</button>
      </div>
    </div>
  )
}
	
