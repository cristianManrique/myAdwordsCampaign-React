import React from 'react';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';

let chartDisplay = {};
let legendOpts = {};
// let options = {};


class SummaryChart extends React.Component {

  renderChart(details) {
    // variables
    let data1 = {};
    let data2 = {};
    let clicksTotal = null;
    let conversionsTotal = null;
    let impressionsTotal = null;
    // loop
    Object.keys(details).forEach(function(key) {
       data1 = details[key];
      });

    Object.keys(data1).forEach(function(key) {
      data2 = data1[key];
    });

    Object.keys(data2).forEach(function(key) {
      if (key === 'clicks'){
        clicksTotal += clicksTotal + data2[key];
      }
      if (key === 'conversions'){
        conversionsTotal += conversionsTotal + data2[key];
      }
      if (key === 'impressions'){
        impressionsTotal += impressionsTotal + data2[key];
      }
    });

    this.setOptionChart(clicksTotal, conversionsTotal, impressionsTotal);

  };

  setOptionChart(clicks, conversions, impressions){
    chartDisplay = {
        labels: [
          'clicks',
          'conversions',
          'impressions'
        ],
        datasets: [{
          data: [clicks, conversions, impressions],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        options: {
				responsive: true,
				legend: {
					display: false
				},
				tooltips: {
					enabled: false,
				}
			}
        }]
      };

      // options = {
      //   maintainAspectRatio: true,
      //   responsive: true,
      //   legend: {
      //     position: 'left',
      //     labels: {
      //       boxWidth: 10
      //     }
      //   }
      // }

      legendOpts = {
        display: true,
        position: 'bottom',
        fullWidth: false,
        labels: {
          fontColor: 'black',
          fontSize: 9,
          boxWidth: 10,
          padding: 5
        }
      };
  }

  componentWillMount() {
		this.renderChart(this.props.details);
	};

  render() {
    return (
      <div className="col-md-3">
        <div className="box">
          <h4 className="text-center">{ this.props.keyword }</h4>
          <Doughnut data={chartDisplay} legend={legendOpts} height={10} width={10} redraw={true} />
        </div>
      </div>
    );
  };
};

SummaryChart.propTypes = {
  keyword: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired
};

export default SummaryChart;
