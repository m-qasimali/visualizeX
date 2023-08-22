import { Box, Stack, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import { mockGeographyData as data } from '../data/mockData';
import { geoFeatures } from '../data/mockGeoFeatures';
import { colorTokens } from '../theme';

const ReGeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <>
      {/* <Box height={'100%'} width={'100%'}> */}
        <ResponsiveChoropleth
          data={data}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
          }}
          features={geoFeatures.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          domain={[0, 1000000]}
          unknownColor='#666666'
          label='properties.name'
          valueFormat='.2s'
          projectionScale={isDashboard ? 40 : 150}
          projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1.5}
          borderColor={colors.grey[100]}
          tooltip={(tooltipProps) => {
            return (
              <Stack
                direction='row'
                spacing={1}
                p={1}
                sx={{ minWidth: '100px', background: '#fff', color: '#000' }}
              >
                <Box
                  sx={{
                    width: '20px',
                    height: '20px',
                    background: tooltipProps.feature.color,
                  }}
                ></Box>
                <strong>{tooltipProps.feature.properties.name}</strong>
              </Stack>
            );
          }}
          legends={
            !isDashboard
              ? [
                  {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: colors.grey[100],
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: colors.grey[200],
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]
              : undefined
          }
        />
      {/* </Box> */}
    </>
  );
};

export default ReGeographyChart;
