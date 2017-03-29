import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

export const Divider = () => (
  <div>
    <PLSectionHeading text="Divider" />
    <PLWrapper>
      <PLHeading text="Horizontal divider" />
      <PLExample>
        <div className="divider" />
      </PLExample>
      <PLCodeBlock>
        {`
          <div className="divider" />
        `}
      </PLCodeBlock>
    </PLWrapper>
  </div>
);
