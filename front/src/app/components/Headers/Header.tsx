import Link from "next/link";
import HeaderNav from "./HeaderNav";

interface IHeader {}

function Header({}: IHeader) {
  return (
    <header className="w-full max-w-[1220px] mx-auto flex items-center justify-between min-h-16 border py-5 px-5">
      <Link href={"/"} className="text-2xl">
        <strong>instagrams</strong>
      </Link>
      <HeaderNav />
    </header>
  );
}

export default Header;
