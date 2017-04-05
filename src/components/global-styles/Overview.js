import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLDescription,
} from '../patterns-library';

export const Overview = () => (
  <div>
    <PLSectionHeading title="Overview" />
    <PLWrapper>
      <PLHeading text="Overview" />
      <PLDescription>
        <div>Using <a href="https://fonts.google.com/specimen/Roboto" target="_blank">Google web font</a>: <strong>Roboto</strong></div>
        <div>Font size: <strong>16px</strong></div>
        <div>Font weight: <strong>300, 400, 700</strong></div>
      </PLDescription>
      <PLCodeBlock language="css">
        {`
          $font-sans-serif: "Roboto", sans-serif;
          $font-weight-base: 300;
          $font-weight-normal: 400;
          $font-weight-bold: 700;
        `}
      </PLCodeBlock>
    </PLWrapper>
  </div>
);
