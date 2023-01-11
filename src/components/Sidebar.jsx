import React from 'react'
import Chats from './Chats'
import Conversations from './Conversations'
import Navbar from "./Navbar"
const Sidebar = () => {
  return (
    <div className='sidebar' >
        <Navbar/>
        <Conversations/>
        <Chats/>

    </div>
  )
}

export default Sidebar