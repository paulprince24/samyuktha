import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./MobileNav.css";
const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const drawerStyles = {
    background: "black",
    color: "white",
    display: "flex",
    width: "60%",
  };
  return (
    <>
      <Button
        onClick={showDrawer}
        className="mob-ant-nav"
        style={{
          color: "#08c",
          background: "none",
          padding: "20px ",
          border: "none",
        }}
      >
        <MenuOutlined
          style={{ fontSize: "32px", color: "white", background: "none" }}
        />
      </Button>
      <Drawer
        className="mob-ant-nav"
        title="Basic Drawer"
        placement="left"
        onClose={onClose}
        open={open}
        style={drawerStyles}
      >
        <img src="/web2.png" alt="web" className="spiderweb" />
        <div className="navv">
          <Link className="linkitem" to="/">
            Home
          </Link>
          <Link className="linkitem" to="/events">
            Events
          </Link>
          <Link className="linkitem" to="/contact">
            Contact Us
          </Link>
          <Link className="linkitem" to="/aboutUs">
            About Us
          </Link>
        </div>
      </Drawer>
    </>
  );
};
export default TemporaryDrawer;
