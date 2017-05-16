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
        <div className="mbmd">
          <a href="#" className="wtag">IELTS 5.0</a>
        </div>
        <div>
          <div className="wtag-2">Q&A</div>
        </div>
      </PLExample>
      <PLCodeBlock>
        {`
          <a href="#" className="wtag">IELTS 5.0</a>
        `}
      </PLCodeBlock>
    </PLWrapper>
  </div>
);
