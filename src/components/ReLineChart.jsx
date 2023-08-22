import { useTheme } from '@mui/material';
import React from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { mockLineData } from '../data/mockData';
import { colorTokens } from '../theme';

const ReLineChart = ({ isDashboard = false }) => {
  const data = mockLineData;
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: isDashboard ? 5 : 30,
            left: isDashboard ? -30 : 20,
            bottom: isDashboard ? 0 : 30,
          }}
          color='red'
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey='x'
            allowDuplicatedCategory={false}
            type='category'
            stroke={colors.grey[200]}
            tick={{ fill: colors.grey[200] }}
          >
            {!isDashboard && (
              <Label
                style={{
                  fontSize: '1.5rem',
                }}
                offset={-20}
                position='insideBottom'
              >
                Transportation
              </Label>
            )}
          </XAxis>
          <YAxis stroke={colors.grey[200]} tick={{ fill: colors.grey[200] }}>
            {!isDashboard && (
              <Label
                style={{
                  fontSize: '1.5rem',
                }}
                value='Count'
                position={'insideLeft'}
                angle={-90}
              />
            )}
          </YAxis>
          <Tooltip
            labelStyle={{ color: colors.primary[500] }}
            cursor={{ fill: 'transparent', stroke: 'transparent' }}
          />
          <Legend layout='horizontal' verticalAlign='top' height={36} />
          {data.map((s) => (
            <Line
              type='monotone'
              dataKey='y'
              name={s.id}
              key={s.id}
              data={s.data}
              stroke={s.color}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ReLineChart;
