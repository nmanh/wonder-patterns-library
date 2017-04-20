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
      <PLHeading text="Ribbon normal" />
      <PLExample>
        <div className="row">
          <div className="medium-6 column">
            <div className="ribbon">
              <div className="ribbon__content">14 April 2012</div>
            </div>
          </div>
        </div>
      </PLExample>
      <PLCodeBlock>
        {`
          <div className="ribbon">
            <div className="ribbon__content">14 April 2012</div>
          </div>
        `}
      </PLCodeBlock>
    </PLWrapper>

    <PLWrapper>
      <PLHeading text="Ribbon translate left 23px" />
      <PLExample>
        <div className="row">
          <div className="medium-6 column">
            <div className="ribbon ribbon_translate-left_23">
              <div className="ribbon__content">14 April 2012</div>
            </div>
          </div>
        </div>
      </PLExample>
      <PLCodeBlock>
        {`
          <div className="ribbon">
            <div className="ribbon__content">14 April 2012</div>
          </div>
        `}
      </PLCodeBlock>
    </PLWrapper>
  </div>
);
