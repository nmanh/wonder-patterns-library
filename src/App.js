import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './pages/GlobalStyles';
import UIComponents from './pages/UIComponents';
import CSSUtilities from './pages/CSSUtilities';
import ExamplePages from './pages/example-pages';
import './assets/styles/main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isShowMainNav: true,
    };

    this.showMainNav = this.showMainNav.bind(this);
    this.hideMainNav = this.hideMainNav.bind(this);
  }

  showMainNav() {
    this.setState({ isShowMainNav: true });
  }

  hideMainNav() {
    this.setState({ isShowMainNav: false });
  }

  render() {
    return (
      <Router>
        <div>

          {this.state.isShowMainNav && (
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
                <Link to="/example-pages" className="pt-main-nav__link">Example Pages</Link>
              </li>
            </ul>
          )}

          <div className="row">
            <div className="small-12 column">
              <Route exact path="/" component={Home} showMainNav={this.showMainNav} />
              <Route path="/global-styles" component={GlobalStyles} showMainNav={this.showMainNav} />
              <Route path="/ui-components" component={UIComponents} showMainNav={this.showMainNav} />
              <Route path="/css-utilities" component={CSSUtilities} showMainNav={this.showMainNav} />
            </div>
          </div>

          <Route path="/example-pages" component={ExamplePages} hideMainNav={this.hideMainNav}/>

        </div>
      </Router>
    );
  }
}

export default App;
