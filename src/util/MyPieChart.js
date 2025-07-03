import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const MyPieChart = () => {
    const data = {
        labels: ['Cooking', 'Guitar', 'CSS Tolerance'],
        datasets: [
            {
                data: [90, 70, 30],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Pie data={data} />
        </div>
    );
};

export default MyPieChart;

