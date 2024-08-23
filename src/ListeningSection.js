
import React from 'react';
import { Button } from '@mui/material';

const ListeningSection = () => {
  return (
    <Button
      variant="outline"
      sx={{
        color: '#4CAF50',
        textTransform: 'none',
        fontWeight: 'bold',
        marginLeft: '10px',
        marginBottom: 1,
        fontFamily: 'Arial,sans-serif',
        backgroundColor: 'white',
        border: '2px solid #4CAF50',
        borderRadius: '50px',
      }}
    >
      Listening
    </Button>
  );
};

export default ListeningSection;
