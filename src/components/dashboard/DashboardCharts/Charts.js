import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";
import classes from "./Charts.module.css";
import { BiUserPlus } from "react-icons/bi";

const Charts = ({
  casesOnGoing,
  casesConcluded,
  todoTasks,
  completedTasks,
  pendingTasks,
}) => {
  const pieChartValues = {
    series: [todoTasks, completedTasks, pendingTasks],
    options: {
      chart: {
        width: 320,
        type: "pie",
      },
      colors: ["#FFB200", "#B28DDA", "#377DFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["To Do", "Completed", "Pending"],
      legend: {
        show: false,
        floating: true,
      },
    },
  };
  const caseStatusValues = {
    series: [casesConcluded, casesOnGoing],
    options: {
      chart: {
        width: 320,
        type: "donut",
      },
      colors: ["#B28DDA", "#FFB200"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Concluded", "Ongoing"],
      legend: {
        show: false,
        floating: true,
      },
    },
  };

  return (
    <SimpleGrid columns={2} spacing={4} className={classes.charts_wrapper}>
      <div className={classes.card_wrapper}>
        <div className={classes.card_header}>
          <h4>Task Completion</h4>
          <BiUserPlus />
        </div>
        <div className={classes.card_body}>
          <div id="chart">
            <ReactApexChart
              options={pieChartValues.options}
              series={pieChartValues.series}
              type="pie"
              width={320}
            />
          </div>
        </div>
        <div className={classes.card_footer}>
          <ul>
            <li className={classes.primary}>To do</li>
            <li className={classes.secondary}>Completed</li>
            <li className={classes.tartiary}>Pending</li>
          </ul>
        </div>
      </div>
      <div className={classes.card_wrapper}>
        <div className={classes.card_header}>
          <h4>Case Status</h4>
          <BiUserPlus />
        </div>
        <div className={classes.card_body}>
          <div id="chart">
            <ReactApexChart
              options={caseStatusValues.options}
              series={caseStatusValues.series}
              type="donut"
              width={320}
            />
          </div>
        </div>
        <div className={classes.card_footer}>
          <ul>
            <li className={classes.secondary}>Concluded</li>
            <li className={classes.primary}>Ongoing</li>
          </ul>
        </div>
      </div>
    </SimpleGrid>
  );
};

export default Charts;
