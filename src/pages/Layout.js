import React, { Component, PropTypes } from 'react';

import * as Actions from './../actions/Actions'
import EmailSignUp from './../components/EmailSignUp'
import ActionBinder from './../util/ActionBinder'
import NPECheck from './../util/NPECheck'
import PullCommands from './../components/PullCommands'
import CTABtns from './../components/CTABtns'
import Menu from './../components/Menu'
import DetectBrowser from './../util/DetectBrowser'

export default class Layout extends Component {
  constructor(props) {
    super(props);
    let isRoot = NPECheck(this.props, 'location/pathname', null) == '/';
    this.state = {
      isRoot: isRoot,
   	  showCoverSlide: true,
      showMobileNav: false, 
      showProductsMenu: false,
      showPullCommands: false,
   	  showEmailSignUp: false,
      signUpXHR: false,
      signUpSuccess: false,
      signUpError: '',
      emailForm: {
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
      },
    };
  }
  componentDidMount() {
    // Resize
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
          showPullCommands: false,
          showProductsMenu: false
          
        })
      }

      if(width <= 960 && !this.state.isMobile) {
        this.setState({
          isMobile: true,
          showMobileNav: false,
          showPullCommands: false,
          showProductsMenu: false
        })
      }

    }
  renderScreenCover(){
      let email = this.state.showEmailSignUp;
      let commands = this.state.showPullCommands;

      let commandsContent = (
        <div>
          <PullCommands dark={true} style={{margin: '1rem 0'}}/>
          <CTABtns type="europa"/>
        </div>
      );

      let emailContent = (
        <EmailSignUp {...this.state} />
      );

      if(email || commands) {
        return (
          <div className="ScreenCover">
            <div className="CoverContainer">
              <div className="IconContainer">
                <i className="icon icon-dis-close" onClick={() => Actions.closeAll.call(this)}/>
              </div>
              	{(email) ?  emailContent : commandsContent}
            </div>
          </div>
        );
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
  renderNavigation(){
    let className;
    let xClassName = 'custom-toggle mobile-nav-button';
    let logoLight = 'Logo', logoDark = 'Logo';

    if(this.state.showCoverSlide) {
      logoDark += ' Hidden';
    } else {
      logoLight += ' Hidden';
      className = 'Dark';
    }

    if(this.state.showMobileNav) {
      className = "Dark Open";
      xClassName += ' x';

      logoLight = 'Logo';
      logoDark = 'Logo  Hidden';
    }

    let navButtons = [
      { // Hidden unless mobile
        text: 'Login',
        href: '/login'
      },
      { // Hidden unless mobile
        text: 'Sign Up',
        href: '/signup'
      },
      { 
        text: 'Home',
        id: 'homeAnchor'
      },
      { 
        text: 'Services',
        id: 'servicesAnchor'
      },
      {
        text: 'Pricing',
        href: '/pricing'
      },
      {
        text: 'About',
        id: '/about'
      },
    ];

    return (
      <nav className={className}>
        <div className="NavContent">

          <div className="NavButtons">
            {navButtons.map((button, i) => {
              return (
                <div className="NavButton" key={i}>
                  {
                    button.href ? <a href={button.href} target={button.target}>{button.text}</a> : <a id={button.id}>{button.text}</a>
                  }
                </div>
              );
            })}
          </div>

           <span href="#" className={xClassName} onClick={() => Actions.toggleMobileNav.call(this)}>
              <s className="bar"></s>
              <s className="bar"></s>
            </span>

        </div>
      </nav>
    );
  }
  render() {
		return (
			<html>
				{this.renderHead()}
				<body>
					{this.renderNavigation()}
					{this.renderScreenCover()}
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
