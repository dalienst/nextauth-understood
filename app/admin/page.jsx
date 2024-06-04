import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div className="container py-5">
        <h2 className="text-bg-success w-100 p-2 border rounded text-center">
          This is the admin page. Access yout panel{" "}
          <Link href="/admin/panel">here</Link>
        </h2>
      </div>
    </>
  );
}

export default page;
