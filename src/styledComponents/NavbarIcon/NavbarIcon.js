import * as React from 'react';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Link, useLocation } from "react-router-dom";
import { Typography } from '@mui/material';

const NavbarIcon = (props) => {
  const theme = useTheme();
  const location = useLocation();
  const {open, text, to} = props;
  return(
    <IconButton
      {...props}
      component={Link}
      sx={{backgroundColor: location.pathname === to ? theme.palette.secondary.light : null,
        margin: '0 10px'
      }}
    >
      {props.children}
      { open ? <Typography>{text}</Typography> : null}
    </IconButton>
  )
}

export default NavbarIcon;