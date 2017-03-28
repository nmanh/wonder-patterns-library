import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import {
  Typography,
  Buttons,
  Form,
} from '../components/global-styles';
import { PLSubNav } from '../components/patterns-library';

class GlobalStyles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {
          name: 'Overview',
          url: props.match.url,
        },
        {
          name: 'Typography',
          url: `${props.match.url}/typography`,
        },
        {
          name: 'Buttons',
          url: `${props.match.url}/buttons`,
        },
        {
          name: 'Form',
          url: `${props.match.url}/form`,
        },
      ],
    };
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <PLSubNav dataSource={this.state.nav} />
        <h1>Global Styles</h1>

        <Switch>
          <Route path={`${match.url}/typography`} component={Typography} />
          <Route path={`${match.url}/buttons`} component={Buttons} />
          <Route path={`${match.url}/form`} component={Form} />
          <Route path={match.url} render={() => (
            <h2>Overview</h2>
          )} />
        </Switch>
      </div>
    )
  }
}

export default GlobalStyles;
