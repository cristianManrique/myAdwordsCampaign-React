import React from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';

let chartDisplay = {};
let legendOpts = {};
let options = {};

class KeywordsChart extends React.Component {

	renderChart(details) {
		// variables
    let data1 = {};
    let data2 = {};
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
							borderColor: '#543cee',// mauve
							data: clicksDatas,
							label: 'clicks',
							borderWidth: 1.5,
							fill: false
					},
					{
							backgroundColor: 'rgba(0,0,0,0)',
							borderColor: '#9034d1',// violet
							data: conversionsDatas,
							label: 'conversions',
							borderWidth: 1.5,
							fill: false
					},
					{
							backgroundColor: 'rgba(0,0,0,0)',
							borderColor: '#FCD447',// jaune
							data: impressionsDatas,
							label: 'impressions',
							borderWidth: 1.5,
							fill: false
						}
				]
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
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
							ticks: {
                    display: false
                },
								gridLines: {
                    display:false
                }
						}],
						yAxes: [{
							stacked: true,
							gridLines: {
                    display:false
                }
						}]
					},
					legend: {

	          position: 'bottom',
	          labels: {
	            boxWidth: 10
	          }
	        }
		};

	}

	componentWillMount() {
		this.renderChart(this.props.details);
	};

	render() {
    return (
			<div className="col-md-6">
				<div className="box">
					<h3><span className="smallTitle">keword :</span> { this.props.keyword }</h3>
					<Line data={chartDisplay} options={options}/>
				</div>
			</div>
    );
  }
}

export default KeywordsChart;
