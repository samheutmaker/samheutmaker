import React from 'react'
import { Route } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

export default (
  <Route component={Layout}>
 	 <Route component={Home} path="/" />
 	 <Route component={About} path="/about" />
 	 <Route component={PrivacyPolicy} path="/privacy-policy" />
 	 <Route component={TermsOfService} path="/terms-of-service" /> 	 
  </Route>
);
