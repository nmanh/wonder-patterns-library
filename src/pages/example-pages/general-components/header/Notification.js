import React from 'react';

class BadgeDropdown extends React.Component {
  componentDidMount() {
    window.addEventListener('click', this.props.hideDropdown);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.props.hideDropdown);
  }

  render() {
    return (
      <div className="badge__dropdown shadow mtmd">
        <div className="badge__dropdown-header lf">
          <span className="lf_full-space">Notification</span>
          <button className="btn btn_reset txt-primary-color">Mark all as read</button>
        </div>

        <div className="badge__dropdown-body">
          {[1, 2, 3, 4, 5].map(item => (
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

export default class Notification extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowDropdown: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  toggleDropdown(e) {
    e.preventDefault();
    this.setState({ isShowDropdown: !this.state.isShowDropdown });
    console.log('show');
  }

  hideDropdown() {
    this.setState({ isShowDropdown: false });
    console.log('hide');
  }

  render() {
    return (
      <div
        className="badge mrxlg"
        onClick={e => e.stopPropagation()}
      >
        <a
          href="#"
          className="badge__icon txt-white"
          onClick={this.toggleDropdown}
        >
          <i className="fa fa-bell fa-lg" />
        </a>
        <div className="badge__addon">1</div>

        {this.state.isShowDropdown && (
          <BadgeDropdown hideDropdown={this.hideDropdown} />
        )}

      </div>
    )
  }
}
