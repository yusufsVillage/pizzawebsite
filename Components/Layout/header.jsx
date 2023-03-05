import Logo from "../UI/logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import SearchComponent from "../UI/searchComponent";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
  const [IsSearchModal, setIsSearchModal] = useState(false);
  const [IsMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`h-[5.5rem] z-40 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            IsMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col item-center">
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Book Table</Link>
            </li>
          </ul>
          {IsMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <span>
              <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <Link href="/cart">
            <span>
              <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <button href="#" onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all cursor-pointer" />
          </button>
          <a href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="sm:hidden inline-bloack"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-2xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {IsSearchModal && <SearchComponent setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
