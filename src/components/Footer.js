import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderLinks(){
		return (
			<div className="Links">
				<a href="https://www.facebook.com/nothing" target="_blank">
					<img src="/static/images/facebook-logo.svg" />
				</a>
				<a href="https://twitter.com/nothing" target="_blank">
					<img src="/static/images/twitter-logo.svg" />
				</a>
			</div>
		);
	}
	renderFeedback(){
		return (
			<div className="Feedback">
				<div className="Flex1 FlexColumn">
					<span>Questions, comments, feedback?</span>
					<a href="mailto:ping@nothing.com">ping@nothing.com</a>
				</div>
			</div>
		);
	}
	renderCopyright(){
		return (
			<div className="Copyright">&copy;2017. nothing Inc. All trademarks are the property of their respective owners.</div>
		);
	}
	render(){
		return (
			<footer>
				<div className="Content">
					
					<div className="Flex2 FlexColumn JustifyCenter AlignCenter">
						<div className="FooterLinks">
							<a href="blog.samheutmaker.com" target="_blank">
								Blog
							</a>
							<a href="/terms-of-service">
								Terms of Service
							</a>
							<a href="/privacy-policy">
								Privacy Policy
							</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

Footer.propTypes = {};

Footer.contextTypes = {
	actions: PropTypes.object
};

Footer.childContextTypes = {
	actions: PropTypes.object
};
