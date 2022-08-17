import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from './AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import DrawerHeader from './DrawerHeader';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AddIcon from '@mui/icons-material/Add';
import BugReportIcon from '@mui/icons-material/BugReport';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import NavbarIcon from '../../styledComponents/NavbarIcon/NavbarIcon';
import HistoryIcon from '@mui/icons-material/History';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Navbar({isLoggedIn, role}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar drawerWidth={drawerWidth} open={open} handleDrawerOpen={handleDrawerOpen}/>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader handleDrawerClose={handleDrawerClose}/>
        <Divider />
        <NavbarIcon to='/' open={open} text='Home'>
          <BugReportIcon/>
        </NavbarIcon>

        {role === 'Developer' || role === 'Manager' ?
          <NavbarIcon to='/myTickets' text='My Tickets' open={open}>
            <LocalActivityIcon/>
          </NavbarIcon>
          :
          null
        }

        <NavbarIcon to='/allTickets' open={open} text='All Tickets'>
          <AllInclusiveIcon/>
        </NavbarIcon>

        {!isLoggedIn ? 
          <NavbarIcon to='/auth' open={open} text='Log In'>
            <LoginIcon/>
          </NavbarIcon>
          :
          <NavbarIcon to='/auth' open={open} text='Log Out'>
            <LogoutIcon/>
          </NavbarIcon>
        }
        {isLoggedIn ? 
          <NavbarIcon to='/CreateTicket'  open={open} text='Create Ticket'>
            <AddIcon/>
          </NavbarIcon>
        :
          null
        }
        <Divider/>
        <NavbarIcon to='/completedTickets' open={open} text='Completed Tickets'>
          <HistoryIcon/>
        </NavbarIcon>

      </Drawer>
    </Box>
  );
}