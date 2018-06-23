import React from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';

let chartDisplay = {};
let legendOpts = {};

class KeywordsChart extends React.Component {

	renderChart(details) {
		// variables
    let data1 = {};
    let data2 = {};
		let data3 = {};
		let labelList = [];
		let conversionsDatas = [];
		let impressionsDatas = [];
		let clicksDatas = [];

		// loop
    Object.keys(details).forEach(function(key) {
       data1 = details[key];
				 Object.keys(data1).forEach(function(key) {
			 		labelList.push(key);
					data2 = data1[key];
					Object.keys(data2).forEach(function(key) {
						if (key === 'clicks'){
							clicksDatas.push(data2[key]);
						} else if (key === 'conversions') {
							conversionsDatas.push(data2[key]);
						} else if ( key === 'impressions') {
							impressionsDatas.push(data2[key]);
						}
					});
		 		});
    });

		this.setOptionChart(labelList, clicksDatas, conversionsDatas, impressionsDatas);
	}

	setOptionChart(labelList, clicksDatas, conversionsDatas, impressionsDatas){
		chartDisplay = {
		labels: labelList,
		datasets: [
			{
						backgroundColor: 'rgba(0,0,0,0)',
						borderColor: 'blue',
						data: conversionsDatas,
						label: 'conversions'
			},
			{
						backgroundColor: 'rgba(0,0,0,0)',
						borderColor: 'yellow',
						data: impressionsDatas,
						label: 'impressions'
				},
				{
							backgroundColor: 'rgba(0,0,0,0)',
							borderColor: 'magenta',
							data: clicksDatas,
							label: 'clicks'
					}]
		};

	}

	componentWillMount() {
		this.renderChart(this.props.details);
	};

	render() {
    return (
			<div className="col-md-12">
				<div className="box">
					<h3 className="text-center">{ this.props.keyword }</h3>
					<Line data={chartDisplay} />
				</div>
			</div>
    );
  }
}

export default KeywordsChart;
