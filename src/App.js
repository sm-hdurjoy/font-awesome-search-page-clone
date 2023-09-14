// Library Imports
import React, { useState } from "react";

// Components/Pages Imports
import NavBar from "./Header/NavBar/NavBar";
import NavBarBody from "./Header/NavBarBody/NavBarBody";
import SideDrawerFilter from "./MainBody/SideDrawerFilter/SideDrawerFilter";
import MainContent from "./MainBody/MainContent/MainContent";
import Footer from "./Footer/Footer";

function App() {
  // state variables to keep track of which filter/category filter has been clicked to show icons
  const [sharedData, setSharedData] = useState("");

  const [dataFromDrawerToNav, setDataFromDrawerToNav] = useState("");

  // Sending data to <MainContent /> component to render icon card according to clicked category/filters
  const updateSharedData = (data) => {
    setSharedData(data);
  };

  const updateSharedDataFromDrawerToNavBody = (data) => {
    setDataFromDrawerToNav(data);
  };

  return (
    <React.Fragment>
      <header>
        <NavBar />
        <NavBarBody updateSharedData={updateSharedData} />
      </header>
      <main className="bg-gray-200 flex justify-center items-center pt-10">
        <div className="flex w-[1600px] gap-4">
          <div className="w-[330px] h-screen p-3">
            <SideDrawerFilter />
          </div>
          <div className="w-[100%]">
            <MainContent sharedData={sharedData} />
          </div>
        </div>
      </main>
      <footer className="w-screen bg-custom-blue">
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
