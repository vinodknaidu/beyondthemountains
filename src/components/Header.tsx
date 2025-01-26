import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        {/* <IconButton edge='start' size='large' color='inherit'>
          <MenuIcon />
        </IconButton> */}
        <Typography variant='h5'>Beyond The Mountains</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
