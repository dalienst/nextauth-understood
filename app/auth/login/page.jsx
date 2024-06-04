"use client";

import React, { useRef } from "react";

function Login() {
  const username = useRef("");
  const password = useRef("");

  const onSubmit = async () => {};
  return (
    <>
      <div className="container py-3 d-flex flex-column justify-content-center align-items-center">
        <form className="shadow bg-white rounded p-3">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              ref={username}
              onChange={(e) => (username.current = e.target.value)}
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
              ref={password}
              onChange={(e) => (password.current = e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary btn-sm"
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
