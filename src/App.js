import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import ListeningSection from './ListeningSection';
import QuestionPalette from './QuestionPalette';
import MainContent from './MainContent';
import ScoreSection from './ScoreSection';

function App() {
  return (
    <Box >
      <Header />
      <ListeningSection />
      <QuestionPalette />
      <MainContent />
      <ScoreSection />
    </Box>
  );
}

export default App;
