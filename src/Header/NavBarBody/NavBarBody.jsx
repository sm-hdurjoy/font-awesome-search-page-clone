// Library Imports
import { useState } from "react";
import Dropdown from "react-dropdown";

// Styles Import
import "react-dropdown/style.css";

// React Icons Import
import { HiSearch } from "react-icons/hi";
import { BsFillGridFill, BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { GiSharpShuriken } from "react-icons/gi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { TbBaselineDensitySmall } from "react-icons/tb";

// Tailwind Style Variable Object
const style = {
  navBodyContainer: `flex items-center justify-center mt-10`,
  navBodySubContainer: `flex flex-col items-center justify-center`,
  searchInputBoxContainer: `flex border-2 border-black p-4 rounded-full items-center justify-center active:border-2 active:border-blue-600`,
  allFilterContainer: `flex justify-between items-center mt-10 mx-8 gap-10 xl:flex-row flex-col-reverse`,
  primaryFilterContainer: `flex justify-center items-center 2xl:mr-96`,
  primaryFilterOptions: `flex flex-col justify-center items-center px-10 py-6 mx-1.5 border-b-4 border-white hover:border-blue-800 hover:text-blue-800`,
  displayFilterOptionsContainer: `flex sm:justify-between`,
  showFiltersOptions: `flex justify-center items-center border-2 rounded-xl px-6 text-blue-600 hover:border-blue-800 xl:hidden`,
  displayOptionsContainer: `flex items-center justify-center m-2`,
  displayLayoutFilter: `px-4 py-2 rounded-xl hover:text-blue-800`,
  dropDownContainer: `flex justify-center items-center rounded-lg`,
};

const NavBarBody = (props) => {
  // State variable to store the selected option from dropdown menu
  const [selectedOption, setSelectedOption] = useState("Featured");

  // OnChange function to change the selectedOption state variable when the option from dropdown menu changes
  const handleOptionChange = (selected) => {
    setSelectedOption(selected.value);
  };

  // Receiving function props from <App /> component
  const { updateSharedData } = props;

  // Sending data to <App /> and then eventually to <MainContent />
  const sendDataToMainContent = (event) => {
    // Grabbing the DIV element id upon onClick
    const category = event.currentTarget.id;
    const dataToSend = {
      filter: category,
      sort: selectedOption,
    };
    updateSharedData(dataToSend);
  };

  // DropDown menu options initialization
  const options = ["Featured", "Alphabatic"];
  const defaultOption = options[0];

  // DropDown menu options initialization
  const versionOptions = ["6.4.2", "5.15.4", "All Versions"];
  const defaultVersionOption = versionOptions[0];

  return (
    <div className={style.navBodyContainer}>
      <div className={style.navBodySubContainer}>
        <div className={style.searchInputBoxContainer}>
          <HiSearch size={30} className="mr-6" />
          <input
            className="md:w-[600px] h-8 outline-none"
            type="text"
            placeholder="Search 26,233 icons..."
          />
          <p>Powerd by Algolia</p>
        </div>
        <div className={style.allFilterContainer}>
          <div className={style.primaryFilterContainer}>
            <div
              className={style.primaryFilterOptions}
              id="All"
              onClick={sendDataToMainContent}
            >
              <TbBaselineDensitySmall size={35} />
              <p className="mt-2">All Icons</p>
            </div>
            <div
              className={style.primaryFilterOptions}
              id="Classic"
              onClick={sendDataToMainContent}
            >
              <VscVerifiedFilled size={35} />
              <p className="mt-2">Classic</p>
            </div>
            <div
              className={style.primaryFilterOptions}
              id="Sharp"
              onClick={sendDataToMainContent}
            >
              <GiSharpShuriken size={35} />
              <p className="mt-2">Sharp</p>
            </div>
            <div
              className={style.primaryFilterOptions}
              id="Brand"
              onClick={sendDataToMainContent}
            >
              <FaFontAwesomeFlag size={35} />
              <p className="mt-2">Brands</p>
            </div>
            <div
              className={style.primaryFilterOptions}
              id="Free"
              onClick={sendDataToMainContent}
            >
              <AiFillThunderbolt size={35} />
              <p className="mt-2">Free</p>
            </div>
          </div>

          <div className={style.displayFilterOptionsContainer}>
            <div className={style.showFiltersOptions}>
              <BsFilter size={30} />
              <p>Show Filters</p>
            </div>
            <div className={style.displayOptionsContainer}>
              <div className={style.displayLayoutFilter}>
                <BsFillGridFill size={25} />
              </div>
              <div className={style.displayLayoutFilter}>
                <BsFillGrid3X3GapFill size={25} />
              </div>
              <div className={style.displayLayoutFilter}>
                <BsListUl size={25} />
              </div>
            </div>
            <div className={style.dropDownContainer}>
              <Dropdown
                className="w-36 mr-4 rounded-lg"
                options={options}
                value={defaultOption}
                placeholder="Featured"
                onChange={handleOptionChange}
              />

              <Dropdown
                className="w-36"
                options={versionOptions}
                value={defaultVersionOption}
                placeholder="6.4.2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarBody;
