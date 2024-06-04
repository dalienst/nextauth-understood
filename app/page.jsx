import { getSession, useSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div className="container py-5">
        <h2 className="text-bg-success w-100 p-2 border rounded text-center">
          This is the homepage
        </h2>
      </div>
    </>
  );
}
