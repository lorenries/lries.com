import Link from "next/link";
import Logo from "assets/icons/logo.svg";

const Nav = () => (
  <nav className="flex items-center justify-between py-4">
    <Link href="/" aria-label="Home">
      <a className="w-16 h-auto text-royal">
        <Logo />
      </a>
    </Link>
    <Link href="/">
      <a className="font-bold text-gray-900">Loren Riesenfeld</a>
    </Link>
  </nav>
);

export default Nav;
