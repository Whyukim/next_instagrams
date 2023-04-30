"use client";

import Link from "next/link";

import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

interface IHeaderNav {}

function HeaderNav({}: IHeaderNav) {
  const pathName = usePathname();

  return (
    <nav className="flex items-center gap-4">
      <Link href={"/"} className={"text-2xl"}>
        {pathName == "/" ? <AiFillHome /> : <AiOutlineHome />}
      </Link>
      <Link href={"/search"} className={"text-2xl"}>
        {pathName == "/search" ? <RiSearchFill /> : <RiSearchLine />}
      </Link>
      <Link href={"/add"} className={"text-2xl"}>
        {pathName == "/add" ? <BsPlusSquareFill /> : <BsPlusSquare />}
      </Link>
      <Link href={"/login"} className={"border rounded-md p-2"}>
        Sign in
      </Link>
    </nav>
  );
}

export default HeaderNav;
