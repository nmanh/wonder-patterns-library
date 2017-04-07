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

  toggleMenu(e) {
    e.preventDefault();
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  hideMenu() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    return (
      <a
        href="#"
        className="btn-dropdown"
        onClick={this.toggleMenu}
        onBlur={this.hideMenu}
      >
        <div className="btn btn_reset">
          <i className="fa fa-ellipsis-h fa-2x txt-primary-color" />
        </div>
        <div className={this.state.isMenuOpen ? 'btn-dropdown__menu open' : 'btn-dropdown__menu'}>
          <ul className="list-unstyled">
            <li className="btn-dropdown__menu-item">
              <button
                className="btn btn_reset"
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <i className="fa fa-bookmark-o"></i> Bookmark
              </button>
            </li>
            <li className="btn-dropdown__menu-item">
              <button
                className="btn btn_reset"
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <i className="fa fa-pencil"></i> Edit
              </button>
            </li>
            <li className="btn-dropdown__menu-item">
              <button
                className="btn btn_reset"
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <i className="fa fa-trash"></i> Delete
              </button>
            </li>
          </ul>
        </div>
      </a>
    );
  }
}
