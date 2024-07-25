import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  loginSuccess,
  loginFailure,
} from "../../Store/Slices/UserAuthenticationSlice";

import "./LoginFormcss.css";

export const LoginUser = async (userData) => {
  const response = await axios.post(
    "https://hearbackend.vercel.app/HeartAttackDB/Users/loginUser",
    userData
  );
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error("Failed to register user");
  }
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = "/HomePage";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isAuthenticated } = useSelector((state) => state.userAuthentication);

  const mutation = useMutation({
    mutationFn: LoginUser,
    onSuccess: (data) => {
      // Invalidate and refetch
      dispatch(loginSuccess(data));
      setEmail("");
      setPassword("");
      setError("");
      navigate(path);
    },
    onError: (error) => {
      dispatch(loginFailure(error.message)); // Dispatch login failure action
      setError("Login failed"); // Set error message for display
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const users = {
      userEmail: email,
      userPassword: password,
    };
    mutation.mutate(users);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      {isAuthenticated && <p>Welcome!</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
