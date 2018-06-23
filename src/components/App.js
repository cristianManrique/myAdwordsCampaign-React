// React
import React from 'react';
import PropTypes from 'prop-types';

// components
import Header from './Header';
import SummaryChart from './SummaryChart';
import KeywordsChart from './KeywordsChart';

// Import
import adwordsData from '../adwordsData';

class App extends React.Component {

	state = {
			adwordsData: adwordsData
	}

	componentWillMount() {
		this.setState({adwordsData});
	}


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
							<div className="col-md-12">
								<h2 className="text-center"><i className="fas fa-chart-pie"></i> Summary Chart</h2>
							</div>
							{SummaryDisplay}
					</div>
					<div className="row">
						<div className="col-md-12">
							<h2 className="text-center"><i className="fas fa-chart-area"></i> Keywords Chart</h2>
						</div>
						{KeywordsDisplay}
							{/* <KeywordsChart details={this.state.adwordsData} /> */}
					</div>
				</div>
			</div>
		)
	}
}

App.propTypes = {
	params: PropTypes.object
};

export default App;
