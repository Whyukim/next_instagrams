import Link from "next/link";
import HeaderNav from "./HeaderNav";

interface IHeader {}

function Header({}: IHeader) {
  return (
    <header className="flex items-center justify-between h-16 border">
      <Link href={"/"} className="text-2xl">
        <strong>instagrams</strong>
      </Link>
      <HeaderNav />
    </header>
  );
}

export default Header;
