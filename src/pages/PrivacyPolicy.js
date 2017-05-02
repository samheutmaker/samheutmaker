import React, { Component, PropTypes } from 'react';
import Footer from './../components/Footer'

export default class PrivacyPolicy extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderContent(){
		return (
			<div className="PrivacyPolicyContent">
				<div className="Content">
					
				</div>
			</div>
		);
	}
	render(){
		return (
			<div className="PrivacyPolicy">
				{this.renderContent()}
				<Footer />
			</div>
		);
	}
}

PrivacyPolicy.propTypes = {};

PrivacyPolicy.contextTypes = {
	actions: PropTypes.object
};

PrivacyPolicy.childContextTypes = {
	actions: PropTypes.object
};
