import { useTheme } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import { colorTokens } from '../theme';

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <>
      <Stack direction={'column'}>
        <Typography variant='h2' fontWeight={'bold'} color={colors.grey[100]}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant='h5' color={colors.greenAccent[400]}>
          {subtitle.charAt(0).toUpperCase() + subtitle.slice(1)}
        </Typography>
      </Stack>
    </>
  );
};

export default Header;
