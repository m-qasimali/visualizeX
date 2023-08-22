import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import ReBarChart from '../../components/ReBarChart';

const Bar = () => {
  return (
    <>
      <Box
        py={2}
        px={2}
        spacing={1}
        sx={{ height: '100%', overflowY: 'scroll' }}
      >
        <Header title='Bar Chart' subtitle='Simple Bar Chart' />
        <Box
          sx={{
            width: '100%',
            mt: 3,
            height: '88%'
          }}
        >
          <ReBarChart />
        </Box>
      </Box>
    </>
  );
};

export default Bar;
