import React, { Component, PropTypes } from 'react';
import Footer from './../components/Footer'

export default class TermsOfService extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderContent(){
		return (
			<div className="TermsOfServiceContent">
				<div className="Content">
				</div>
			</div>
		);
	}
	render(){
		return (
			<div className="TermsOfService">
				{this.renderContent()}
				<Footer />
			</div>
		);
	}
}

TermsOfService.propTypes = {};

TermsOfService.contextTypes = {
	actions: PropTypes.object
};

TermsOfService.childContextTypes = {
	actions: PropTypes.object
};
