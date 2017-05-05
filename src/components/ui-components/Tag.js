import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

export const Tag = () => (
  <div>
    <PLSectionHeading text="Tag" />
    <PLWrapper>
      <PLHeading text="Tag" />
      <PLExample>
        <a href="#" className="wtag">IELTS 5.0</a>
      </PLExample>
      <PLCodeBlock>
        {`
          <a href="#" className="wtag">IELTS 5.0</a>          
        `}
      </PLCodeBlock>
    </PLWrapper>
  </div>
);
