// Library Imports
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";

// Styles Import
import "react-dropdown/style.css";

// React Icons Import
import { HiSearch } from "react-icons/hi";
import { BsFillGridFill, BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { filterData } from "../../Data/filterData.js";

// Data import
import { iconData } from "../../Data/iconData.js";

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
  // Receiving update function from props to update data to App component
  const { updateSharedDataFromNavBarBody } = props;

  // State variable to keep tract of which clicked is clicked/multiSelected
  const [selectedCategory, setSelectedCategory] = useState([]);

  // State variable to filter data according to selected/multi selected categories
  const [filteredItems, setFilteredItems] = useState(iconData);

  // State variable to sort data according to the sorting selection
  const [sortedData, setSortedData] = useState();

  // function to keep tract  which categories has been selected to sort icon elements
  const handleFilterButtonClick = (category) => {
    if (selectedCategory.includes(category)) {
      let filters = selectedCategory.filter((element) => element !== category);
      setSelectedCategory(filters);
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  // useEffect to invoke whenever the selectedCategory data state is changed
  useEffect(() => {
    // filterItems called to filter icon data according to clicked/multi Selected categories from nav menu
    filterItems();
  }, [selectedCategory]);

  // Functiuon to filter through the data according to the selected categories to show icons on display
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

  // State variable to keep track of sorting option selection
  const [sortOption, setSortOption] = useState("Featured");

  // Function to handle when the sort option changes
  const handleSortOptionChange = (selectedOption) => {
    setSortOption(selectedOption.value);
  };

  // Sorting data according to the sort option selection
  // useEffect invoked whenever the sorting option selection changed
  useEffect(() => {
    if (sortOption === "Alphabatic") {
      setSortedData(
        // Sorting filtered data alphabatically if (Sort option === Alphabati)c
        [...filteredItems].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else {
      // Otherwise keeping the existing data without any sort
      setSortedData(filteredItems);
    }
  }, [sortOption, filteredItems]);

  // after the data has been filtered according to the selected filters/sorting options,
  // data is passed to App component and then to MainContent to show on screen
  updateSharedDataFromNavBarBody(sortedData);

  // DropDown menu-1 options initialization
  const options = ["Featured", "Alphabatic"];
  const defaultOption = options[0];

  // DropDown menu-2 options initialization
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
