// Library Imports
import { useState } from "react";

// React Icon Imports
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaHamburger, FaSkullCrossbones } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { HiSearch } from "react-icons/hi";

// Tailwind Style Variable Object
const styleLargeScreen = {
  navMainContainer: `md:flex  w-full justify-center items-center py-4`,
  navMainSubContainer: `flex gap-10 md:justify-center justify-around items-center`,
  navElements: `px-4 py-2.5 hover:text-blue-700 text-gray-500 cursor-pointer mx-1.5`,
};

// Tailwind Style Variable Object
const styleSmallScreen = {
  navMainContainer: `md:flex  w-full justify-center items-center py-4`,
  navElements: `p-2 border-b-2 w-[90%] flex justify-center`,
};

const NavBar = () => {
  // BurgerMenu state variable to check if burgermenu icon should appear or not
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styleLargeScreen.navMainContainer}>
      <div className={styleLargeScreen.navMainSubContainer}>
        <div className="flex md:gap-5 items-center">
          <div className="md:mr-8 py-1 px-3 rounded-xl cursor-pointer">
            <FaFontAwesomeFlag size={35} />
          </div>
          <div className="md:flex hidden items-center ">
            <div className={styleLargeScreen.navElements}>Start</div>
            <div className={styleLargeScreen.navElements}>
              <HiSearch size={25} />
            </div>
            <div className={styleLargeScreen.navElements}>Icons</div>
            <div className={styleLargeScreen.navElements}>Docs</div>
            <div className={styleLargeScreen.navElements}>Plans</div>
            <div className={styleLargeScreen.navElements}>Support</div>
            <div className={styleLargeScreen.navElements}>Poscast</div>
          </div>
        </div>
        {/* Mobile Responsive Menu Buttons */}
        <div className="flex md:hidden justify-between items-start">
          <button
            type="button"
            onClick={handleMenuOpen}
            className=" p-1 rounded-xl"
          >
            {menuOpen === true ? (
              <FaHamburger className="cursor-pointer" size={35} />
            ) : (
              <FaSkullCrossbones className="cursor-pointer" size={35} />
            )}
          </button>
          {/* <div className="md:mr-8 py-1 px-3 rounded-xl cursor-pointer">
            <FaFontAwesomeFlag size={35} />
          </div> */}
        </div>
        <div className="lg:ml-80 md:ml-0 px-3 py-1 rounded-xl cursor-pointer">
          <PiSignInBold size={35} />
        </div>
      </div>
      {/* Mobile Menu */}
      {!menuOpen ? (
        <div className="md:hidden ">
          <div className="flex flex-col mt-4 items-center">
            <div className={styleSmallScreen.navElements}>Start</div>
            <div className={styleSmallScreen.navElements}>Search</div>
            <div className={styleSmallScreen.navElements}>Icons</div>
            <div className={styleSmallScreen.navElements}>Docs</div>
            <div className={styleSmallScreen.navElements}>Plans</div>
            <div className={styleSmallScreen.navElements}>Support</div>
            <div className={styleSmallScreen.navElements}>Poscast</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
