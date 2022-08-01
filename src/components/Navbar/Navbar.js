// import React from "react";


// const Navbar = ({isLoggedIn, role}) => {
  
//   return(
//     <nav>
//       <Link to='/'>Home</Link>
//       <Link to='/auth'>{isLoggedIn ? "Sign Out" : "Sign in"}</Link>
//       <Link to='/allTickets'>All Tickets</Link>
//       {
//         isLoggedIn ? 
//           <Link to='/CreateTicket'>Create New Ticket</Link>
//         :
//           null
//       }
      
//       {
//         role === 'Developer' || role === 'manager' ?
//             <Link to='/MyTickets'>My Tickets</Link>
//           :
//             null
//       }

//     </nav>
//   )
// }

// export default Navbar;



import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from './AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DrawerHeader from './DrawerHeader';
import { Link } from "react-router-dom";

//my tickets
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
//all tickets
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
//add ticket
import AddIcon from '@mui/icons-material/Add';
//home
import BugReportIcon from '@mui/icons-material/BugReport';
//login
import LoginIcon from '@mui/icons-material/Login';
//logout
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

export default function Navbar() {
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

        <IconButton component={Link} to='/myTickets'>
          <LocalActivityIcon/>
          { open ? <Typography>My Tickets</Typography> : null}
        </IconButton>
        <IconButton component={Link} to='/allTickets'>
          <AllInclusiveIcon/>
          { open ? <Typography>All Tickets</Typography> : null}
        </IconButton>
        <IconButton component={Link} to='/auth'>
          <LoginIcon/>
          { open ? <Typography>Log In</Typography> : null}
        </IconButton>
        <IconButton component={Link} to='/CreateTicket'>
          <AddIcon/>
          { open ? <Typography>Create Ticket</Typography> : null}
        </IconButton>
      </Drawer>
    </Box>
  );
}