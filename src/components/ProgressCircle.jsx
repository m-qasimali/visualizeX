import { useTheme } from '@emotion/react';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { colorTokens } from '../theme';

const ProgressCircle = ({ progress }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <>
      <CircularProgressbar
        value={progress}
        strokeWidth={15}
        styles={buildStyles({
          pathColor: colors.greenAccent[500],
          trailColor: colors.blueAccent[500],
          strokeLinecap: 'butt',
        })}
      />
    </>
  );
};

export default ProgressCircle;
