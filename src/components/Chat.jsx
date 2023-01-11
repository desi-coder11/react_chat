import {  PeopleAltOutlined } from '@mui/icons-material'
import React from 'react'
import Input from './Input'
import Messages from './Messages'

const Chat = (props) => {
  return (
    <div className='chat' >
     
<div className="chatInfo">
<span className='chat-heading'>Introductions
<p className='chat-title'>This channel is made for Company Wide Chatter</p>

</span>

        <div className="peopleIcon">
        <div>3|100</div>
        <PeopleAltOutlined/>
        
        </div>
      </div>

      <Messages  />
      <Input  />
    
    </div>
  )
}

export default Chat