import * as React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Inboxicon from "@mui/icons-material/Dashboard";
import MailIcon from "@mui/icons-material/Dashboard";
import List from "@mui/material/List";
import DraftsIcon from "@mui/icons-material/AdfScanner";
import StartIcon from "@mui/icons-material/Alarm";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import OverviewPage from "./OverviewPage";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";

import '../CSS files/Home.css';

const drawerWidth = 300;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedLink, setSelectedLink] = React.useState("");
  const navigate = useNavigate(); // useNavigate replaces useHistory in React Router v6

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleLinkClick = (url) => {
    setSelectedLink(url);
    handleDrawerClose();
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(0% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          top: 0, 
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, marginTop: 0, }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "70px", 
            },
          }}
        ></Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "70px",
            },
          }}
          open
        >
          <div>
            <Toolbar />
            <Divider />
            <List>
              {[
                { text: "Dashboard", url: "/overview", icon: <Inboxicon /> },
                  {
                    text: "Indicator",
                    url: "/dashbord",
                    icon: <StartIcon />,
                    arrowIcon: <DownIcon />,
                    dropdownItems: [
                      { text: "My strategy", url: "/overview" },
                      { text: "Optimize", url: "/overview" },
                      { text: "Forward Test", url: "/overview" },
                      { text: "Live", url: "/overview" },
                    ],
                  },
                  {
                    text: "Time Based",
                    url: "/orders",
                    icon: <MailIcon />,
                    arrowIcon: <DownIcon />,
                    dropdownItems: [
                      { text: "Create", url: "/overview" },
                      { text: "My streategy", url: "/overview" },
                      { text: "Forward", url: "/overview" },
                      { text: "Live", url: "/overview" },
                    ],
                  },
                { text: "Option plays", url: "/home", icon: <DraftsIcon /> },
                { text: "Connectors", url: "/home", icon: <DraftsIcon /> },
                { text: "Scanner", url: "/home", icon: <DraftsIcon /> },
                { text: "Astra", url: "/home", icon: <DraftsIcon /> },
                { text: "Create Basket", url: "/home", icon: <DraftsIcon /> },
                { text: "Brokers", url: "/home", icon: <DraftsIcon /> },
                { text: "Chating Tools", url: "/home", icon: <DraftsIcon /> },
                { text: "Other Book", url: "/", icon: <DraftsIcon /> },
                { text: "Other Book", url: "/", icon: <DraftsIcon /> },
                { text: "Other Book", url: "/", icon: <DraftsIcon /> },
              ].map((item) => (
                <div key={item.text} sx={{ position: 'relative' }}>
                  <ListItem disablePadding>
                    <ListItemButton
                      component="div"
                      onClick={() => handleLinkClick(item.url)}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                      {item.arrowIcon && (
                        <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                          {item.arrowIcon}
                        </ListItemIcon>
                      )}
                    </ListItemButton>
                        
                  {item.dropdownItems && (
                    <Collapse in={selectedLink === item.url } timeout="auto" unmountOnExit>
                      <List component="div" sx={{ position: 'absolute', top: '100%', right: 0 }}>
                        {item.dropdownItems.map((dropdownItem) => (
                          <ListItem
                            key={dropdownItem.text}
                            disablePadding
                            onClick={() => handleLinkClick(dropdownItem.url)}
                            sx={{ float: "left", alignItems: "flex-start" }}
                          >
                            <ListItemText primary={dropdownItem.text} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </ListItem>
                </div>
              ))}
            </List>
            <Divider />
            {/* Additional list items if needed */}
          </div>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: "flex",
          marginTop: 5, // Set marginTop to 0 to remove space
        }}
      >
        <Toolbar />
        {/* Display content based on the selected link */}
        {selectedLink === "/overview" && <OverviewPage />}
        {selectedLink === "/dashbord" && <Dashboard />}
        {selectedLink === "/orders" && <Orders />}
        {selectedLink === "/home" && <Dashboard />}
        {selectedLink === "/home" && <Dashboard />}

        {selectedLink === "/overview" && <Orders />}
        {selectedLink === "/dashbord" && <Dashboard />}
        {selectedLink === "/overview" && <OverviewPage />}
      </Box>
    </Box>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
