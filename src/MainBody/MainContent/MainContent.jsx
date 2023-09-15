// Library Imports
import IconCard from "../IconCard/IconCard";

const MainContent = (props) => {
  // Receiving data from App component
  const { dataFromNavBarBody, dataFromDrawer } = props;

  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <div className="font-bold text-xl">
          {dataFromNavBarBody && `${dataFromNavBarBody.length}`} Icons
        </div>
        <div className="text-gray-500">Page 1 of 1</div>
      </div>
      <div className="flex flex-wrap">
        {dataFromNavBarBody && // Maping through data to render into icon card to show
          dataFromNavBarBody.map((item) => (
            <button className="m-3 cursor-pointer" key={item.id}>
              <IconCard id={item.id} title={item.title} icon={item.icon} />
            </button>
          ))}
      </div>
    </div>
  );
};

export default MainContent;
