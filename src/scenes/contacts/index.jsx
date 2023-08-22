import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { colorTokens } from '../../theme';

const Contacts = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const rows = mockDataContacts;
  const isXL = useMediaQuery(theme.breakpoints.up('xl'));

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      cellClassName: 'name-column--cell',
      ...(isXL ? { flex: 1 } : { minWidth: 160 }),
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
      ...(isXL ? { flex: 1 } : { minWidth: 160 }),
    },
    {
      field: 'email',
      headerName: 'Email',
      ...(isXL ? { flex: 1 } : { minWidth: 200 }),
    },
    {
      field: 'city',
      headerName: 'City',
      ...(isXL ? { flex: 1 } : { minWidth: 160 }),
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      ...(isXL ? { flex: 1 } : { minWidth: 100 }),
    },
    {
      field: 'registrarId',
      headerName: 'Registrar ID',
      ...(isXL ? { flex: 1 } : { minWidth: 100 }),
    },
    {
      field: 'address',
      headerName: 'Address',
      ...(isXL ? { flex: 1 } : { minWidth: 300 }),
    },
  ];

  return (
    <Stack
      py={2}
      px={2}
      spacing={1}
      sx={{ height: '100%', overflowY: 'scroll' }}
    >
      <Header
        title='Contacts'
        subtitle='List of Contacts for Future Reference'
      />
      <Box
        sx={{
          width: '100%',
          pt: 3,
        }}
      >
        <DataGrid
          rows={rows}
          slots={{ toolbar: GridToolbar }}
          columns={columns}
          sx={{
            '&.MuiDataGrid-root': {
              border: '0px',
              outline: '0',
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
            '& .MuiButtonBase-root': {
              color: colors.grey[100],
            },
          }}
        />
      </Box>
    </Stack>
  );
};

export default Contacts;
