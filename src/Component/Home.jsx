import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Dashboard from './Dashboard'; // Import your Dashboard component
import OverviewPage from './OverviewPage';

const drawerWidth = 200;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedLink, setSelectedLink] = React.useState('');
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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <div>
            <Toolbar />
            <Divider />
            {/* <List>
              {[
                { text: 'Inbox', url: '/overview' },
                { text: 'Starred', url: '/starred' },
                { text: 'Send email', url: '/send-email' },
                { text: 'Drafts', url: '/drafts' },
              ].map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component="div" onClick={() => handleLinkClick(item.url)}>
                    <ListItemIcon>
                      {item.text === 'Inbox' || item.text === 'Starred' ? (
                        <InboxIcon />
                      ) : (
                        <MailIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
            <Divider />
            {/* Additional list items if needed */}
          </div>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <div>
            <Toolbar />
            <Divider />
            <List>
              {[
                { text: 'Inbox', url: '/' },
                { text: 'Starred', url: '/starred' },
                { text: 'Send email', url: '/send-email' },
                { text: 'Drafts', url: '/drafts' },
              ].map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component="div" onClick={() => handleLinkClick(item.url)}>
                    <ListItemIcon>
                      {item.text === 'Inbox' || item.text === 'Starred' ? (
                        <InboxIcon />
                      ) : (
                        <MailIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: 'flex',
        }}
      >
        <Toolbar />
        {/* Display content based on the selected link */}
        {selectedLink === '/' && <OverviewPage />}
        {/* Add additional conditions for other links */}
      </Box>
    </Box>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
