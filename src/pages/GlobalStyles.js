import React from 'react';
import { Link, Route } from 'react-router-dom';
import {
  Typography,
  Buttons,
} from '../components/global-styles';

const GlobalStyles = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={match.url}>Overview</Link>
      </li>
      <li>
        <Link to={`${match.url}/typography`}>Typography</Link>
      </li>
      <li>
        <Link to={`${match.url}/buttons`}>Buttons</Link>
      </li>
    </ul>
    <h1>Global Styles</h1>

    <Route exact path={`${match.url}/typography`} component={Typography} />
    <Route exact path={`${match.url}/buttons`} component={Buttons} />
    <Route exact path={match.url} render={() => (
      <h2>Overview</h2>
    )} />
  </div>
);

export default GlobalStyles;
