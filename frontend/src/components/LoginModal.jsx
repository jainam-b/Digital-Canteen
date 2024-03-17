import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Login from './Login/Login';
import CloseIcon from '@mui/icons-material/Close'; // Import the CloseIcon

export default function CloseModal() {
  const [open, setOpen] = React.useState(true); // Set open state to true initially

  return (
    <Modal
      aria-labelledby="close-modal-title"
      open={open}
      onClose={(_event, reason) => {
        setOpen(false);
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          minWidth: 300,
          borderRadius: 8, // Adjust border radius
          backgroundColor: '#fff', // Set background color
          boxShadow: 24, // Add shadow
          p: 3,
        }}
      >
        <ModalClose variant="outlined" onClick={() => setOpen(false)} /> {/* Close button */}
        <Typography
          component="h2"
          id="close-modal-title"
          level="h4"
          textColor="text.primary" // Use primary text color
          fontWeight="bold" // Use bold font weight
          sx={{ marginBottom: 2 }} // Add bottom margin
        >
          Login
        </Typography>
        <Login />
      </Sheet>
    </Modal>
  );
}
