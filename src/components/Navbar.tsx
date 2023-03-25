import React, { useState, useEffect } from 'react';
import lendsqr from '../Images/lendsqr.png';
import ProfilePic from '../Images/ProfilePic.jpg';



interface User {
  username: string;
}

const Navbar= () => {
  const [user, setUser] = useState<User>({ username: '' });
  const [navCollapse, setNavCollapse] = useState<boolean>(false)

  const username = JSON.parse(localStorage.getItem("user") || "{}");
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={lendsqr} alt="Logo" className="navbar-logo" />
        <input type="text" placeholder="Search" className="navbar-search" />       
      </div>
      <div className="navbar-right">
        <a href="#" className="navbar-link">Docs</a>
        <div className="navbar-notification-icon"><i style={{color:'#213F7D'}} className="far fa-bell"></i></div>
        <div className="navbar-profile">
          <img src={ProfilePic} alt="Profile" className="navbar-profile-pic" />
          <span className="navbar-username">{user.username}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
