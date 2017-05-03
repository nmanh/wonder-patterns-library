import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Overview from './Overview';
import HomePage from './homepage';
import Blog from './blog';
import UserDetail from './user-detail';
import Vocab from './vocab';
import QuizTest from './quiz-test';
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
        {
          name: 'Vocab',
          url: `${props.match.url}/vocab`,
        },
        {
          name: 'Quize/Test',
          url: `${props.match.url}/quiz-test`,
        },
      ],
    };
  }

  // componentDidMount() {
  //   this.props.hideMainNav();
  // }

  render() {
    const { match, location } = this.props;

    return (
      <div>
        {/homepage|blog|user-detail|vocab/.test(location.pathname) || (
          <PLSubNav dataSource={this.state.nav} />
        )}
        <Switch>
          <Route path={`${match.url}/homepage`} component={HomePage} />
          <Route path={`${match.url}/blog`} component={Blog} />
          <Route path={`${match.url}/user-detail`} component={UserDetail} />
          <Route path={`${match.url}/vocab`} component={Vocab} />
          <Route path={`${match.url}/quiz-test`} component={QuizTest} />
          <Route path={match.url} component={Overview} />
        </Switch>
      </div>
    )
  }
}

export default ExamplePages;
