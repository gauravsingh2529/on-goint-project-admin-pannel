import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

const DailySales = () => {
  const data = {
    labels: ['Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 01', 'Apr 02'],
    datasets: [
      {
        label: 'Daily Sales',
        data: [120, 150, 170, 200, 220, 180, 210, 240, 260],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: $${tooltipItem.raw}`
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount ($)'
        }
      }
    }
  };

  return (
    <div className="card card-primary card-round">
      <div className="card-header">
        <div className="card-head-row">
          <div className="card-title">Daily Sales</div>
          <div className="card-tools">
            <div className="dropdown">
              <button
                className="btn btn-sm btn-label-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Export
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-category">March 25 - April 02</div>
      </div>
      <div className="card-body pb-0">
        <div className="mb-4 mt-2">
          <h1>$4,578.58</h1>
        </div>
        <div className="pull-in">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DailySales;
