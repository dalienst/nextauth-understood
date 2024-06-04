/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [person, setPerson] = useState([]);
  const { data: session } = useSession();

  const tokens = session?.user?.access;
  const userId = session?.user?.id;

  const authenticationHeader = {
    headers: {
      Authorization: "Bearer" + " " + tokens,
      "Content-Type": "multipart/form-data",
    },
  };

  useEffect(() => {
    const fetchPerson = async () => {
      if (!session?.user?.id) {
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:8000/users/${userId}/`, {
          method: "GET",
          ...authenticationHeader,
        });
        const data = await response.json();
        setPerson(data);
      } catch (error) {}
    };

    fetchPerson();
  }, [session?.user]);


  return (
    <>
      <div className="container py-5">
        {session?.user ? (
          <h2 className="text-center w-100 p-2 border rounded text-center">
            Welcome {person?.first_name} {person?.last_name}
          </h2>
        ) : (
          <>
            <h2 className="text-bg-success w-100 p-2 border rounded text-center">
              This is the homepage. Please login
            </h2>
          </>
        )}
      </div>
    </>
  );
}
