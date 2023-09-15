// Library Imports
import { useEffect, useState } from "react";

//Data import
import { iconData } from "../../Data/iconData.js";

// Component/Pages import
import { sideDrawerData } from "../../Data/sidedrawerData";

// Tailwind Style Variable Object
const style = {
  filterContainer: `flex justify-between px-4 mt-2 mb-1 items-center p-1 rounded-xl hover:border-2 hover:border-gray-300 text-gray-600 border-2 border-gray-200 cursor-pointer`,
  filterSubContainer: `flex justify-center items-center`,
  filterHeaderTitle: `font-bold text-sm text-gray-500 tracking-widest`,
  active: `flex bg-blue-800 text-white justify-between px-4 mt-2 mb-1 items-center p-1 rounded-xl hover:border-2 hover:border-gray-300 text-gray-600 border-2 border-gray-200 cursor-pointer`,
};

const SideDrawerFilter = (props) => {
  // Receiving update function from props to update data to App component
  const { updateShareDataFromDrawer } = props;

  // State variable to keep tract of which sideDrawer filter is selected/multi selected
  const [selectedFilters, setSelectedFilters] = useState([]);

  // State variable to store data according to filter clicked/multiclicked
  const [filteredItems, setFilteredItems] = useState(iconData);

  // function to keep tract  which filters has been selected to sort icon elements
  const handleFilterButtonClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      let filters = selectedFilters.filter((element) => element !== filter);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // useEffect to invoke whenever the selectedFilters data state is changed
  useEffect(() => {
    // filterItems called to filter icon data according to clicked/multi Selected filters from side drawer
    filterItems();
  }, [selectedFilters]);

  // Functiuon to filter through the data according to the selected filters to show icons on display
  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((filter) => {
        let temp = iconData.filter((item) => item.filter === filter);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...iconData]);
    }
  };

  // after the data has been filtered according to the selected filters,
  // data is passed to App component and then to MainContent to show on screen
  updateShareDataFromDrawer(filteredItems);

  return (
    <div>
      <div>
        <div>
          <div className={style.filterHeaderTitle}>STYLE</div>
          <div>
            {sideDrawerData.map((items) => (
              <div
                key={items.id}
                className={`${
                  // Ternary operation to set active class to div element to highlight which drawer filter has been selected
                  selectedFilters?.includes(items.filter)
                    ? style.active
                    : style.filterContainer
                }`}
                onClick={() => {
                  // function called when clicked on the sidedrawer filter
                  handleFilterButtonClick(items.filter);
                }}
              >
                <div className={style.filterSubContainer}>
                  <div className="mr-4">{items.icon}</div>
                  <div>{items.filter}</div>
                </div>
                <div>{items.numberOfIcons}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawerFilter;
