import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        {
          name: 'Suggess',
          isActive: true,
        },
        {
          name: 'Hot questions',
          isActive: false,
        },
        {
          name: 'Answers',
          isActive: false,
        },
        {
          name: 'About me',
          isActive: false,
        }
      ]
    };

    this.setTabActive = this.setTabActive.bind(this);
  }

  changeTabActive(obj, bool) {
    return Object.assign({}, obj, {
      isActive: bool,
    });
  }

  setTabActive(e) {
    this.setState({
      tabs: this.state.tabs.map((item) => {
        if (e.target.text === item.name) {
          return this.changeTabActive(item, true);
        }
        return this.changeTabActive(item, false);
      }),
    })
  }

  render() {
    return (
      <PLWrapper>
        <PLHeading text="Example" />
        <PLExample>
          <ul id="nav-tab" className="nav-tab">
            {this.state.tabs.map((item, index) => (
              <li
                key={item.name}
                role="presentation"
                className={item.isActive ? 'nav-tab__item active' : 'nav-tab__item'}
                onMouseDown={this.setTabActive}
              >
                <a
                  href="#"
                  className="nav-tab__link"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >{item.name}</a>
              </li>
            ))}
          </ul>
        </PLExample>
        <PLCodeBlock>
          {`
            <ul id="nav-tab" className="nav-tab">
              <li role="presentation" className="nav-tab__item active">
                <a href="#" className="nav-tab__link">Suggess</a>
              </li>
              <li role="presentation" className="nav-tab__item">
                <a href="#" className="nav-tab__link">Hot questions</a>
              </li>
              <li role="presentation" className="nav-tab__item">
                <a href="#" className="nav-tab__link">Answers</a>
              </li>
              <li role="presentation" className="nav-tab__item">
                <a href="#" className="nav-tab__link">About me</a>
              </li>
            </ul>
          `}
        </PLCodeBlock>
      </PLWrapper>
    );
  }
}

export const NavTab = () => (
  <div>
    <PLSectionHeading text="Nav tab" />
    <Example />
  </div>
);
