import React, { Component, PropTypes } from 'react';
import Footer from './../components/Footer'

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderContent(){
		return (
			<div className="ProductsPage">
				<div className="Content">
					<h2>Home Page</h2>
				</div>
			</div>
		);
	}
	render(){
		return (
			<div className="Home">
				{this.renderContent()}
				<Footer />
			</div>
		);
	}
}

HomePage.propTypes = {};

HomePage.contextTypes = {
	actions: PropTypes.object
};

HomePage.childContextTypes = {
	actions: PropTypes.object
};
