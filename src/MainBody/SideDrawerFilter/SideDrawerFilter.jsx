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
  // Receiving function props from <App /> component
  const { updateSharedData } = props;

  // Sending data to <App /> and then eventually to <MainContent />

  // const handleFilterButtonClick = (selectedCategory) => {
  //   if (selectedFilters.includes(selectedCategory)) {
  //     let filters = selectedFilters.filter(
  //       (element) => element !== selectedCategory
  //     );
  //     setSelectedFilters(filters);
  //   } else {
  //     setSelectedFilters([...selectedFilters, selectedCategory]);
  //   }
  //   // console.log(selectedFilters);
  // };

  // useEffect(() => {
  //   filterItems();
  // }, [selectedFilters]);

  // const filterItems = () => {
  //   if (selectedFilters.length > 0) {
  //     let tempItems = selectedFilters.map((selectedCategory) => {
  //       let temp = iconData.filter(
  //         (item) => item.filter === selectedCategory
  //       );
  //       return temp;
  //     });
  //     setFilteredItems(tempItems.flat());
  //   } else {
  //     setFilteredItems([...iconData]);
  //   }
  // };
  // updateSharedData(filteredItems);

  // const sendDataToMainContent = (event) => {
  //   // Grabbing the DIV element id upon onClick
  //   const category = event.currentTarget.id;
  //   const dataToSend = category;
  //   updateSharedData(dataToSend);
  // };

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
              // onClick={() => {
              //   handleFilterButtonClick(items.category)
              // }} 
              >
                <div className={style.filterSubContainer}>
                <div className="mr-4">
                  {items.icon}
                </div>
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
