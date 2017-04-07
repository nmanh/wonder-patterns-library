import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Overview from './Overview';
import HomePage from './homepage';
import Blog from './blog';
import UserDetail from './user-detail';
import { PLSubNav } from '../../components/patterns-library';

class ExamplePages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {
          name: 'Overview',
          url: props.match.url,
        },
        {
          name: 'Homepage',
          url: `${props.match.url}/homepage`,
        },
        {
          name: 'Blog',
          url: `${props.match.url}/blog`,
        },
        {
          name: 'User Detail',
          url: `${props.match.url}/user-detail`,
        },
      ],
    };
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <PLSubNav dataSource={this.state.nav} />
        <Switch>
          <Route path={`${match.url}/homepage`} component={HomePage} />
          <Route path={`${match.url}/blog`} component={Blog} />
          <Route path={`${match.url}/user-detail`} component={UserDetail} />
          <Route path={match.url} component={Overview} />
        </Switch>
      </div>
    )
  }
}

export default ExamplePages;
