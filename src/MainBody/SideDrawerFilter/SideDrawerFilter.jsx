// Library Imports
import { sideDrawerData } from "../../Data/sidedrawerData";
import { useEffect, useState } from "react";
import { iconData } from "../../Data/iconData.js";

// Tailwind Style Variable Object
const style = {
  filterContainer: `flex justify-between px-4 mt-2 mb-1 items-center p-1 rounded-xl hover:border-2 hover:border-gray-300 text-gray-600 border-2 border-gray-200 cursor-pointer`,
  filterSubContainer: `flex justify-center items-center`,
  filterHeaderTitle: `font-bold text-sm text-gray-500 tracking-widest`,
};

const SideDrawerFilter = (props) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(iconData);

  const { updateSharedDataFromDrawerToNavBody } = props;

  // const handleFilterButtonClick = (filter) => {
  //   const dataToSend = filter;
  //   updateSharedDataFromDrawerToNavBody(dataToSend);
  // };

  const handleFilterButtonClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      let filters = selectedFilters.filter((element) => element !== filter);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
    updateSharedDataFromDrawerToNavBody(selectedFilters);
  };

  return (
    <div>
      <div>
        <div>
          <div className={style.filterHeaderTitle}>STYLE</div>
          <div>
            {sideDrawerData.map((items) => (
              <div
                key={items.id}
                className={style.filterContainer}
                onClick={() => {
                  handleFilterButtonClick(items.category);
                }}
              >
                <div className={style.filterSubContainer}>
                  <div className="mr-4">{items.icon}</div>
                  <div>{items.category}</div>
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
