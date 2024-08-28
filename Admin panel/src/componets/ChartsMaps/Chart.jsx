import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = ({ type, data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [data, options]);

  return (
    <Line
      ref={chartRef}
      data={data}
      options={options}
    />
  );
};

export default Chart;
