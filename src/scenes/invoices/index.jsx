import { useTheme } from '@emotion/react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Header from '../../components/Header';
import { mockDataInvoices } from '../../data/mockData';
import { colorTokens } from '../../theme';

const Invoices = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const rows = mockDataInvoices;
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
      field: 'cost',
      headerName: 'Cost',
      ...(isLg ? { flex: 1 } : { minWidth: 200 }),
      renderCell: ({ row: { cost } }) => (
        <Typography color={colors.greenAccent[500]}>{cost}</Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      ...(isLg ? { flex: 1 } : { minWidth: 130 }),
    },
  ];

  return (
    <Stack
      py={2}
      px={2}
      spacing={1}
      sx={{ height: '100%', overflowY: 'scroll' }}
    >
      <Header title='Invoices' subtitle='List of Invoice Balances' />
      <Box
        sx={{
          width: '100%',
          pt: 3,
        }}
      >
        <DataGrid
          checkboxSelection
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
              outline: 0,
              backgroundColor: colors.blueAccent[800],
            },
            '& .MuiDataGrid-cell:focus-within': {
              outline: 0,
            },
          }}
        />
      </Box>
    </Stack>
  );
};

export default Invoices;
