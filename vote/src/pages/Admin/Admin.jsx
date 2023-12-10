import React, { useEffect } from "react";
import "../Admin/Admin.css";
import { useUserData } from "../../context/UserDataContext";
import Nav from '../../components/Nav/Nav.jsx';

const Admin = () => {
  const { adminData, listData, listDatafunc, userData } = useUserData();
  console.log(userData + "admin page no data");
  useEffect(() => {
    listDatafunc();
  }, []);
  return (
    <div className="admin page">
      <h2>Admin Page</h2>
      <div className="vote-table">
        <ul>
          {listData &&
            listData.map((user, index) => (
              <li key={index} className="vote-row">
                <span className="vote-name">{user.name}</span>
                <span className="vote-email">{user.email}</span>
                <span className="vote-status">
                  {user.vote ? "Voted" : "Not Voted"}
                </span>
              </li>
            ))}
        </ul>
        {console.log("no admin data")}
      </div>
    </div>
  );
};

export default Admin;
