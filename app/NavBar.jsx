import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function NavBar() {
  const { data: session } = useSession();

  console.log({ ...session?.user });

  return (
    <>
      <nav className="navbar bg-white shadow p-3">
        <div className="container">
          {session?.user ? (
            <>
              <Link className="navbar-brand fw-bold text-uppercase" href="/">
                {session?.user?.first_name}
              </Link>
            </>
          ) : (
            <>
              <Link className="navbar-brand fw-bold text-uppercase" href="/">
                AuthSimplified
              </Link>
            </>
          )}

          {session?.user ? (
            <>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <p className="text-success mb-0">In Session</p>
                <Link className="btn btn-outline-info btn-sm" href="/admin">
                  Admin
                </Link>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </div>
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
