// Library Imports
import { BiSolidAdjust, BiSolidCircle } from "react-icons/bi";
import { CiCircleAlert, CiCircleMore } from "react-icons/ci";

// Tailwind Style Variable Object
const style = {
  filterContainer: `flex justify-between px-4 mt-2 mb-1 items-center p-1 rounded-xl hover:border-2 hover:border-gray-300 text-gray-600 border-2 border-gray-200`,
  filterSubContainer: `flex justify-center items-center`,
  filterHeaderTitle: `font-bold text-sm text-gray-500 tracking-widest`,
};

const SideDrawerFilter = (props) => {
  // Receiving function props from <App /> component
  const { updateSharedData } = props;

  // Sending data to <App /> and then eventually to <MainContent />
  const sendDataToMainContent = (event) => {
    // Grabbing the DIV element id upon onClick
    const category = event.currentTarget.id;
    const dataToSend = category;
    updateSharedData(dataToSend);
  };

  return (
    <div>
      <div>
        <div>
          <div className={style.filterHeaderTitle}>STYLE</div>
          <div>
            <div
              className={style.filterContainer}
              id="Solid"
              onClick={sendDataToMainContent}
            >
              <div className={style.filterSubContainer}>
                <div className="mr-4">
                  <BiSolidCircle />
                </div>
                <div>Solid</div>
              </div>
              <div>6,400</div>
            </div>
            <div
              className={style.filterContainer}
              id="Regular"
              onClick={sendDataToMainContent}
            >
              <div className={style.filterSubContainer}>
                <div className="mr-4">
                  <BiSolidAdjust />
                </div>
                <div>Regular</div>
              </div>
              <div>6,400</div>
            </div>
            <div
              className={style.filterContainer}
              id="Light"
              onClick={sendDataToMainContent}
            >
              <div className={style.filterSubContainer}>
                <div className="mr-4">
                  <CiCircleAlert />
                </div>
                <div>Light</div>
              </div>
              <div>6,400</div>
            </div>
            <div
              className={style.filterContainer}
              id="Thin"
              onClick={sendDataToMainContent}
            >
              <div className={style.filterSubContainer}>
                <div className="mr-4">
                  <CiCircleMore />
                </div>
                <div>Thin</div>
              </div>
              <div>6,400</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawerFilter;
