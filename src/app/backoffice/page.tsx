import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Logout from "@/components/logout/Logout";

async function getAdminUser(token: string) {
  const res = await fetch("http://localhost:3001/api/auth/users", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return data;
}

async function BackOffice() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const adminUser = await getAdminUser(token?.value || "");

  if (!token) {
    redirect("/backoffice/login");
  }
  if (adminUser.isAdmin === false || adminUser.isAdmin === undefined) {
    return (
      <div>
        <h1>401</h1>
        <p>You are not authorized to view this page</p>
        <Logout />
      </div>
    );
  }

  console.log(adminUser);
  return (
    <div>
      <h1>BackOffice</h1>
      <Logout />
    </div>
  );
}

export default BackOffice;
