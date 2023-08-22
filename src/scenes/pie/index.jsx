import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import RePieChart from '../../components/RePieChart';

const Pie = () => {
  return (
    <>
      <Box
        py={2}
        px={2}
        spacing={1}
        sx={{ height: '100%', overflowY: 'scroll' }}
      >
        <Header title='Pie Chart' subtitle='Simple Pie Chart' />
        <Box
          sx={{
            width: '100%',
            pt: 3,
          }}
        >
          <RePieChart />
        </Box>
      </Box>
    </>
  );
};

export default Pie;
