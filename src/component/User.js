import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './User.css';

export const User = () => {

  useEffect(()=>{
    axios.get('http://localhost:3001/Students')
        .then((res)=>{
            setUserList(res.data)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
  },[])

  const [userlist, setUserList] = useState([])

  return (
    <div className='user-container'>
      {userlist.map(x=>(
        <div className='single-user'>
        <img className="image-user" alt="user profile" src={x.image}/>
        <h4>Name:{x.id}</h4>
        <h4>quantity:{x.name}</h4>
        <h4>prize:{x.age}</h4>
        <button>Buy</button>

      </div>
      ))}
        
    </div>
  )
}