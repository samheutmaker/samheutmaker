import React, { Component, PropTypes } from 'react';
import CopyToClipboard from './../util/CopyToClipboard'

export default class PullCommands extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCopied: false,
		};
	}
	copyCommands(){
  		this.setState({
  			isCopied: true
  		}, () => {
  			CopyToClipboard(document.getElementById('copyCommands'));
  		});
  	}
	render(){
		return (
  			<div className="CommandContainer" style={this.props.style || {}}>
  				<div className={(this.props.dark) ? "Pull Dark" : "Pull"}>
  					Pull the latest Europa image to get started.
  				</div>
	  			<div className={(this.props.dark) ? "Commands Dark" : "Commands"}>
	  				<div>
	  					$ <span id="copyCommands">docker pull nothing/europa:latest</span>
	  				</div>
	  				<span className={(this.state.isCopied) ? 'Copy Complete' : 'Copy'} onClick={() => this.copyCommands()}>
	  					{(this.state.isCopied) ? 'Command Copied!' : 'Copy Command' }
	  				</span>
	  			</div>
  			</div>
  		);
	}
}

PullCommands.propTypes = {
	dark: PropTypes.bool,
	style: PropTypes.object
};