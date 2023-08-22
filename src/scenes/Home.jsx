import { Stack } from '@mui/material';
import React, { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Sidebar from './global/Sidebar';
import Topbar from './global/Topbar';

const Home = () => {
  const [isToggle, setIsToggle] = useState(false);

  const { pathname } = useLocation();

  if (pathname == '/') {
    return <Navigate to='dashboard' />;
  }

  return (
    <>
      <Stack direction={'row'} sx={{ height: '100vh' }}>
        <Sidebar isToggle={isToggle} setIsToggle={setIsToggle} />
        <Stack
          direction={'column'}
          width={'100%'}
          sx={{ overflowY: 'scroll' }}
          justifyContent={'space-between'}
        >
          <Topbar setIsToggle={setIsToggle} />
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
