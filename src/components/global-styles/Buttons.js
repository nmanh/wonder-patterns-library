import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

const ButtonTags = () => (
  <PLWrapper>
    <PLHeading text="Button Tags" />
    <PLExample>
      <a className="btn mrsm" href="#" role="button">Link</a>
      <button className="btn mrsm">Button</button>
      <input className="btn mrsm" type="button" value="Input" />
      <input className="btn mrsm" type="submit" value="Submit" />
    </PLExample>
    <PLCodeBlock>
      {`
        <a className="btn" href="#" role="button">Link</a>
        <button className="btn">Button</button>
        <input className="btn" type="button" value="Input" />
        <input className="btn" type="submit" value="Submit" />
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const Options = () => (
  <PLWrapper>
    <PLHeading text="Options" />
    <PLExample>
      <button className="btn btn_primary mrsm">Primary</button>
      <button className="btn btn_success mrsm">Success</button>
      <button className="btn btn_info mrsm">Info</button>
      <button className="btn btn_warning mrsm">Warning</button>
      <button className="btn btn_danger mrsm">Danger</button>
      <button className="btn btn_special">Special</button>
    </PLExample>
    <PLCodeBlock>
      {`
        <button className="btn btn_primary">Primary</button>
        <button className="btn btn_success">Success</button>
        <button className="btn btn_info">Info</button>
        <button className="btn btn_warning">Warning</button>
        <button className="btn btn_danger">Danger</button>
        <button className="btn btn_special">Special</button>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const Sizes = () => (
  <PLWrapper>
    <PLHeading text="Sizes" />
    <PLExample>
      <div className="mbsm">
        <button className="btn btn_large mrsm">Large button</button>
        <button className="btn btn_primary btn_large">Large button</button>
      </div>
      <div className="mbsm">
        <button className="btn mrsm">Default button</button>
        <button className="btn btn_primary">Default button</button>
      </div>
      <div className="mbmd">
        <button className="btn btn_small mrsm">Small button</button>
        <button className="btn btn_primary btn_small">Small button</button>
      </div>
      <div className="mbsm">
        <button className="btn btn_block mbsm">Block level</button>
        <button className="btn btn_primary btn_block">Block level</button>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <button className="btn btn_large">Large button</button>
        <button className="btn">Default button</button>
        <button className="btn btn_small">Small button</button>
        <button className="btn btn_block">Block level</button>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const Active = () => (
  <PLWrapper>
    <PLHeading text="Active" />
    <PLExample>
      <button className="btn btn_primary active mrsm">Small button</button>
      <button className="btn active">Small button</button>
    </PLExample>
    <PLCodeBlock>
      {`
        <button className="btn btn_primary active">Small button</button>
        <button className="btn active">Small button</button>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const Disable = () => (
  <PLWrapper>
    <PLHeading text="Disable" />
    <PLExample>
      <button disabled title="Disabled" className="btn btn_primary mrsm">Button disable</button>
      <button disabled title="Disabled" className="btn">Button disable</button>
    </PLExample>
    <PLCodeBlock>
      {`
        <button disabled title="Disabled" className="btn btn_primary">Button disable</button>
        <button disabled title="Disabled" className="btn">Button disable</button>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

class ButtonDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
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
      <PLWrapper>
        <PLHeading text="Button Dropdown" />
        <PLExample>
          <div className="btn-group">
            <button
              className="btn btn-group__btn"
              onMouseDown={this.toggleMenu}
              onBlur={this.hideMenu}
            >
              Button <i className="fa fa-caret-down"></i>
            </button>
            <ul className={this.state.isMenuOpen ? 'btn-group__menu open' : 'btn-group__menu'}>
              <li className="btn-group__menu-item"><a href="#"><i className="fa fa-pencil"></i> Edit</a></li>
              <li className="btn-group__menu-item"><a href="#"><i className="fa fa-trash"></i> Delete</a></li>
            </ul>
          </div>
        </PLExample>
        <PLCodeBlock>
          {`
            <div className="btn-group">
              <button className="btn btn-group__btn">Button<i className="fa fa-caret-down"></i></button>
              <ul className="btn-group__menu">
                <li className="btn-group__menu-item"><a href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                <li className="btn-group__menu-item"><a href="#"><i className="fa fa-trash"></i> Delete</a></li>
              </ul>
            </div>
          `}
        </PLCodeBlock>
      </PLWrapper>
    )
  }
}

export const Buttons = () => (
  <div>
    <PLSectionHeading text="Buttons" />
    <ButtonTags />
    <Options />
    <Sizes />
    <Active />
    <Disable />
    <ButtonDropdown />
  </div>
);
