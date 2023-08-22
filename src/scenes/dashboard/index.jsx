import { DownloadOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Hidden,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import ProgressCircle from '../../components/ProgressCircle';
import { mockStatsData, mockTransactions } from '../../data/mockData';
import { colorTokens } from '../../theme';
import ReBarChart from './../../components/ReBarChart';
import ReGeographyChart from './../../components/ReGeographyChart';
import ReLineChart from './../../components/ReLineChart';

const Dashboard = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const data = mockStatsData;
  const transactions = mockTransactions;

  return (
    <>
      <Box
        py={2}
        px={2}
        spacing={1}
        sx={{ height: '100%', overflowY: 'scroll' }}
      >
        <Stack
          direction={'row'}
          alignItems={'end'}
          justifyContent={'space-between'}
        >
          <Header title='welcome' subtitle='welcome to your dashboard' />
          <Hidden only={'xs'}>
            <Button
              disableElevation
              variant='contained'
              startIcon={<DownloadOutlined />}
              sx={{
                background: colors.blueAccent[500],
                borderRadius: 0,
                fontWeight: 'bold',
                '&:hover': {
                  background: colors.blueAccent[400],
                },
              }}
            >
              Download Reports
            </Button>
          </Hidden>
        </Stack>
        <Box
          sx={{
            width: '100%',
            mt: 3,
          }}
        >
          <Grid container spacing={2}>
            {/* Row 1 */}
            {data.map((stat, index) => (
              <Grid key={index} item xs={12} md={6} lg={3}>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  backgroundColor={colors.primary[400]}
                  p={3}
                >
                  <Stack direction={'column'} spacing={0.35}>
                    {stat.icon}
                    <Typography
                      variant='h4'
                      fontWeight={'bold'}
                      color='inherit'
                    >
                      {stat.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ color: colors.greenAccent[500] }}
                    >
                      {stat.subtitle}
                    </Typography>
                  </Stack>
                  <Stack
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Box width={40} height={40}>
                      <ProgressCircle progress={stat.progress} />
                    </Box>
                    <Typography
                      variant='body1'
                      sx={{ color: colors.greenAccent[500] }}
                    >
                      {stat.increase}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}

            {/* Row 2 */}
            <Grid item xs={12} lg={8}>
              <Stack
                direction={'column'}
                spacing={0.5}
                backgroundColor={colors.primary[400]}
                p={3}
                height={'300px'}
              >
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Box>
                    <Typography variant='h5' color='inherit'>
                      Revenue Generated
                    </Typography>
                    <Typography
                      variant='h4'
                      fontWeight={'bold'}
                      sx={{ color: colors.greenAccent[400] }}
                    >
                      $59,342,32
                    </Typography>
                  </Box>
                  <DownloadOutlined
                    fontSize='large'
                    sx={{ color: colors.greenAccent[400] }}
                  />
                </Stack>
                <Box width={'100%'} height={'100%'}>
                  <ReLineChart isDashboard={true} />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Stack height={'300px'} spacing={1} direction={'column'}>
                <Box p={1} backgroundColor={colors.primary[400]}>
                  <Typography variant='h4' sx={{ color: colors.grey[100] }}>
                    Recent Transactions
                  </Typography>
                </Box>
                <Stack
                  height={'100%'}
                  direction={'column'}
                  sx={{ overflowY: 'scroll' }}
                  spacing={1}
                >
                  {transactions.map((transaction,index) => (
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                      backgroundColor={colors.primary[400]}
                      p={1}
                      key={index}
                    >
                      <Stack spacing={0.35}>
                        <Typography
                          variant='h5'
                          sx={{ color: colors.greenAccent[400] }}
                        >
                          {transaction.txId}
                        </Typography>
                        <Typography variant='body1' color='inherit'>
                          {transaction.user}
                        </Typography>
                      </Stack>
                      <Typography variant='body1' color='inherit'>
                        {transaction.date}
                      </Typography>
                      <Button
                        variant='contained'
                        sx={{ backgroundColor: colors.greenAccent[400] }}
                      >
                        {transaction.cost}
                      </Button>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Row 3 */}
            <Grid item xs={12} lg={4}>
              <Stack
                backgroundColor={colors.primary[400]}
                direction={'column'}
                p={3}
                justifyContent={'space-between'}
                height={'300px'}
              >
                <Typography variant='h4' color='inherit'>
                  Campaign
                </Typography>
                <Stack
                  direction={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  spacing={1.5}
                >
                  <Box width={'120px'}>
                    <ProgressCircle progress={75} />
                  </Box>
                  <Box textAlign={'center'}>
                    <Typography
                      variant='h4'
                      sx={{ color: colors.greenAccent[500] }}
                    >
                      $48,352 revenue generated
                    </Typography>
                    <Typography variant='h5' color='inherit'>
                      Includes extra misc expenditures and costs
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Stack
                backgroundColor={colors.primary[400]}
                direction={'column'}
                p={3}
                justifyContent={'space-between'}
                height={'300px'}
                spacing={3}
              >
                <Typography variant='h4' color='inherit'>
                  Sales Quantity
                </Typography>
                <ReBarChart isDashboard={true} />
              </Stack>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Stack
                backgroundColor={colors.primary[400]}
                direction={'column'}
                p={3}
                justifyContent={'space-between'}
                height={'300px'}
                spacing={3}
              >
                <Typography variant='h4' color='inherit'>
                  Geography Based Traffic
                </Typography>
                <Box width={'100%'} height={'100%'} overflow={'hidden'}>
                  <ReGeographyChart isDashboard={true} />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
