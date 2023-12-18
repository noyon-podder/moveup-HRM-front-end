import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueChart = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Diret', 'Organic', 'Referral'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 3],
                    backgroundColor: [
                        'rgba(0, 149, 255, 1)',
                        'rgba(148, 203, 255, 1)',
                        'rgba(205, 231, 255, 1)'
                    ],
                    borderColor: [
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
            cutout: 65,
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <div style={{ height: '200px' }}>
            <Doughnut data={chartData} options={chartOptions} />
        </div>
    );
};

export default RevenueChart;