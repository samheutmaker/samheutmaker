import React, { Component, PropTypes } from 'react';
import Footer from './../components/Footer'
import NPECheck from './../util/NPECheck'
import SmoothScroll from './../util/SmoothScroll'

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeContent: false,
			activeInfo: false,
			activeSection: null,
			activeCategory: null
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({activeContent: true});
		}, 300);	

		setTimeout(() => {
			this.setState({activeInfo: true});
		}, 800);	
	}
	setItem(sectionIndex, categoryIndex){
		let categories = document.getElementsByClassName('Category');
		let offset = NPECheck(categories, `${categoryIndex}/childNodes/1/childNodes/${sectionIndex}/offsetTop`, 0);

		this.setState({
			activeSection: (this.state.activeSection === sectionIndex) ? null : sectionIndex,
			activeCategory: (this.state.activeCategory === categoryIndex) ? null : categoryIndex
		}, () => {
			if(this.state.activeSection != null && this.state.activeCategory != null) {
				SmoothScroll(document.getElementById('MainContent'), offset - 5, 600)	
			}
		});
	}
	renderImage(){
		let className = "Content FullScreen";
		if(this.state.activeContent) className += ' Open';
		return (
			<div className={className}></div>
		);
	}
	renderCategory(config, categoryIndex){
		return (
			<li key={categoryIndex} className="Category">
				<h4>{config.title}</h4>
				<ul>
					{config.sections.map((section, sectionIndex) => {
						let isActive = (this.state.activeSection == sectionIndex 
									    && this.state.activeCategory == categoryIndex);
						return (
							<li key={sectionIndex} className="Project">
								<h5 onClick={() => this.setItem(sectionIndex, categoryIndex)}
								    style={(isActive) ?  {fontWeight: '600'} : {}}>{section.title}</h5>
								{(() => {
									if(isActive) {
										return section.renderContent.call(this);
									}
								}).call(this)}
							</li>
						);
					})}
				</ul>
			</li>
		);
	}
	renderContent(){
		let configs = [
			{
				title: 'DevOps & Automation',
				sections: [
					{
						title: 'Europa - An Open Source Docker Registry',
						renderContent: () => {
							return (
								<div>
									<pre>$ docker pull distelli/europa:latest</pre>
									<p> Core contributor and front-end lead. The Europa UI is built as a single page application 
										using React and a a Flux-like architecture. The backend is written in Java. Europa has 
										three versions: Community, Premium, and Enterprise. Each version comes with features aimed
										at giving developers the tools they need to get the most out of their existing container
										infrastructure, like&nbsp;<a href="https://www.distelli.com/docs/europa/europa-pipelines/">pipelines</a>,
										and webhooks, as well as being a fully fledged Docker registry. View the project on&nbsp; 
										<a href="https://www.github.com/distelli/europa">GitHub</a>. Premium and Enterprise editions are available for purchase from&nbsp;
										<a href="https://www.distelli.com/europa">distelli.com</a> and come with features like RBAC and SAML integration.
									</p>	
								</div>		
							);
						}
					},
					{
						title: 'KubeCreator - UI for Kubernetes Object Creation',
						renderContent: () => {
							return (
								<p> KubeCreator is Distelli's graphical user interface for creating Kubernetes V1 API objects. Currently it supports
								creating Deployments, Jobs, Services, and all types objects contained within each of these. KubeCreator is part of
								Distelli's Kubernetes Dashboard, and loads information directly from your cluster to prefill dropdowns with possible
								values. This makes tasks like adding a volume of type secret, or an environment variable of type fieldRef to a 
								container quick and easy as all possible values are readily available in the UI. KubeCreator simply outputs a YAML file,
								which can be sent to your cluster through Distelil. Paste existing YAML specifications and KubeCreator
								will load the object and allow further changes to be made. Use KubeCreator by creating a project in&nbsp;<a href="https:/www.distelli.com">Distelli</a>,
								or <a href="https://www.distelli.com/docs/k8s/create-a-deployment/">view the documentation</a>.
								</p>			
							);
						}
					}
				]
			},
			{
				title: 'Access Control',
				sections: [
					{
						title: 'MajorA - User Authentication & Analytics',
						renderContent: () => {
							return (
								<div>
									<pre>$ npm install --save major-a</pre>
									<p> 
										Major-A is Connect middleware for user authentication/authorization, administration, and tracking all rolled into one. It uses bcrypt to hash
										passwords and JSON web tokens for user authentication. It tracks user activities per session, with a new session beginning
										every time a user that has been inactive for 5 minutes makes a request. In addition to sessions, Major-A keeps
										an easily-interpretable running log of every users activity. It provides two Express style handlers for account creation
										and obtaining tokens. View the project on&nbsp;<a href="https://wwww.github.com/samheutmaker/major-a">GitHub.</a>
									</p>
								</div>
							);
						}
					},
					{
						title: 'Passly - RBAC as a Service',
						renderContent: () => {
							return (
								<div>
									<a href="https://www.passly.io">Passly.io</a>
									<p> 
										Major-A is Connect middleware for user authentication/authorization, administration, and tracking all rolled into one. It uses bcrypt to hash
										passwords and JSON web tokens for user authentication. It tracks user activities per session, with a new session beginning
										every time a user that has been inactive for 5 minutes makes a request. In addition to sessions, Major-A keeps
										an easily-interpretable running log of every users activity. It provides two Express style handlers for account creation
										and obtaining tokens. View the project on&nbsp;<a href="https://wwww.github.com/samheutmaker/major-a">GitHub.</a>
									</p>
								</div>
							);
						}
					}
				]
			},
			{
				title: 'React',
				sections: [
					{
						title: 'React Static Boilerplate ',
						renderContent: () => {
							return (
								<div>
									<pre>$ git clone https://www.github.com/samheutmaker/react-static-boilerplate</pre>
									<p> 
										A repository with everything needed to generate static HTML files and assets from React. This prescriptive framework
										supports SASS and babel/ES7. It uses <a href="https://github.com/markdalgleish/static-site-generator-webpack-plugin">a webpack plugin</a>
										for route configuration and serves minified and gzipped assets from an Express server. A Makefile is included with simple, single command
										build processes for both devevoplment and production. Used by <a href="/">this site</a>, <a href="https://www.passly.io">Passly's marketing site</a>,
										and <a href="https://www.distelli.com">Distelli's marketing site.</a>
									</p>
								</div>
							);
						}
					}
				]
			}
		];


		let className = "Info";
		if(this.state.activeInfo) className += ' Open';
		return (
			<div className={className} id="MainContent">
				<h3>Hello,</h3>
				<p>My name is Sam Heutmaker. I live in Seattle and work as a software engineer at <a href="https://www.distelli.com">a tech startup</a>. I work with a lot of different technologies,
				my favorites are:

				 I do a lot of geeky projects, which you can find below.</p>
				<ul>
					{configs.map((c, i) => this.renderCategory(c, i))}
				</ul>
			</div>
		);
	}
	render(){
		return (
			<div className="Home">
				{this.renderImage()}
				{this.renderContent()}
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
