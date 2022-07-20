import React, { useState } from 'react';
// import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
// import {theme} from './theme'

import AcUnitIcon from '@mui/icons-material/AcUnit';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));
const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: 'white',
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  // backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  gap: '10px', // smaller than sm then display flex and bigger than 600 then display none
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      {/* <Toolbar>
        Navbar
      </Toolbar> */}
      <StyledToolbar>
        <Typography varient='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          HELLO
        </Typography>

        <AcUnitIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='serach..' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <NotificationsNoneIcon />
          </Badge>
          <Avatar
            alt='Remy Sharp'
            src='https://images.pexels.com/photos/12823101/pexels-photo-12823101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            alt='Remy Sharp'
            src='https://images.pexels.com/photos/12823101/pexels-photo-12823101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Typography variant='span'>Jessy</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
