import * as React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';



const PrimaryButton = (props) => {
  const theme = useTheme();
  return(
    <Button
    variant='contained'
    // color='success'
    >
      {props.children}
    </Button>
  )
}

export default PrimaryButton;