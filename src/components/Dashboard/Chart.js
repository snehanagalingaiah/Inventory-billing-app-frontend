import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const PieChart = ({labels, piedata}) => { 
  const chartRef = useRef(null);

  useEffect(() => { 
    const chartCanvas = chartRef.current.getContext('2d');
    const data = {
      labels: labels,
      datasets: [
        {
          data: piedata,
          backgroundColor: ['#36A2EB', '#FF6384'],
        },
      ],
    };

    new Chart(chartCanvas, {
      type: 'pie',
      data: data,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChart;
