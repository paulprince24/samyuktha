import React, { useState } from "react";
import { NavBar } from "../Components/Navbar/Navbar";
import Main from "../Components/Main/Main";
import About from "../Components/About/About";
import Slider from "../Components/Slider/Slider";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNav from "../Components/Mobilenav/MobileNav";
import Footer from "../Components/Footer/Footer";
const MainPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 784px)");
  const [drawer, setDrawer] = useState(false);

  const openDrawer = () => {
    setDrawer(true);
  };
  return (
    <div className="bg-drak">
      <section>
        <>
          {isSmallScreen ? <MobileNav /> : <NavBar />}
          {drawer && (
            <MobileNav open={drawer} anchor="left" setDrawer={setDrawer} />
          )}
          <Main />
        </>
      </section>

      <section className="sect_2">
        <About />
      </section>
      <Slider />
      <Footer />
    </div>
  );
};
export default MainPage;
