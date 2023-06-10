"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Logout() {
  const router = useRouter();
  async function handleLogout() {
    const res = await fetch("http://localhost:3001/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);

    if (data) {
      router.push("/backoffice/login");
    }
  }
  //   const handleRemoveCookie = () => {
  //     removeCookie("token");
  //   };
  //   const handleRemoveCookie = () => {
  //     console.log("Removing cookie...");
  //     Cookies.remove("token");
  //   };

  return <div onClick={handleLogout}>Logout</div>;
}

export default Logout;
