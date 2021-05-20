import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';

const Line = (props) => {
  Line.propTypes = { chartData: PropTypes.arrayOf(PropTypes.object).isRequired };
  const { chartData } = props;
  return (
    <ResponsiveLine
      data={chartData}
      margin={{
        top: 65,
        right: 60,
        bottom: 50,
        left: 60,
      }}
      xScale={{
        type: 'point',
      }}
      yScale={{
        type: 'linear',
        stacked: true,
        min: 'auto',
        max: 'auto',
      }}
      minY="auto"
      maxY="auto"
      stacked
      curve="cardinal"
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Date',
        legendOffset: 40,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Weight (lbs)',
        legendOffset: -50,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'blues' }}
      theme={{
        fontSize: 16,
        textColor: '#DAE3E9',
      }}
      dotSize={10}
      dotColor="inherit"
      dotBorderWidth={2}
      dotBorderColor="#ffffff"
      enableDotLabel
      dotLabel="y"
      dotLabelYOffset={-12}
      animate
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default Line;
