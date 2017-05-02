import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import OneColumn from './OneColumn'

export default class ThreeColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render(){
		return (
			<div className="ThreeColumn" id={this.props.id}>
				{this.props.content.map((content, i) => {
					return (
						<OneColumn key={i} 
								   head={content.head} 
								   text={content.text} 
								   imageUrl={content.imageUrl} />
					);
				})}
			</div>
		);
	}
}

ThreeColumn.propTypes = {
	id: PropTypes.string.isRequired,
	content: PropTypes.array.isRequired,
};