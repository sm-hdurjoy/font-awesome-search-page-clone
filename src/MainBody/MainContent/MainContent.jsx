// Library Imports
import IconCard from "../IconCard/IconCard";
import { iconData } from "../../Data/iconData.js";

const MainContent = (props) => {
  // Custom comparison function for sorting
  const sortAlphabetically = (a, b) => a.title.localeCompare(b.title);

  // Destructuring received props from <NavBarBody /> component
  const { sharedData } = props;

  // Filtering icon data according to which filter DIV element has been clicked
  let filterDataByCategory = iconData.filter(
    (item) =>
      item.filter === sharedData ||
      item.category === sharedData.filter ||
      item.all === sharedData
  );

  // Checking if the dropdown option Alphabatic is selected or not
  if (sharedData.sort === "Alphabatic") {
    filterDataByCategory = filterDataByCategory.sort(sortAlphabetically);
  }

  return (
    <div>
      <div>
        <div>
          <div className="flex justify-between items-center p-2 mb-6 ">
            <div className="font-bold text-xl">
              {filterDataByCategory.length || iconData.length} Icons
            </div>
            <div className="text-gray-500">Page 1 of 1</div>
          </div>
          <div className="flex flex-wrap">
            {filterDataByCategory.length > 0
              ? filterDataByCategory.map((item) => (
                  <div className="m-3 cursor-pointer" key={item.id}>
                    <IconCard
                      id={item.id}
                      title={item.title}
                      icon={item.icon}
                      category={item.category}
                      filter={item.filter}
                    />
                  </div>
                ))
              : iconData.map((item) => (
                  <div className="m-3 cursor-pointer" key={item.id}>
                    <IconCard
                      id={item.id}
                      title={item.title}
                      icon={item.icon}
                      category={item.category}
                      filter={item.filter}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
