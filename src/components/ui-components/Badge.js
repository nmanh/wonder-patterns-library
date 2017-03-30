import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

export const Badge = () => (
  <div>
    <PLSectionHeading text="Badge" />
    <PLWrapper>
      <PLHeading text="Badge" />
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
  </div>
);
