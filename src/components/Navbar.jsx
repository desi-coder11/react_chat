import React from 'react'

const Navbar = () => {
  const userName = "Rolande Raimondi";
  const titleName = "Reasearh Nurse";
  const getName = userName.charAt(0) + titleName.charAt(0);

  return (
    <div className='navbar' >
      <div className='user' >
      <div className="user-img">
      <div class="circle">{getName}</div>
      </div>

      <div className='user-desc'>
      <div className="name">{userName}</div>
      <div className="title">{titleName}</div>
      </div>
      </div>
      </div>
  )
}

export default Navbar