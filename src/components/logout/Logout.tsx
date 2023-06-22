"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BiLogOut } from "react-icons/bi";

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
      router.refresh();
    }
  }
  //   const handleRemoveCookie = () => {
  //     removeCookie("token");
  //   };
  //   const handleRemoveCookie = () => {
  //     console.log("Removing cookie...");
  //     Cookies.remove("token");
  //   };

  return (
    <div
      onClick={handleLogout}
      className="flex cursor-pointer items-center gap-2 p-4"
    >
      <BiLogOut />
      Logout
    </div>
  );
}

export default Logout;
