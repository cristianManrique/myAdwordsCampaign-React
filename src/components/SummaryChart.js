import React from 'react';
import {Doughnut} from 'react-chartjs-2';

let chartDisplay = {};
let legendOpts = {};


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
        legend: {
          position: 'bottom'
        }
        }]
      };

      legendOpts = {
        display: true,
        position: 'bottom',
        fullWidth: true,
        labels: {
          fontColor: 'black'
        }
      };
  }

  componentWillMount() {
		this.renderChart(this.props.details);
	};

  render() {
    return (
      <div className="col-md-4">
        <div className="box">
          <h3 className="text-center">{ this.props.keyword }</h3>
          <Doughnut data={chartDisplay} legend={legendOpts} redraw={true} />
        </div>
      </div>
    );
  };
  static propTypes = {
    keyword: React.PropTypes.string.isRequired,
    details: React.PropTypes.array.isRequired
  }
};

export default SummaryChart;
