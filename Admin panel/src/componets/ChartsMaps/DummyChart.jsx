// src/components/DummyChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary ChartJS components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const DummyChart = () => {
  // Dummy data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81, 56], // Sample data points
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': $' + context.parsed.y;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ position: 'relative', height: '400px', width: '600px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default DummyChart;
