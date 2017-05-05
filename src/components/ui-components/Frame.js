import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

export const Frame = () => (
  <div>
    <PLSectionHeading text="Frame" />
    <PLWrapper>
      <PLHeading text="Horizontal divider" />
      <PLExample>
        <div className="frame">
          <div className="frame__header">
            <div className="frame__title">Frame title</div>
          </div>
          <div className="frame__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </PLExample>
      <PLCodeBlock>
        {`
          <div className="frame">
            <div className="frame__header">
              <div className="frame__title">Frame title</div>
            </div>
            <div className="frame__body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        `}
      </PLCodeBlock>
    </PLWrapper>
  </div>
);
