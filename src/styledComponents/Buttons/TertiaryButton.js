import * as React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';



const TertiaryButton = (props) => {
  const theme = useTheme();
  return(
    <Button
      variant='text'
      color='error'
    >
      {props.children}
    </Button>
  )
}

export default TertiaryButton;