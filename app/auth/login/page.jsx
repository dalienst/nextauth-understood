"use client";

import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation and submission here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
      <form className="shadow bg-white rounded p-3" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
