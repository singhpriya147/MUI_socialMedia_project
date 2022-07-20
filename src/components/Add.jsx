import React, { useState } from 'react';
import {
  Avatar,
  Stack,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const StyledModal = styled(Modal)({
  dispaly: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const UserBox = styled(Box)({
  dispaly: 'flex',
  alignItems: 'center',
  gap: '10px',
  mb: 20,
});

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add Post'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50%)', md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        // aria-labelledby='modal-modal-title'
        // aria-describedby='modal-modal-description'
      >
        <Box
          width={400}
          height={280}
          bgcolor='white'
          p={3}
          borderRadius={4}
          mt={25}
          ml={70}
        >
          <Typography>Create post</Typography>
          <UserBox>
            <Avatar src='https://images.pexels.com/photos/12635435/pexels-photo-12635435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='standard-multiline-static'
            multiline
            rows={4}
            placeholder='Whats going on ...'
            variant='standard'
          />
          <Stack direction='row' gap={1}>
            <EmojiEmotionsIcon />
            <EmojiEmotionsIcon />
            <EmojiEmotionsIcon />
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
