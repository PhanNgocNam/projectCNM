import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import ChatFeed from '../components/ChatFeed'
import { getAllUserRoute } from '../utils/APIRoutes'

export default function Chat() {
  const [users, setUsers] = useState([])
  const [userInfo, setUserInfo] = useState([])
  
  const getUserInfoFromSidebar = (dataGetFromSidebar) => {
    setUserInfo(dataGetFromSidebar)
  }
  
    useEffect(() => {
        axios.get(getAllUserRoute)
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
  return (
    <div className='chatPage'>
      <NavBar />
      <SideBar users={users} getUserInfoFromSidebar={getUserInfoFromSidebar} />
      <ChatFeed userInfo={userInfo}/>
    </div>
  )
}
