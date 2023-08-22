import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import ReLineChart from '../../components/ReLineChart';

const Line = () => {
  return (
    <>
      <Box
        py={2}
        px={2}
        spacing={1}
        sx={{ height: '100%', overflowY: 'scroll' }}
      >
        <Header title='Line Chart' subtitle='Simple Line Chart' />
        <Box
          sx={{
            width: '100%',
            mt: 3,
            height: '88%'
          }}
          flexGrow={true}
        >
          <ReLineChart />
        </Box>
      </Box>
    </>
  );
};

export default Line;
