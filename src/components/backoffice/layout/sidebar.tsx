"use client";

import Logout from "@/components/logout/Logout";
import ThemeSwitcher from "@/components/themeSwitcher";
import { Separator } from "@/components/ui/separator";
import { backofficeMenu } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiCategoryAlt } from "react-icons/bi";

interface IProps {
  children: React.ReactNode;
}

function Sidebar({ children }: IProps) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex">
      <div className="fixed left-0 h-screen w-[280px] border-r border-neutral-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        <div className="flex  w-full  items-center  border-b  border-neutral-300 p-4 font-bold dark:border-gray-700 dark:bg-gray-950">
          <Image
            src="/assets/backoffice-logo.png"
            alt=""
            width={45}
            height={45}
            className="mx-2 rounded-full bg-slate-500 p-2 dark:bg-white"
          />
          <div>
            <h1 className="uppercase ">Fakestore</h1>
            <p className="text-xs">Backoffice</p>
          </div>
        </div>
        <div className="m-4 flex  h-[80vh] flex-col text-xs">
          {backofficeMenu.map((item) => {
            return (
              <Link
                key={item.name}
                className={
                  pathname === item.link
                    ? "flex cursor-pointer items-center space-x-2 bg-gray-600  px-2 py-3 text-white"
                    : "flex cursor-pointer items-center space-x-2 px-2  py-3 hover:bg-gray-600 hover:text-white"
                }
                href={item.link}
              >
                {item.icon}
                <p>{item.name}</p>
                <div>
                  {item.subMenu.length > 0 && (
                    <BiCategoryAlt className="text-neutral-500" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <Separator className="my-4" />
        <div className=" m-4 flex flex-col text-xs">
          <Logout />
        </div>
      </div>
      <main className="ml-[280px] w-full">{children}</main>
    </div>
  );
}

export default Sidebar;
