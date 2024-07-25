import React from 'react'
import {  useDispatch } from "react-redux";
import { removeAllUsers } from "../Store/Slices/userSlice";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const handleDeleteAllUser = () =>{
dispatch(removeAllUsers())
  }
  return (
    <div>
          <button onClick={() => handleDeleteAllUser()} className="delete-button">
            Delete All Users🗑️
          </button>
    </div>
  )
}

export default DeleteAllUsers