import React, { useState } from "react";
import { NavBar } from "../Components/Navbar/Navbar";
import Main from "../Components/Main/Main";
import MobileNav from "../Components/Mobilenav/MobileNav";
import Footer from "../Components/Footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardList from "../Components/Event/EventList";
import firebase from "../Firebase/Config";

export default function Event() {
  const isSmallScreen = useMediaQuery("(max-width: 784px)");
  const [drawer, setDrawer] = useState(false);

  const openDrawer = () => {
    setDrawer(true);
  };
  return (
    <>
      <div className="bg-drak">
        <section>
          <>
            {isSmallScreen ? <MobileNav /> : <NavBar />}
            {drawer && (
              <MobileNav open={drawer} anchor="left" setDrawer={setDrawer} />
            )}
          </>
        </section>

        <CardList />

        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
