import React from "react";
import "./UserDetails.css";
import DeleteAllUsers from "./DeleteAllUsers";
import DisplayUsers from "./DisplayUsers";
import Navbar from './Navbar'

import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addNewUser } from "../Store/Slices/userSlice";

const UserDetails = () => {
  const dispatch = useDispatch();

  const handleAddUser = (usernamefromapi) => {
    console.log(usernamefromapi)
    dispatch(addNewUser(usernamefromapi));
  };
  return (
    <div className="user-details">
      <Navbar/>
      <div className="admin-subtitle">
        <button onClick={() => handleAddUser(fakeUserData())}>
          Add New Users
        </button>
      </div>

      <DisplayUsers/>

      <hr />

      <DeleteAllUsers/>
    </div>
  );
};

export default UserDetails;
