import React from 'react'
import Link from "next/link";

function NavBar() {
  return (
    <>
      <nav className="navbar bg-white shadow p-3">
        <div className="container">
          <Link className="navbar-brand fw-bold text-uppercase" href="/">
            Simple Authentication
          </Link>
          <div className="d-flex align-items-center gap-3">
            <Link className="btn btn-outline-primary" href="/auth/login">
              Login
            </Link>
            <Link className="btn btn-primary" href="/auth/register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar