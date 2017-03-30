import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './pages/GlobalStyles';
import UIComponents from './pages/UIComponents';
import CSSUtilities from './pages/CSSUtilities';
import HomePage from './pages/example-pages/homepage';
import './assets/styles/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="pt-main-nav">
            <li className="pt-main-nav__item">
              <Link to="/" className="pt-main-nav__link">Getting Started</Link>
            </li>
            <li className="pt-main-nav__item">
              <Link to="/global-styles" className="pt-main-nav__link">Global Styles</Link>
            </li>
            <li className="pt-main-nav__item">
              <Link to="/ui-components" className="pt-main-nav__link">UI Components</Link>
            </li>
            <li className="pt-main-nav__item">
              <Link to="/css-utilities" className="pt-main-nav__link">CSS Utilities</Link>
            </li>
            <li className="pt-main-nav__item">
              <Link to="/pages/homepage" className="pt-main-nav__link">Homepage</Link>
            </li>
          </ul>

          <div className="row">
            <div className="small-12 column">
              <Route exact path="/" component={Home}/>
              <Route path="/global-styles" component={GlobalStyles}/>
              <Route path="/ui-components" component={UIComponents}/>
              <Route path="/css-utilities" component={CSSUtilities}/>
            </div>
          </div>

          <Route path="/pages/homepage" component={HomePage}/>

        </div>
      </Router>
    );
  }
}

export default App;
