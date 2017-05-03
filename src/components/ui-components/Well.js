import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

export const Well = () => (
  <div>
    <PLSectionHeading text="Well" />
    <PLWrapper>
      <PLHeading text="Well" />
      <PLExample>
        <div className="well">
          content inside
        </div>
      </PLExample>
      <PLCodeBlock>
        {`

        `}
      </PLCodeBlock>
    </PLWrapper>
  </div>
);
