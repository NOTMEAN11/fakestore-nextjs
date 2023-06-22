"use client";
import { Input } from "@/components/ui/input";
import React from "react";
// import Avatar from "react-avatar";

interface IProps {
  children: React.ReactNode;
}

function BackofficeNavbar({ children }: IProps) {
  return (
    <div className="flex">
      <div className="fixed top-0 z-50 w-full border-b border-neutral-300 bg-white p-4 dark:border-gray-700 dark:bg-gray-950">
        <div className="flex items-center justify-between">
          <Input
            placeholder="Search"
            className="w-96 focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 "
            type="text"
          />
          <div></div>
        </div>
      </div>
      <main className="mx-6 my-24">{children}</main>
    </div>
  );
}

export default BackofficeNavbar;
