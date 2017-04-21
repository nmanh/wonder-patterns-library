import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

const BadgeDefault = () => (
  <PLWrapper>
    <PLHeading text="Badge default" />
    <PLExample>

      <div className="badge">
        <div className="badge__icon">
          <i className="fa fa-bell fa-lg" />
        </div>
        <div className="badge__addon">1</div>
      </div>

    </PLExample>
    <PLCodeBlock>
      {`
        <div className="badge">
          <div className="badge__icon">
            <i className="fa fa-bell fa-lg" />
          </div>
          <div className="badge__addon">1</div>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

class BadgeDropdownList extends React.Component {
  componentDidMount() {
    window.addEventListener('click', this.props.hideDropDown);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.props.hideDropDown);
  }

  render() {
    return (
      <div className="badge__dropdown txt-left">
        <div className="badge__dropdown-header lf">
          <span className="lf_full-space">Notification</span>
          <button className="btn btn_reset txt-primary-color">Mark all as read</button>
        </div>

        <div className="badge__dropdown-body">
          {[1, 2, 3, 4, 5, 6].map(item => (
            <a href="#" className="badge__dropdown-item" key={item}>
              <div className="badge__dropdown-thumbnail">
                <img src="https://unsplash.it/30" className="img-circle" alt=""/>
              </div>
              <div className="badge__dropdown-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </a>
          ))}
        </div>

      </div>
    )
  }
}

class BadgeDropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowDropdown: false,
    }

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this);
  }

  toggleDropDown(e) {
    e.preventDefault();
    this.setState({ isShowDropdown: !this.state.isShowDropdown });
  }

  hideDropDown() {
    this.setState({ isShowDropdown: false });
  }

  render() {
    return (
      <PLWrapper>
        <PLHeading text="Badge dropdown" />
        <PLExample>

          <div className="txt-center">
            <div
              className="badge"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <a
                href="#"
                className="badge__icon"
                onClick={this.toggleDropDown}
              >
                <i className="fa fa-bell fa-lg" />
              </a>
              <div className="badge__addon">1</div>

              {this.state.isShowDropdown && (
                <BadgeDropdownList hideDropDown={this.hideDropDown} />
              )}

            </div>
          </div>

        </PLExample>
        <PLCodeBlock>
          {`
            <div className="badge">
              <a href="#" className="badge__icon">
                <i className="fa fa-bell fa-lg" />
              </a>
              <div className="badge__addon">1</div>

              <div className="badge__dropdown">
                <div className="badge__dropdown-header lf">
                  <span className="lf_full-space">Notification</span>
                  <button className="btn btn_reset txt-primary-color">Mark all as read</button>
                </div>

                <div className="badge__dropdown-body">
                  <a href="#" className="badge__dropdown-item">
                    <div className="badge__dropdown-thumbnail">
                      <img src="https://unsplash.it/30" className="img-circle" alt=""/>
                    </div>
                    <div className="badge__dropdown-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                  </a>
                </div>

              </div>
            </div>
          `}
        </PLCodeBlock>
      </PLWrapper>
    )
  }
}

export const Badge = () => (
  <div>
    <PLSectionHeading text="Badge" />
    <BadgeDefault />
    <BadgeDropdown />
  </div>
);
