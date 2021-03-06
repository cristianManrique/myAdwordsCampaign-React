import React from 'react';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';

let chartDisplay = {};
let legendOpts = {};
let options = {}
let clicksTotal = null;
let conversionsTotal = null;
let impressionsTotal = null;


class SummaryChart extends React.Component {

  renderChart(details) {
    // variables
    let data1 = {};
    let data2 = {};
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
      else if (key === 'conversions'){
        conversionsTotal += conversionsTotal + data2[key];
      }
      else if (key === 'impressions'){
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
            '#543cee',// mauve
            '#9034d1',// violet
            '#FCD447'// jaune
          ],
          hoverBackgroundColor: [
            '#543cee',// mauve
            '#9034d1',// violet
            '#FCD447'// jaune
          ],
          radius: "90%"
        }],
      };

      options = {
        tooltips: {
					mode: 'index',
					intersect: false,
					backgroundColor: 'rgb(55, 67, 80, 0.8)',
					titleFontSize: 10,
					cornerRadius: 3,
          borderWidth: 0
				},
        cutoutPercentage: 70,
      };

      legendOpts = {
        display: false,
        position: 'bottom',
        fullWidth: false,
        labels: {
          fontColor: '#171c22',
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
      <div className="col-6 col-md-6 col-lg-3">
        <div className="box">
          <h4 className="text-center"><span className="smallTitle">keword :</span> { this.props.keyword }</h4>
          <Doughnut data={chartDisplay} legend={legendOpts} options={options} height={30} width={40} />
          <div className="legend mt10">
            <p><span className="boxy mauve"></span> clicks: {clicksTotal}</p>
            <p><span className="boxy violet"></span> Conversions: {conversionsTotal}</p>
            <p><span className="boxy jaune"></span> Impressions: {impressionsTotal}</p>
          </div>
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
