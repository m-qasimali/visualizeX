import { Box, useTheme } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import ReGeographyChart from '../../components/ReGeographyChart';
import { colorTokens } from '../../theme';

const Geography = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <>
      <Box
        py={2}
        px={2}
        spacing={1}
        sx={{ height: '100%', overflowY: 'scroll' }}
      >
        <Header title='Geography Chart' subtitle='Simple Geography Chart' />
        <Box
          sx={{
            width: '100%',
            mt: 3
          }}
          height='88%'
          border={`1px solid ${colors.grey[100]}`}
          borderRadius='4px'
        >
          <ReGeographyChart />
        </Box>
      </Box>
    </>
  );
};

export default Geography;
