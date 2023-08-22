import React, { useState } from 'react';
import { ColorModeContext, useMode } from './theme.js';
import { CssBaseline, Stack, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './scenes/dashboard/index.jsx';
import Team from './scenes/Team/index.jsx';
import Invoices from './scenes/Invoices/index.jsx';
import Contacts from './scenes/contacts/index.jsx';
import Bar from './scenes/bar/index.jsx';
import Form from './scenes/form/index.jsx';
import Line from './scenes/line/index.jsx';
import Pie from './scenes/pie/index.jsx';
import FAQ from './scenes/faq/index.jsx';
import Geography from './scenes/geography/index.jsx';
import Calendar from './scenes/calendar/index.jsx';
import Sidebar from './scenes/global/Sidebar.jsx';
import Home from './scenes/Home.jsx';
import { ConfirmProvider } from 'material-ui-confirm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'invoices',
        element: <Invoices />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'bar',
        element: <Bar />,
      },
      {
        path: 'form',
        element: <Form />,
      },
      {
        path: 'line',
        element: <Line />,
      },
      {
        path: 'pie',
        element: <Pie />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'geography',
        element: <Geography />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
    ],
  },
]);

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ConfirmProvider>
            <CssBaseline enableColorScheme={true} />
            <RouterProvider router={router} />
          </ConfirmProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
