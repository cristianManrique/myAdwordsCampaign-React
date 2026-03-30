import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

class SummaryChart extends React.Component {
  buildChartData(details) {
    let clicksTotal = 0;
    let conversionsTotal = 0;
    let impressionsTotal = 0;

    Object.keys(details).forEach((key) => {
      const data1 = details[key];
      Object.keys(data1).forEach((innerKey) => {
        const data2 = data1[innerKey];
        Object.keys(data2).forEach((field) => {
          if (field === "clicks") clicksTotal += data2[field];
          else if (field === "conversions") conversionsTotal += data2[field];
          else if (field === "impressions") impressionsTotal += data2[field];
        });
      });
    });

    return {
      clicksTotal,
      conversionsTotal,
      impressionsTotal,
      data: {
        labels: ["clicks", "conversions", "impressions"],
        datasets: [
          {
            data: [clicksTotal, conversionsTotal, impressionsTotal],
            backgroundColor: ["#543cee", "#9034d1", "#FCD447"],
            hoverBackgroundColor: ["#543cee", "#9034d1", "#FCD447"],
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgb(55, 67, 80, 0.8)",
            titleFont: { size: 10 },
            cornerRadius: 3,
            borderWidth: 0,
          },
          legend: {
            display: false,
          },
        },
      },
    };
  }

  render() {
    const { data, options, clicksTotal, conversionsTotal, impressionsTotal } =
      this.buildChartData(this.props.details);

    return (
      <div className="col-6 col-md-6 col-lg-3">
        <div className="box">
          <h4 className="text-center">
            <span className="smallTitle">keyword :</span> {this.props.keyword}
          </h4>
          <Doughnut data={data} options={options} height={30} width={40} />
          <div className="legend mt10">
            <p>
              <span className="boxy mauve"></span> clicks: {clicksTotal}
            </p>
            <p>
              <span className="boxy violet"></span> Conversions:{" "}
              {conversionsTotal}
            </p>
            <p>
              <span className="boxy jaune"></span> Impressions:{" "}
              {impressionsTotal}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

SummaryChart.propTypes = {
  keyword: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
};

export default SummaryChart;
