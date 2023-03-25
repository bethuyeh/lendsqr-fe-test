import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner'
import PabloSignIn from '../Images/PabloSignIn.png';
import lendsqr from '../Images/lendsqr.png'
import { Link } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const Login = ({ onLoginSuccess }: LoginFormProps) => {

  const [user, setUser] = useState<User>({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    // save user login details to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    // redirect user to welcome page if logged in
    return <Link to="/welcome" />;
  }
  
  return (
    <div className='login-page'>
      <div className='sign-in'>
        <div className='logo'><img src={lendsqr} alt="Logo" /></div>
        <div className='signin-pic'>
          <img src={PabloSignIn} alt="Dummy Image" /> 
        </div>
      </div>
 
      <form onSubmit={handleLogin} className='login-form'>     
        <h2>Welcome</h2>
        <p className="enter-details">Enter details to log in</p>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>

        <p className='forgot'>forgot password?</p>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
 
  )
}
{/*  */}

export default Login;
