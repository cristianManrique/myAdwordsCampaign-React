// React
import React from 'react';
import PropTypes from 'prop-types';

// components
import Header from './Header';
import SummaryChart from './SummaryChart';
import KeywordsChart from './KeywordsChart';

// Import Json file
import dataJson from '../assets/data/data.json';

class App extends React.Component {

	state = {
			adwordsData: dataJson
	};

	componentWillMount() {
		this.setState({dataJson});
	};

	render() {
		const SummaryDisplay = Object
				.keys(this.state.adwordsData)
				.map(key => <SummaryChart key={key} keyword={key} details={this.state.adwordsData[key]} />);

		const KeywordsDisplay = Object
				.keys(this.state.adwordsData)
				.map(key => <KeywordsChart key={key} keyword={key} details={this.state.adwordsData[key]} />);

		return (
			<div>
				<Header />
				<div className="container">
					<div className="row">
							<div className="col-md-12 mt70">
								<h2 className="text-center"> Adwords Campaign </h2>
							</div>
							<div className="col-md-12 mt10">
								<h3 className="text-center"><i className="fas fa-chart-pie fa-icon"></i> Summary Chart</h3>
							</div>
							{SummaryDisplay}
					</div>
					<div className="row">
						<div className="col-md-12 mt20">
							<h3 className="text-center"><i className="fas fa-chart-area fa-icon"></i> Keywords Chart</h3>
						</div>
						{KeywordsDisplay}
					</div>
				</div>
			</div>
		)
	};
};

App.propTypes = {
	params: PropTypes.object
};

export default App;
