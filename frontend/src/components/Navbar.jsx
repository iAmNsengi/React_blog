import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black">
      <nav className="px-4 py-4">
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
      </nav>
    </header>
  );
};

export default Navbar;
