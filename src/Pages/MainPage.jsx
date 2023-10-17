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
          {isSmallScreen ? (
            <div onClick={openDrawer} style={{ cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "2.0em" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          ) : (
            <NavBar />
          )}
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
