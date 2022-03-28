import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
  const pieData = {
    labels: ["concluded", "ongoing"],
    datasets: {
      label: "Court Cases",
      data: [...data],
      backgroundColor: ["purple", "white"],
      borderColor: ["purple", "white"],
      borderWidth: 1,
    },
  };
  return <Doughnut data={pieData} />;
};

export default DoughnutChart;
