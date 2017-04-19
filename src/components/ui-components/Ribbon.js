import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

export const Ribbon = () => (
  <div>
    <PLSectionHeading text="Ribbon" />
    <PLWrapper>
      <PLHeading text="Ribbon" />
      <PLExample>
        <div className="ribbon">
          <div className="ribbon__content">14 April 2012</div>
        </div>
      </PLExample>
      <PLCodeBlock>
        {`

          `}
        </PLCodeBlock>
      </PLWrapper>
  </div>
);
