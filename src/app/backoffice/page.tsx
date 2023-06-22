import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Logout from "@/components/logout/Logout";
import { getAdminUser } from "@/lib/usershandler";

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

  return (
    <div className="">
      <h1>BackOffice</h1>
      <Logout />
    </div>
  );
}

export default BackOffice;
