import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Slices/userSlice";
import userAuthenticationReducer from './Slices/UserAuthenticationSlice';
import AddProductSlice from "./Slices/AddProductSlice";
const store = configureStore({
    reducer:{
       // users:userSlice.reducer,
        UserReducerInStore:userSlice,
        userAuthentication:userAuthenticationReducer,
        ProductSliceInStore:AddProductSlice

    },
})


export default store;