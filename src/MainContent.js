
import React from 'react';
import { Box, Paper, Grid, Button, Typography, Divider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LightbulbOutlinedIcon from '@mui/icons-material/Lightbulb';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

const MainContent = () => {
  return (
    <Paper sx={{ padding: 3, margin: 3 }}>
      
      
      <Box sx={{ backgroundColor: '#a5d6a7', marginBottom: 2, marginTop:-3, marginLeft:-3 , marginRight:-3 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ color: 'black',marginLeft:1}}>
            Question 1
          </Typography>
          <Button 
            startIcon={<LightbulbOutlinedIcon />} 
            sx={{ backgroundColor: '#fff', borderRadius: 2, textTransform: 'none', color:'green' }}>
            Tips to Excel
          </Button>
        </Grid>
        <Box display={'flex'} >
          <Grid item xs={2} marginRight={1} marginLeft={1} alignItems={'center'} >
            <Typography variant="subtitle1"  sx={{ color: '#fff', fontWeight: 'bold' , backgroundColor:'blue',marginBottom:'6px', padding:'0 2px 0 2px'}}>
              SST  
            </Typography>
          </Grid>
          <Typography variant = "subtitle2" sx={{color:'green', fontWeight:'bold'}}>
            Summarize Spoken Test
          </Typography>
        </Box>
      </Box>
      
      <Typography variant="body2" fontSize="12px" color="black" gutterBottom sx={{ padding: 2 ,marginLeft:-2}}>
        You will hear a short lecture. Write a summary for a fellow student who was not present at the lecture. You should write 50-70 words. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the lecture.
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center',  marginBottom: 2 }}>
        <Button 
          variant="outlined" 
          sx={{ 
            padding: '8px 12px', 
            borderRadius: '30px', 
            border: '1px solid #E0E0E0', 
            backgroundColor: '#F5F5F5',
            color: '#000', 
            fontWeight: 'normal',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '250px', 
          }}
        >
          <PlayArrowIcon sx={{ marginRight: '8px', color: '#000' }} />
          <Typography variant="body2">00:00</Typography>
          <Divider sx={{ backgroundColor: '#BDBDBD', height: 2, flexGrow: 1, margin: '0 8px' }} />
          <VolumeUpIcon sx={{ marginLeft: '8px', color: '#000' }} />
        </Button>
      </Box>

      
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: -2 , marginLeft: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', borderRadius: "50px" }}>
          My Answer
          <PersonIcon />
        </Button>
      </Box>
      <Box sx={{ padding: 2, border: '1px solid black', borderRadius: 2, marginBottom: 2 }}>
        <Grid item xs={10} mb={2}>
          Lucky, luck, lottery, scientific research.
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" sx={{ color: '#4CAF50', borderRadius: 50, backgroundColor: 'white', textTransform: 'none' }}>
              Total Words: 5
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ color: '#FF5252', borderRadius: 50, backgroundColor: 'white', textTransform: 'none' }}>
              Grammatical Mistake: 1
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ color: 'blue', borderRadius: 50, backgroundColor: 'white', textTransform: 'none' }}>
              Spelling Mistakes: 0
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center',  marginBottom: -2 , marginLeft: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: 'white', borderRadius: "50px", color: 'black' }}>
          Ideal Answer
          <StarIcon />
        </Button>
      </Box>
      <Box sx={{ padding: 2, border: '1px solid black', borderRadius: 2 }}>
        <Typography variant='subtitle1' fontSize={'10px'}>  
          The speaker seems to challenge the popular view that luck plays much of a role in scientific discovery. The scientist puts himself in the way of scientific discovery by increasing his knowledge through hard work that involves observations and experiments. All the effort is a deliberate action to achieve blinding luck.
        </Typography> 
      </Box>
    </Paper>
  );
};

export default MainContent;
