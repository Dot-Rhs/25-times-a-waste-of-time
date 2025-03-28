import Chart from "react-apexcharts";

const options = {
  labels: ["Expense", "Income"],
  colors: ["#FD5E53", "#213ebf"],
  chart: {
    width: "50px"
  },
  states: {
    hover: {
      filter: {
        type: "none"
      }
    }
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  hover: { mode: null },
  ApexPlotOptions: {
    donut: {
      labels: {
        show: false
      }
    }
  },
  fill: {
    colors: ["#FD5E53", "#213ebf"]
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundcolor: "#000"
    }
  }
};

const ChartSummary = ({ expense = 0, income = 0 }) => {
  return (
    <Chart
      options={options}
      series={[expense, income]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
};

export default ChartSummary;
