import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale);

const ActiveUsers = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Users Online',
        data: [12, 19, 13, 17, 21, 23, 20],
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        tension: 0.1,
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };

  return (
    <div className="card card-round">
      <div className="card-body pb-0">
        <div className="h1 fw-bold float-end text-primary">+5%</div>
        <h2 className="mb-2">17</h2>
        <p className="text-muted">Users online</p>
        <div className="pull-in sparkline-fix">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
