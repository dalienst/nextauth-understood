import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function NavBar() {
  const { data: session } = useSession();

  return (
    <>
      <nav className="navbar bg-white shadow p-3">
        <div className="container">
          <Link className="navbar-brand fw-bold text-uppercase" href="/">
            Simple Authentication
          </Link>
          {session?.user ? (
            <>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => signIn()}
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
