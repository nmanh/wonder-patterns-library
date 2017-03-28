import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import {
  Media,
  Panel,
  Modal,
  NavTab,
} from '../components/ui-components';
import { PLSubNav } from '../components/patterns-library';

class UIComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {
          name: 'Overview',
          url: props.match.url,
        },
        {
          name: 'Media',
          url: `${props.match.url}/media`,
        },
        {
          name: 'Modal',
          url: `${props.match.url}/modal`,
        },
        {
          name: 'Nav Tab',
          url: `${props.match.url}/nav-tab`,
        },
      ]
    }
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <PLSubNav dataSource={this.state.nav} />
        <h1>UI Components</h1>

        <Switch>
          <Route path={`${match.url}/media`} component={Media} />
          <Route path={`${match.url}/panel`} component={Panel} />
          <Route path={`${match.url}/modal`} component={Modal} />
          <Route path={`${match.url}/nav-tab`} component={NavTab} />
          <Route path={match.url} render={() => (
            <h2>Overview</h2>
          )} />
        </Switch>
      </div>
    )
  }
}

export default UIComponents;
