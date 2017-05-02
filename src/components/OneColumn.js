import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

export default class OneColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render(){
		return (
			<div className="OneColumn" id={this.props.id} style={this.props.style || {}}>
				<div className={`TextContent ${this.props.mode}`}>
					<h3>{this.props.head}</h3>
					<p>{this.props.text}</p>
				</div>
				<div className="ImageContent">
					<img src={this.props.imageUrl} style={this.props.imgStyle || {}}/>
				</div>
			</div>
		);
	}
}

OneColumn.propTypes = {
	id: PropTypes.string,
	head: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	mode: PropTypes.string,
	style: PropTypes.object,
	imgStyle: PropTypes.object
};