import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ProfilePic from '../Images/ProfilePic.jpg';



const Sidebar = () => {

  const [activeLink, setActiveLink] = useState<string>("");
  


  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar-aside">
      <div >
        <ul>
          <div className="dash-link" onClick={() => handleClick("users")}>
            <i className="fa-solid fa-briefcase"></i>
            <li className="menu-aside" >Switch Organisation</li>
            <i className="fa-duotone fa-circle-chevron-down"></i>
          </div>
          <div className="dash-link" onClick={() => handleClick("users")}>
            <i className="icon fas fa-home"></i>
            <li className="menu-aside" >Users</li>
          </div>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
