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
  NavTabV,
  NavTabH,
  Nav,
  Divider,
  Badge,
  Frame,
  Ribbon,
  Well,
  Tag,
  Mask,
  WonderAutoSuggest,
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
          name: 'Panel',
          url: `${props.match.url}/panel`,
        },
        {
          name: 'Modal',
          url: `${props.match.url}/modal`,
        },
        {
          name: 'Nav Tab',
          url: `${props.match.url}/nav-tab`,
        },
        {
          name: 'Nav Tab Vertical',
          url: `${props.match.url}/nav-tab-v`,
        },
        {
          name: 'Nav Tab Horizontal',
          url: `${props.match.url}/nav-tab-h`,
        },
        {
          name: 'Nav',
          url: `${props.match.url}/nav`,
        },
        {
          name: 'Divider',
          url: `${props.match.url}/divider`,
        },
        {
          name: 'Badge',
          url: `${props.match.url}/badge`,
        },
        {
          name: 'Frame',
          url: `${props.match.url}/frame`,
        },
        {
          name: 'Ribbon',
          url: `${props.match.url}/ribbon`,
        },
        {
          name: 'Well',
          url: `${props.match.url}/well`,
        },
        {
          name: 'Tag',
          url: `${props.match.url}/tag`,
        },
        {
          name: 'Mask',
          url: `${props.match.url}/mask`,
        },
        {
          name: 'AutoSuggest',
          url: `${props.match.url}/auto-suggest`,
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
          <Route path={`${match.url}/nav-tab-v`} component={NavTabV} />
          <Route path={`${match.url}/nav-tab-h`} component={NavTabH} />
          <Route path={`${match.url}/nav`} component={Nav} />
          <Route path={`${match.url}/divider`} component={Divider} />
          <Route path={`${match.url}/badge`} component={Badge} />
          <Route path={`${match.url}/frame`} component={Frame} />
          <Route path={`${match.url}/ribbon`} component={Ribbon} />
          <Route path={`${match.url}/well`} component={Well} />
          <Route path={`${match.url}/tag`} component={Tag} />
          <Route path={`${match.url}/mask`} component={Mask} />
          <Route path={`${match.url}/auto-suggest`} component={WonderAutoSuggest} />
          <Route path={match.url} render={() => (
            <h2>Overview</h2>
          )} />
        </Switch>
      </div>
    )
  }
}

export default UIComponents;
