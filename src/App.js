// Library Imports
import React, { useState } from "react";

// Components/Pages Imports
import NavBar from "./Header/NavBar/NavBar";
import NavBarBody from "./Header/NavBarBody/NavBarBody";
import SideDrawerFilter from "./MainBody/SideDrawerFilter/SideDrawerFilter";
import MainContent from "./MainBody/MainContent/MainContent";
import Footer from "./Footer/Footer";

function App() {
  // state variables to pass the filtered data from NavBarBody to MainContent
  const [dataFromNavBarBody, setDataFromNavBarBody] = useState("");

  // state variables to pass the filtered data from Sidedrawer to MainContent
  const [dataFromDrawer, setDataFromDrawer] = useState("");

  // state variable update function to update the data coming from NavBarBody
  const updateSharedDataFromNavBarBody = (data) => {
    setDataFromNavBarBody(data);
  };

  // state variable update function to update the data coming from SideDrawer
  const updateShareDataFromDrawer = (data) => {
    setDataFromDrawer(data);
  };

  return (
    <React.Fragment>
      <header>
        <NavBar />
        <NavBarBody
          updateSharedDataFromNavBarBody={updateSharedDataFromNavBarBody} // Passing Update function as a props to NavBarBody
        />
      </header>
      <main className="bg-gray-200 flex justify-center items-center pt-10">
        <div className="flex w-[1600px] gap-4">
          <div className="w-[330px] h-screen p-3">
            <SideDrawerFilter
              updateShareDataFromDrawer={updateShareDataFromDrawer} // Passing Update function as a props to SideDrawer
            />
          </div>
          <div className="w-[100%]">
            <MainContent
              dataFromNavBarBody={dataFromNavBarBody} // Sending filtered data from NavBarBody to MainContent to render as props
              dataFromDrawer={dataFromDrawer} // Sending filtered data from SideDrawer to MainContect to render as props
            />
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
