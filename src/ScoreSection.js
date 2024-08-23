// ScoreSection.js
import React from 'react';
import { Box, Paper, Typography, LinearProgress } from '@mui/material';

const scores = [
  { label: 'TOTAL', value: 53, color: '#4CAF50' },
  { label: 'CONTENT', value: 10, color: '#00B2C9' },
  { label: 'GRAMMAR', value: 90, color: '#D9534F' },
  { label: 'FORM', value: 10, color: '#7D7D7D' },
  { label: 'VOCABUL', value: 65, color: '#4E4E4E' },
  { label: 'SPELL', value: 90, color: '#F0AD4E' },
];

const ScoreSection = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#FFFFFF', borderRadius: '10px', marginLeft: '22px', marginRight: '22px' }}>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Score - (10-90)
      </Typography>
      {scores.map((item) => (
        <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
          <Typography variant="body2" sx={{ minWidth: '80px', color: '#333', fontWeight: 'bold' }}>
            {item.label}
          </Typography>
          <Typography variant="body2" sx={{ width: '40px', textAlign: 'right', color: '#333', fontWeight: 'bold', marginLeft: '200px' }}>
            {item.value}
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={item.value} 
            sx={{ 
              flexGrow: 1, 
              marginLeft: 2,
              height: 8, 
              borderRadius: 5, 
              backgroundColor: '#FFFFFF', 
              [`& .MuiLinearProgress-bar`]: { 
                backgroundColor: item.color 
              } 
            }} 
          />
        </Box>
      ))}
    </Paper>
  );
};

export default ScoreSection;
