import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

export const NavTabV = () => (
  <div>
    <PLSectionHeading text="Nav tab vertical" />
    <PLWrapper>
      <PLHeading text="Nav tab vertical" />
      <PLExample>
        <ul className="nav-tab-v">
          <li className="nav-tab-v__item active">
            <a href="#" className="nav-tab-v__link">
              <span className="nav-tab-v__text">Text text text</span>
              <span className="nav-tab-v__addon">32</span>
            </a>
          </li>
          <li className="nav-tab-v__item">
            <a href="#" className="nav-tab-v__link">
              <span className="nav-tab-v__text">Text text text</span>
              <span className="nav-tab-v__addon">32</span>
            </a>
          </li>
          <li className="nav-tab-v__item">
            <a href="#" className="nav-tab-v__link">
              <span className="nav-tab-v__text">Text text text</span>
              <span className="nav-tab-v__addon">32</span>
            </a>
          </li>
          <li className="nav-tab-v__item">
            <a href="#" className="nav-tab-v__link">
              <span className="nav-tab-v__text">Text text text</span>
              <span className="nav-tab-v__addon">32</span>
            </a>
          </li>
        </ul>
      </PLExample>
      <PLCodeBlock>
        {`
          <div className="divider" />
        `}
      </PLCodeBlock>
    </PLWrapper>
  </div>
);
