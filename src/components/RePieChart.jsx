import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';
import { mockPieData } from '../data/mockData';
import { colorTokens } from '../theme';

const data = mockPieData;

const RePieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const pieChartContainerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);

  const handleResize = () => {
    if (pieChartContainerRef.current) {
      const width = pieChartContainerRef.current.offsetWidth;
      setContainerWidth(width);
    }
  };

  useEffect(() => {
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={8}
          textAnchor='middle'
          fill={fill}
          fontSize={20}
          fontWeight={'bold'}
        >
          {payload.label}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        {(!isMd || containerWidth > 768) && (
          <>
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill='none'
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill={colors.grey[100]}
              fontSize={16} // Set the font size to 16 pixels
              fontWeight='bold' // Make the text bold
            >{`PV ${value}`}</text>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              dy={18}
              textAnchor={textAnchor}
              fill='#999'
              fontSize={14} // Set the font size to 14 pixels
            >
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </>
        )}
      </g>
    );
  };

  return (
    <>
      <Box ref={pieChartContainerRef} height={'80vh'} px={5}>
        <ResponsiveContainer width='100%' height={'100%'}>
          <PieChart width={'500'} height={'400'}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={'50%'}
              outerRadius={'85%'}
              fill='#8884d8'
              dataKey='value'
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

export default RePieChart;
