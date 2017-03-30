import React from 'react';

export class ButtonDropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      isDropdownOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  hideMenu() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    return (
      <div className="btn-dropdown">
        <button
          className="btn btn_reset"
          onMouseDown={this.toggleMenu}
          onBlur={this.hideMenu}
        >
          <i className="fa fa-ellipsis-h fa-2x txt-primary-color" />
        </button>
        <ul className={this.state.isMenuOpen ? 'btn-dropdown__menu open' : 'btn-dropdown__menu'}>
          <li className="btn-dropdown__menu-item">
            <a href="#"><i className="fa fa-bookmark-o"></i> Bookmark</a>
          </li>
          <li className="btn-dropdown__menu-item">
            <a href="#"><i className="fa fa-pencil"></i> Edit</a>
          </li>
          <li className="btn-dropdown__menu-item">
            <a href="#"><i className="fa fa-trash"></i> Delete</a>
          </li>
        </ul>
      </div>
    );
  }
}
