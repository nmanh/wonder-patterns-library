import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PLSubNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: props.dataSource,
    };
  }

  render() {
    return (
      <ul className="pt-sub-nav">
        {this.state.nav.map((item, index) => (
          <li className="pt-sub-nav__item mrsm" key={item.name}>
            <Link to={item.url} className="pt-sub-nav__link">{item.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
