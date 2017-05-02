import React, { Component, PropTypes } from 'react';
import Footer from './../components/Footer'

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderContent(){
		return (
			<div className="AboutUsContent">
					
			</div>
		);
	}
	render(){
		return (
			<div style={{height: '100vh'}}>
				<div className="About Page Light">
					<div className="Content">
						{this.renderContent()}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

About.propTypes = {};

About.contextTypes = {
	actions: PropTypes.object
};

About.childContextTypes = {
	actions: PropTypes.object
};
