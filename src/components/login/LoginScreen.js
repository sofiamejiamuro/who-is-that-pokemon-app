import React from 'react';

//Styles
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export const LoginScreen = () => {
  return (
    <div>
      <Button 
        variant="text" 
        color="secondary" 
        variant="contained"
        size="large"
      >
      <AccountCircleIcon></AccountCircleIcon>
        Login
      </Button>
    </div>
  )
}
