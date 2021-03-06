import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NavBar from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import Blog from './components/blog';
import About from './components/about';
import Four0Four from './components/four0four';
import './assets/sass/main.scss';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="body">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route component={Four0Four}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
