import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

const firstNameKey = 'firstName';
const lastNameKey = 'lastName';
const companyNameKey = 'companyName';
const emailKey = 'email';

export default class EmailSignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillUnmount() {
		this.context.actions.resetSignUpState()
	}
	renderMsg(){
		let error = this.props.signUpError;
		if(error) {
			return (
				<div className="Error">
					<p>{error}</p>
				</div>
			);
		}

		if(this.props.signUpSuccess) {
			return (
				<div className="Success">
					<p>Thank you for your inquery.</p>
					<p>We will be in touch shortly.</p>
				</div>
			);
		}

	}
	render(){
		return (
			<div className="EmailSignUp">
				<div className="Names Row">
					<div className="FlexColumn">
						<label><span className="SalmonColor">*</span>First Name</label>
						<input autoFocus onChange={(e) => this.context.actions.updateSignUpField(firstNameKey, e, false)}/>
					</div>
					<div className="FlexColumn">
						<label><span className="SalmonColor">*</span>Last Name</label>
						<input onChange={(e) => this.context.actions.updateSignUpField(lastNameKey, e, false)}/>
					</div>
				</div>
				<div className="FlexColumn Row">
					<label><span className="SalmonColor">*</span>Company Name</label>
					<input onChange={(e) => this.context.actions.updateSignUpField(companyNameKey, e, false)}/>
				</div>
				<div className="FlexColumn Row">
					<label><span className="SalmonColor">*</span>Email</label>
					<input onChange={(e) => this.context.actions.updateSignUpField(emailKey, e, false)}/>
				</div>

				<div className="FlexColumn Row" style={{marginTop: '10px', alignItems: 'center'}}>
					<div className="Btn" onClick={() => this.context.actions.sendSignUpRequest()}>
						Send Demo Request
					</div>
				</div>

				{this.renderMsg()}
			</div>
		);
	}
}

EmailSignUp.contextTypes = {
	actions: PropTypes.object
};