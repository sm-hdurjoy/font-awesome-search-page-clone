// Library Imports
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";

// Styles Import
import "react-dropdown/style.css";

// React Icons Import
import { HiSearch } from "react-icons/hi";
import { BsFillGridFill, BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { iconData } from "../../Data/iconData.js";
import { filterData } from "../../Data/filterData.js";

// Tailwind Style Variable Object
const style = {
  navBodyContainer: `flex items-center justify-center mt-10`,
  navBodySubContainer: `flex flex-col items-center justify-center`,
  searchInputBoxContainer: `flex border-2 border-black p-4 rounded-full items-center justify-center active:border-2 active:border-blue-600`,
  allFilterContainer: `flex justify-between items-center mt-10 mx-8 gap-10 xl:flex-row flex-col-reverse`,
  primaryFilterContainer: `flex justify-center items-center 2xl:mr-96 cursor-pointer`,
  primaryFilterOptions: `border-white flex flex-col justify-center items-center px-10 py-6 mx-1.5 border-b-4 hover:border-blue-800 hover:text-blue-800`,
  displayFilterOptionsContainer: `flex sm:justify-between`,
  showFiltersOptions: `flex justify-center items-center border-2 rounded-xl px-6 text-blue-600 hover:border-blue-800 xl:hidden`,
  displayOptionsContainer: `flex items-center justify-center m-2`,
  displayLayoutFilter: `px-4 py-2 rounded-xl hover:text-blue-800 cursor-pointer`,
  dropDownContainer: `flex justify-center items-center rounded-lg`,
  active: `border-b-4 border-blue-800 text-blue-800 flex flex-col justify-center items-center px-10 py-6 mx-1.5`,
};

const NavBarBody = (props) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [sortedData, setSortedData] = useState();
  const [filteredItems, setFilteredItems] = useState(iconData);
  const { updateSharedData, dataFromDrawerToNav } = props;

  // console.log(dataFromDrawerToNav);

  // Sending data to <App /> and then eventually to <MainContent />
  const handleFilterButtonClick = (category) => {
    if (selectedCategory.includes(category)) {
      let filters = selectedCategory.filter((element) => element !== category);
      setSelectedCategory(filters);
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedCategory]);

  const filterItems = () => {
    if (selectedCategory.length > 0) {
      let tempItems = selectedCategory.map((category) => {
        let temp = iconData.filter((item) => item.category === category);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...iconData]);
    }
  };

  const [sortOption, setSortOption] = useState("Featured");
  const handleSortOptionChange = (selectedOption) => {
    setSortOption(selectedOption.value);
  };

  useEffect(() => {
    if (sortOption === "Alphabatic") {
      setSortedData(
        [...filteredItems].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else {
      setSortedData(filteredItems);
    }
  }, [sortOption, filteredItems]);

  updateSharedData(sortedData);

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
            {filterData.map((items) => (
              <button
                key={items.id}
                className={`${
                  selectedCategory?.includes(items.category)
                    ? `${style.active} border-blue-800 text-blue-800`
                    : style.primaryFilterOptions
                }`}
                onClick={() => {
                  handleFilterButtonClick(items.category);
                }}
              >
                {items.icon}
                <p>{items.category}</p>
              </button>
            ))}
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
                onChange={handleSortOptionChange}
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
