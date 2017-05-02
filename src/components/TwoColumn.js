import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

export default class TwoColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render(){
		return (
			<div className={`TwoColumn ${(this.props.reverse) ? ' Reverse' : ''}`} id={this.props.id} style={this.props.style || {}}>
				<div className={`TextContent ${this.props.mode}`}>
					<h3>{this.props.head}</h3>
					<p>{this.props.text}</p>
				</div>
				<div className={(this.props.large) ? "ImageContent Large" : "ImageContent"}>
					<img src={this.props.imageUrl} />	
				</div>
			</div>
		);
	}
}

TwoColumn.propTypes = {
	id: PropTypes.string,
	large: PropTypes.bool,
	head: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	style: PropTypes.object,
	mode: PropTypes.string,
	reverse: PropTypes.bool
};