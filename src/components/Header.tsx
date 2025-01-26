import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  const getTextVariant = () => {
    if (window.innerWidth > 500) {
      return 'h5';
    }
    return 'body2';
  };
  return (
    <AppBar>
      <Toolbar>
        {/* <IconButton edge='start' size='large' color='inherit'>
          <MenuIcon />
        </IconButton> */}
        <Typography variant={getTextVariant()}>Beyond The Mountains</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
