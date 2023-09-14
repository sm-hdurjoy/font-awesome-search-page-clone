// Library Imports
import IconCard from "../IconCard/IconCard";

const MainContent = (props) => {
  const { sharedData } = props;
  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <div className="font-bold text-xl">
          {sharedData && `${sharedData.length}`} Icons
        </div>
        <div className="text-gray-500">Page 1 of 1</div>
      </div>
      <div className="flex flex-wrap">
        {sharedData &&
          sharedData.map((item) => (
            <button className="m-3 cursor-pointer" key={item.id}>
              <IconCard
                id={item.id}
                title={item.title}
                icon={item.icon}
                category={item.category}
                filter={item.filter}
              />
            </button>
          ))}
      </div>
    </div>
  );
};

export default MainContent;
