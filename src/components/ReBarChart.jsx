import React from 'react';
import { mockBarData } from '../data/mockData';
import {
  Bar,
  BarChart,
  CartesianAxis,
  CartesianGrid,
  Label,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Box, useTheme } from '@mui/material';
import { colorTokens } from '../theme';

const ReBarChart = ({ isDashboard = false }) => {
  const data = mockBarData;
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <>
      <ResponsiveContainer width='100%' height={'100%'}>
        <BarChart
          data={data}
          margin={{
            top: isDashboard ? 0 : 20,
            right: isDashboard ? -5 : 10,
            left: isDashboard ? -30 : 10,
            bottom: isDashboard ? 0 : 30,
          }}
          barCategoryGap={'18%'}
        >
          {!isDashboard && <CartesianGrid vertical={false} />}
          <XAxis
            stroke={colors.grey[200]}
            dataKey='country'
            tick={{ fill: colors.grey[200] }}
          >
            {!isDashboard && (
              <Label
                value='Country'
                offset={-20}
                position='insideBottom'
                style={{
                  fontSize: '1.5rem',
                }}
              />
            )}
          </XAxis>
          <YAxis
            tickCount={isDashboard ? 4 : 7}
            stroke={colors.grey[200]}
            tick={{ fill: colors.grey[200] }}
          >
            {!isDashboard && (
              <Label
                style={{
                  fontSize: '1.5rem',
                }}
                value='Food'
                position={'insideLeft'}
                angle={-90}
              />
            )}
          </YAxis>
          <Tooltip
            labelStyle={{ color: colors.primary[500] }}
            cursor={{ fill: 'transparent' }}
          />
          {!isDashboard && (
            <Legend layout='horizontal' verticalAlign='top' height={36} />
          )}
          <Bar
            legendType='circle'
            dataKey='hot dog'
            stackId='a'
            fill='hsl(208, 70%, 50%)'
          />
          <Bar
            legendType='circle'
            dataKey='burger'
            stackId='a'
            fill='hsl(334, 70%, 50%)'
          />
          <Bar
            legendType='circle'
            dataKey='kebab'
            stackId='a'
            fill='hsl(182, 70%, 50%)'
          />
          <Bar
            legendType='circle'
            dataKey='donut'
            stackId='a'
            fill='hsl(76, 70%, 50%)'
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ReBarChart;
