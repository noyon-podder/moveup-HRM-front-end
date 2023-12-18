import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const GrouthChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['USA', 'UK', 'Australia', 'Europe'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 9, 14],
                    backgroundColor: [
                        'rgba(0, 87, 194, 1)',
                        'rgba(0, 149, 255, 1)',
                        'rgba(148, 203, 255, 1)',
                        'rgba(205, 231, 255, 1)'
                    ],
                    borderColor: [
                        'rgba(0, 87, 194, 1)',
                        'rgba(0, 149, 255, 1)',
                        'rgba(148, 203, 255, 1)',
                        'rgba(205, 231, 255, 1)'
                    ],
                },
            ],
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: "bottom",
                    display: true,
                    labels: {
                        boxWidth: 10,
                        boxHeight: 10,
                        borderRadius: 50
                    },
                },
            },
            cutout: 50,
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <div style={{ height: '150px' }}>
                <Doughnut data={chartData} options={chartOptions} />
        </div>
    );
};

export default GrouthChart;