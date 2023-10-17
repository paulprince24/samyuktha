import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./MobileNav";
import phto from '../About/first look logo.png'

export default function TemporaryDrawer({ open, anchor, setDrawer }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  React.useEffect(() => {
    setState((prevState) => ({ ...prevState, [anchor]: open }));
  }, [open, anchor]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    if (!open) {
      setTimeout(() => {
        setDrawer(false);
      }, 150);
    }
  };

  // Define an array with text and corresponding URLs
  const links = [
    { text: "EVENTS", url: "/events" },
    { text: "ABOUT US", url: "/#about" },
    { text: "CONTACT US", url: "/contact" },
    { text: "SIGN IN", url: "/signin" },
  ];

  return (
    <div>
      <React.Fragment>
        <div className="container">
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            style={{
              borderRadius: "50px",
            }}
          >
            <Box
              sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
              }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <img
                src="/web2.png"
                alt="png"
                className="spiderweb"
                style={{
                  width: "auto",
                  height: "100px",
                  position: "relative",
                  top: "0",
                  left: "0",
                }}
              />
              <List>
                {links.map((link, index) => (
                  <ListItem key={link.text} disablePadding>
                    <ListItemButton>
                      <a href={link.url}>
                        <ListItemText primary={link.text} />
                      </a>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
        </div>
      </React.Fragment>
    </div>
  );
}
