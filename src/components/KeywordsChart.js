import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

class KeywordsChart extends React.Component {
  buildChartData(details) {
    let labelList = [];
    let conversionsDatas = [];
    let impressionsDatas = [];
    let clicksDatas = [];

    Object.keys(details).forEach((key) => {
      const data1 = details[key];
      Object.keys(data1).forEach((innerKey) => {
        labelList.push(innerKey);
        const data2 = data1[innerKey];
        Object.keys(data2).forEach((field) => {
          if (field === "clicks") clicksDatas.push(data2[field]);
          else if (field === "conversions") conversionsDatas.push(data2[field]);
          else if (field === "impressions") impressionsDatas.push(data2[field]);
        });
      });
    });

    return {
      data: {
        labels: labelList,
        datasets: [
          {
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#543cee",
            data: clicksDatas,
            label: "clicks",
            borderWidth: 1.5,
            fill: false,
          },
          {
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#9034d1",
            data: conversionsDatas,
            label: "conversions",
            borderWidth: 1.5,
            fill: false,
          },
          {
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#FCD447",
            data: impressionsDatas,
            label: "impressions",
            borderWidth: 1.5,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        interaction: {
          mode: "index",
          intersect: true,
        },
        plugins: {
          tooltip: {
            backgroundColor: "rgb(55, 67, 80, 0.8)",
            titleFont: { size: 10 },
            cornerRadius: 3,
            borderWidth: 0,
          },
          legend: {
            position: "bottom",
            labels: { boxWidth: 10 },
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: { display: false },
            grid: { display: false },
          },
          y: {
            stacked: true,
            grid: { display: false },
          },
        },
      },
    };
  }

  render() {
    const { data, options } = this.buildChartData(this.props.details);
    return (
      <div className="col-md-6">
        <div className="box">
          <h3>
            <span className="smallTitle">keyword :</span> {this.props.keyword}
          </h3>
          <Line data={data} options={options} />
        </div>
      </div>
    );
  }
}

KeywordsChart.propTypes = {
  keyword: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
};

export default KeywordsChart;
