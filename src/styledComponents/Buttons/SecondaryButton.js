import * as React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';



const SecondaryButton = (props) => {
  const theme = useTheme();
  return(
    <Button
    {...props}
    variant='outlined'
    >
      {props.children}
    </Button>
  )
}

export default SecondaryButton;