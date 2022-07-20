import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@mui/material';
function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position='fixed' width={300}>
        <Typography varient='h6' fontweight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt='Remy Sharp'
            src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Travis Howard'
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
        </AvatarGroup>
        <Typography varient='h6' fontweight={100} mt={2} mb={2}>
          Latest Photos
          <ImageList sx={{}} cols={2} gap={5} rowHeight={164}>
            <ImageListItem>
              <img src='https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://images.pexels.com/photos/11769686/pexels-photo-11769686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://images.pexels.com/photos/11969709/pexels-photo-11969709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            </ImageListItem>
          </ImageList>
        </Typography>
        <Typography varient='h6' fontweight={100}>
          Latest conversation
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar
                  alt='Remy Sharp'
                  src='https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
              </ListItemAvatar>
              <ListItemText
                primary='Brunch this weekend?'
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar
                  alt='Travis Howard'
                  src='https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
              </ListItemAvatar>
              <ListItemText
                primary='Summer BBQ'
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar
                  alt='Cindy Baker'
                  src='https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 '
                />
              </ListItemAvatar>
              <ListItemText
                primary='Oui Oui'
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Typography>
      </Box>
    </Box>
  );
}

export default Rightbar;
