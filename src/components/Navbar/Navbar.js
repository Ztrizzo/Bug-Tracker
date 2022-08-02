import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from './AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DrawerHeader from './DrawerHeader';
import { Link } from "react-router-dom";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AddIcon from '@mui/icons-material/Add';
import BugReportIcon from '@mui/icons-material/BugReport';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
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
  const theme = useTheme();
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
        <IconButton component={Link} to='/'>
          <BugReportIcon/>
          { open ? <Typography>Home</Typography> : null}
        </IconButton>

        {role === 'Developer' || role === 'Manager' ?
          <IconButton component={Link} to='/myTickets'>
            <LocalActivityIcon/>
            { open ? <Typography>My Tickets</Typography> : null}
          </IconButton>
          :
          null
        }

        <IconButton component={Link} to='/allTickets'>
          <AllInclusiveIcon/>
          { open ? <Typography>All Tickets</Typography> : null}
        </IconButton>

        {!isLoggedIn ? 
          <IconButton component={Link} to='/auth'>
            <LoginIcon/>
            { open ? <Typography>Log In</Typography> : null}
          </IconButton>
          :
          <IconButton component={Link} to='/auth'>
            <LogoutIcon/>
            { open ? <Typography>Log Out</Typography> : null}
          </IconButton>
        }
        {isLoggedIn ? 
          <IconButton component={Link} to='/CreateTicket'>
            <AddIcon/>
            { open ? <Typography>Create Ticket</Typography> : null}
          </IconButton>
        :
          null
        }

      </Drawer>
    </Box>
  );
}