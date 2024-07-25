import React from 'react'
import {  useSelector,useDispatch } from "react-redux";
import { removeSingleUser } from "../Store/Slices/userSlice";

const DisplayUsers = () => { 

    const dispatch = useDispatch();
    const users = useSelector((Storestate) => Storestate.UserReducerInStore.UsersArray);
    

    const handleDelete = (user) => {
     dispatch(removeSingleUser(user)); // Dispatch the deleteUser action with the user to be deleted
    };
  return (
    <>
    <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-list-item">
            {user}
            <button onClick={() => handleDelete(user)} className="delete-button">
            🗑️
          </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default DisplayUsers