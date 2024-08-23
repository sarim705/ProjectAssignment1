import React from 'react';
import {  Paper, Grid, Button } from '@mui/material';

const questions = Array.from({ length: 18 }, (_, index) => `Question ${index + 1}`);

const QuestionPalette = () => {
  return (
    <Paper elevation={2} sx={{ padding: 2, marginBottom: 3 }}>
      <Grid container spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'start' }}>
        {questions.map((question, index) => (
          <Grid item key={index}>
            <Button 
              variant="contained" 
              sx={{ 
                minWidth: '40px', 
                margin: '2px', 
                backgroundColor:'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#45A049',
                },
                border:'1px solid black',
                borderRadius:  '10px 7px 30px 20px' ,
                fontWeight: 'bold',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
              }}
            >
              {index + 1}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default QuestionPalette;
