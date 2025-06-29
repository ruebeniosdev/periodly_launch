// import { useState } from "react";
import Logo from "../assets/logo.png";
// import { AlignRight, X } from "lucide-react";
// import { Link } from "react-router-dom";

export const Navbar = () => {
  // const [openMenu, setOpenMenu] = useState(false);

  // const toggleMenu = () => {
  //   setOpenMenu(!openMenu);
  // };

  // const navLinks = ["Features", "Services", "About", "FAQs"];

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      {/* Logo */}
      <div className="flex justify-between items-center gap-4">
        <a href="#">
          <img className="h-9" src={Logo} alt="logo" />
        </a>
        <span className="text-xl font-bold text-pink-600">Periodly.</span>
      </div>

      {/* Desktop Menu */}
      {/* <ul className="md:flex hidden items-center gap-10">
        {navLinks.map((nav) => (
          <li className="hover:text-pink-600 transition" key={nav}>
            <Link to={`/${nav.toLowerCase()}`}>{nav}</Link>
          </li>
        ))}
      </ul> */}

      {/* Download Button Desktop */}
      {/* <button className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
        Download
      </button> */}

      {/* Mobile Menu Button */}
      {/* <button
        onClick={toggleMenu}
        className="md:hidden inline-block active:scale-90 transition"
      >
        {openMenu ? <X /> : <AlignRight />}
      </button> */}

      {/* Mobile Menu */}
      {/* {openMenu && (
        <div className="absolute top-[70px] left-0 w-full bg-white p-6 md:hidden shadow-lg">
          <ul className="flex flex-col space-y-4 text-lg">
            {navLinks.map((nav) => (
              <li className="text-sm hover:text-pink-600 transition" key={nav}>
                <Link
                  to={`/${nav.toLowerCase()}`}
                  onClick={() => setOpenMenu(false)}
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
            Download
          </button>
        </div>
      )} */}
    </nav>
  );
};
