
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SaleryStaticsChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6"],
            datasets: [
                {
                    label: "Diret",
                    data: [80, 100, 85, 70, 60, 110],
                    backgroundColor: "#0095FF",
                    borderRadius: 100,
                    barThickness: 10,
                },
                {
                    label: "Organic",
                    data: [50, 40, 60, 40, 55, 85],
                    backgroundColor: "#94CBFF",
                    borderRadius: 100,
                    barThickness: 10,
                },
                {
                    label: "Referral",
                    data: [70, 110, 80, 50, 70, 20],
                    backgroundColor: "#CDE7FF",
                    borderRadius: 100,
                    barThickness: 10,
                },
            ],
        });

        setChartOptions({
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        boxWidth: 10,
                        boxHeight: 10,
                        borderRadius: 100,
                    }
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <>
            <Bar data={chartData} options={chartOptions} />
        </>
    );
};

export default SaleryStaticsChart;