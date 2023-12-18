
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

const EmployeeStructureChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6"],
            datasets: [
                {
                    label: "Net Profit",
                    data: [40, 60, 50, 70, 110, 85],
                    backgroundColor: "#0095FF",
                    borderRadius: 100,
                    barThickness: 10,
                },
                {
                    label: "Revenue",
                    data: [50, 80, 60, 115, 55, 85],
                    backgroundColor: "#94CBFF",
                    borderRadius: 100,
                    barThickness: 10,
                },
                {
                    label: "Free Cash Flow",
                    data: [70, 70, 80, 50, 105, 30],
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

export default EmployeeStructureChart;