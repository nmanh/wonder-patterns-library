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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Getting Started</Link></li>
            <li><Link to="/global-styles">Global Styles</Link></li>
            <li><Link to="/ui-components">UI Components</Link></li>
            <li><Link to="/css-utilities">CSS Utilities</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/global-styles" component={GlobalStyles}/>
          <Route path="/ui-components" component={UIComponents}/>
          <Route path="/css-utilities" component={CSSUtilities}/>
        </div>
      </Router>
    );
  }
}

export default App;