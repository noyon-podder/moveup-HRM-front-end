import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const BalanceChart = () => {
    const [chartData, setChartData] = useState([]);
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        // Define the data in the correct format for Google Charts
        const data = [
            ["Year", "Sales", "Expenses", 'bonus'],
            ["2004", 7, 3, 9],
            ["2005", 6, 3, 6],
            ["2006", 8, 7, 4],
            ["2007", 5, 6, 7],
        ];

        // Define the chart options
        const options = {
            curveType: "function",
            legend: { position: "bottom" },
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={chartData}
                options={chartOptions}
            />
        </div>
    );
};

export default BalanceChart;
