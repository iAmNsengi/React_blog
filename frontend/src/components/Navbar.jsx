import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaMixer,
  FaXmark,
} from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          nsengi<span className="text-orange-400 font-bold">Blog</span>
        </Link>
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => {
            return (
              <li key={path} className="text-white">
                <NavLink to={path}> {link}</NavLink>
              </li>
            );
          })}
        </ul>

        {/* Menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-400">
            <FaFacebook />{" "}
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaDribbble />{" "}
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaInstagram />{" "}
          </a>
          <button className="bg-orange-400 px-6 py-2 font-medium rounded hover:bg-white hover:text-black transition-all duration-200 ease-in">
            Login
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? <FaXmark /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {/* menuitems for mobile */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-black text-center ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-200"
              : "hidden"
          } `}
        >
          {navItems.map(({ path, link }) => {
            return (
              <li key={path} className="text-white">
                <NavLink onClick={toggleMenu} to={path}>
                  {" "}
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
