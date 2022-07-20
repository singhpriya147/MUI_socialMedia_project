import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';

function Sidebar() {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Homepage' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary='Groups' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary='Marketplace' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary='Friends' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <SettingsApplicationsIcon />
              </ListItemIcon>
              <ListItemText primary='Setting' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
