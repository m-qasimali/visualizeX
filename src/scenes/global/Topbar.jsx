import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { LightModeOutlined, Person } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Stack, useMediaQuery } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import React, { useContext } from 'react';
import { ColorModeContext, colorTokens } from '../../theme';

const Search = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: colorTokens(theme.palette.mode).primary[400],
  '&:hover': {
    backgroundColor: colorTokens(theme.palette.mode).primary[300],
  },
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Topbar = ({ setIsToggle }) => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Stack
        direction={isSM ? 'row-reverse' : 'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        p={2}
        spacing={2}
        boxShadow={theme.shadows[6]}
      >
        <Search>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>
        <Stack
          spacing={{ xs: 0, sm: 1 }}
          direction={'row'}
          alignItems={'center'}
        >
          {isSM && (
            <IconButton
              aria-label='menu-icon'
              onClick={() => {
                console.log("toggled: ");
                setIsToggle((prev) => !prev);
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <IconButton aria-label='mode' onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeIcon />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton aria-label='notification'>
            <NotificationsIcon />
          </IconButton>
          <IconButton aria-label='settings'>
            <SettingsIcon />
          </IconButton>
          <IconButton aria-label='account'>
            <Person />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export default Topbar;
