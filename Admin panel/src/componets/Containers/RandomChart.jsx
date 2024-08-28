import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Register all chart components
Chart.register(...registerables);

const generateRandomData = (numPoints) => {
  return Array.from({ length: numPoints }, () => Math.floor(Math.random() * 100));
};

const RandomChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('randomChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar', // Type of chart
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Random Data',
            data: generateRandomData(7), // Number of data points
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-round">
            <div className="card-header">
              <div className="card-head-row">
                <div className="card-title">Random Data Chart</div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-container" style={{ minHeight: '375px' }}>
                <canvas id="randomChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomChart;
