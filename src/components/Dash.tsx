import React, { useState, useEffect } from "react";

interface User {
  profile:{firstName: string;}
  email: string;
  userName: string;
  orgName: string;
  age: number;
  phoneNumber: number;
  createdAt: number
}

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [activeLink, setActiveLink] = useState("users");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const renderMainPage = () => {
    switch (activeLink) {
      case "users":
        return (
          <div>
            {users.map((user) => (
              <div key={user.email} >
                <h2>{user.profile.firstName}</h2>
                <p>Email: {user.email}</p>
                <p>Orgainsation: {user.orgName}</p>
                <p>Username: {user.userName}</p>
                <p>Phone Number: {user.phoneNumber}</p>
                <p>Date Joined: {user.createdAt}<h3 style={{color:"red"}}>??</h3></p>
              </div>
            ))}
          </div>
        );
      case "link2":
        return <div>This is link2 content</div>;
      case "link3":
        return <div>This is link3 content</div>;
      case "link4":
        return <div>This is link4 content</div>;
      case "link5":
        return <div>This is link5 content</div>;
      default:
        return null;
    }
  };

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div>
        <ul>
          <li onClick={() => handleClick("users")}>Users</li>
          <li onClick={() => handleClick("link2")}>Link 2</li>
          <li onClick={() => handleClick("link3")}>Link 3</li>
          <li onClick={() => handleClick("link4")}>Link 4</li>
          <li onClick={() => handleClick("link5")}>Link 5</li>
        </ul>
      </div>
      <div>{renderMainPage()}</div>
    </div>
  );
};

export default Dashboard;