import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UsersArray: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    addNewUser(state, action) 
    {
      state.UsersArray.push(action.payload);
    },


    removeSingleUser(state, action) {
      state.UsersArray = state.UsersArray.filter(usersinsidearray => usersinsidearray !== action.payload);
    },
    removeAllUsers(state, action) {
      state.UsersArray = [];
    },
  },
});

// export default userSlice;
export const { addNewUser,removeSingleUser,removeAllUsers } = userSlice.actions;

export default userSlice.reducer;
