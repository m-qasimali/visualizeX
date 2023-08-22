import { useTheme } from '@emotion/react';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Header from '../../components/Header';
import { mockDataTeam } from '../../data/mockData';
import { colorTokens } from '../../theme';

const Team = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const rows = mockDataTeam;
  const isLg = useMediaQuery(theme.breakpoints.up('md'));

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      cellClassName: 'name-column--cell',
      ...(isLg ? { flex: 1 } : { minWidth: 160 }),
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone',
      ...(isLg ? { flex: 1 } : { minWidth: 160 }),
    },
    {
      field: 'email',
      headerName: 'Email',
      ...(isLg ? { flex: 1 } : { minWidth: 200 }),
    },
    {
      field: 'access',
      headerName: 'Access',
      resizable: false,
      minWidth: 170,
      renderCell: ({ row: { access } }) => (
        <Box
          width={'80%'}
          mx={'auto'}
          p={1}
          display={'flex'}
          justifyContent={'center'}
          backgroundColor={
            access === 'admin'
              ? colors.greenAccent[600]
              : access === 'manager'
              ? colors.greenAccent[700]
              : colors.greenAccent[700]
          }
          borderRadius={0.5}
        >
          {access === 'admin' && <AdminPanelSettingsOutlined />}
          {access === 'manager' && <SecurityOutlined />}
          {access === 'user' && <LockOpenOutlined />}
          <Typography color={colors.grey[100]} sx={{ ml: 0.5 }}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Stack
      py={2}
      px={2}
      spacing={1}
      sx={{ height: '100%', overflowY: 'scroll' }}
    >
      <Header title='Team' subtitle='Managing the Team Members' />
      <Box
        sx={{
          width: '100%',
          pt: 3,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            '&.MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: colors.blueAccent[700],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[700],
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
            '& .MuiDataGrid-columnHeader:focus': {
              outline: '0',
              backgroundColor: colors.blueAccent[800],
            },
          }}
        />
      </Box>
    </Stack>
  );
};

export default Team;
