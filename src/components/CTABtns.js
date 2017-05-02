import React, { Component, PropTypes } from 'react';
import Btn from './Btn'

export default class CTABtns extends Component{
	constructor(props) {
		super(props);
		this.state = {};
	}
	render(){
		let type = (this.props.type) ? this.props.type.toLowerCase() : null;

		switch(type) {
			case 'europa':
				return (
		  			<div className="CTABtnContainer" style={this.props.style || {}}>
			  			<a href="">
							<Btn canClick={true} onClick={() => {}}>
								<i className="icon icon-dis-github" />
								GitHub
							</Btn>
						</a>

						<a href="https://www.nothing.com/docs/europa/">
							<Btn canClick={true} onClick={() => {}}>
								<i className="icon icon-dis-docs" />
								Documentation
							</Btn>
						</a>				
					</div>
		  		);
			break;

			default:
				return (
		  			<div className="CTABtnContainer" style={this.props.style || {}}>
			  			<a href="#demo">
							<Btn canClick={true} onClick={() => this.context.actions.toggleShowEmailSignUp()}>
								Request a Demo
							</Btn>
						</a>

						<a href="/signup">
							<Btn canClick={true} onClick={() => {}}>
								Sign Up Now
							</Btn>
						</a>				
					</div>
		  		);
		}
	}
}

CTABtns.contextTypes = {
	actions: PropTypes.object
};

CTABtns.propTypes = {
	style: PropTypes.object,
	type: PropTypes.string
};
