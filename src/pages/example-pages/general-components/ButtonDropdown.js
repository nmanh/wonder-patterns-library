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
          {['Thank', 'Bookmark', 'Edit', 'Delete'].map(item => (
            <button
              key={item}
              className="btn-dropdown__item"
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              >
                {item}
              </button>
          ))}
        </div>
      </a>
    );
  }
}
