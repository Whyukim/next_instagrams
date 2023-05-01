"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";

import DarkMode from "../Elements/DarkMode/DarkMode";

interface IHeaderNav {}

function HeaderNav({}: IHeaderNav) {
  const pathName = usePathname();

  return (
    <nav className="flex items-center gap-4">
      <DarkMode />
      <Link href={"/"} className={navIcon}>
        {pathName == "/" ? <AiFillHome /> : <AiOutlineHome />}
      </Link>
      <Link href={"/search"} className={navIcon}>
        {pathName == "/search" ? <RiSearchFill /> : <RiSearchLine />}
      </Link>
      <Link href={"/add"} className={navIcon}>
        {pathName == "/add" ? <BsPlusSquareFill /> : <BsPlusSquare />}
      </Link>
      <Link href={"/login"} className={"border rounded-md p-2"}>
        Sign in
      </Link>
    </nav>
  );
}

export default HeaderNav;

const navIcon = "text-2xl hover:scale-125";
