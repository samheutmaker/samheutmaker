import React, { Component, PropTypes } from 'react';

import * as Actions from './../actions/Actions'
import ActionBinder from './../util/ActionBinder'
import NPECheck from './../util/NPECheck'

export default class Layout extends Component {
  constructor(props) {
    super(props);
    let isRoot = NPECheck(this.props, 'location/pathname', null) == '/';
    this.state = {
      isRoot: isRoot,
   	  showCoverSlide: true,
      showMobileNav: false, 
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile.bind(this));
    this.checkMobile();
  }
  getChildContext(){
    let actions = [Actions];

  	return {
      actions: ActionBinder(actions, this)
    };
  }
  checkMobile(e){
    var width = document.body.clientWidth;

    if(width >= 960 && this.state.isMobile) {
      this.setState({
        isMobile: false,
        showMobileNav: false,
        
      })
    }

    if(width <= 960 && !this.state.isMobile) {
      this.setState({
        isMobile: true,
        showMobileNav: false,
      })
    }
  }
  renderHead() {
  	return (
  		<head>
  			<title>React Static Boilerplate</title>
        <link rel="shortcut icon" href="/static/images/favicon.ico"/>
  			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    		<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500" rel="stylesheet"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
		  </head>
  	);
  }

  render() {
		return (
			<html>
				{this.renderHead()}
				<body>
					{React.cloneElement(this.props.children, {...this.state}, null)}
		      <script src='/static/js/bundle.js' />
				</body>
			</html>
		);
	}
}

Layout.propTypes = {};

Layout.childContextTypes = {
  actions: PropTypes.object
};
