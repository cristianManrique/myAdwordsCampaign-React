import React from 'react';

class Connexion extends React.Component {

	goToApp = event => {
		event.preventDefault();
		// On récupère le pseudo
		const pseudo = this.boxInput.value;
		// On change d'url
		this.context.router.transitionTo(`/box/${pseudo}`);
	}

	render() {
		return (
			<div className="connexionBox">
				<form className="connexion" onSubmit={(e) => this.goToApp(e)} >
					<h3>Adwords Campaign</h3>
					<input type="text" placeholder="nom utilisateur" pattern="[A-Za-z-]{1,}" required ref={(input) => {this.boxInput = input}} />
					<button type="submit">GO</button>
				</form>
			</div>
		)
	}

	static contextTypes = {
		router: React.PropTypes.object
	};
}


export default Connexion;
