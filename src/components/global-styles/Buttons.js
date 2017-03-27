import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

const ButtonTags = () => (
  <PLWrapper>
    <PLHeading text="Button Tags" />
    <PLExample>
      <a className="btn" href="#" role="button">Link</a>
      <button className="btn">Button</button>
      <input className="btn" type="button" value="Input" />
      <input className="btn" type="submit" value="Submit" />
    </PLExample>
    <PLCodeBlock>
      {`
        <a className="btn" href="#" role="button">Link</a>
        <button className="btn">Button</button>
        <input className="btn" type="button" value="Input" />
        <input className="btn" type="submit" value="Submit" />
      `}
    </PLCodeBlock>
  </PLWrapper>
);

export const Buttons = () => (
  <div>
    <PLSectionHeading text="Buttons" />
    <ButtonTags />
  </div>
);
