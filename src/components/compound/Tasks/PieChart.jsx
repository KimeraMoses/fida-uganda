import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: ["todo", "pending", "completed"],
    datasets: {
      label: "Task Status",
      data: [...data],
      backgroundColor: ["purple", "blue", "orange"],
      borderColor: ["purple", "blue", "orange"],
      borderWidth: 1,
    },
  };
  return <Pie data={chartData} />;
};

export default PieChart;
