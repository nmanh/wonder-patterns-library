import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

const Heading = () => (
  <PLWrapper>
    <PLHeading text="Heading" />
    <PLExample>
      <h1>h1 I will recommend Ooooh to everyone I know!</h1>
      <h2>h2 I will recommend Ooooh to everyone I know!</h2>
      <h3>h3 I will recommend Ooooh to everyone I know!</h3>
      <h4>h4 I will recommend Ooooh to everyone I know!</h4>
      <h5>h5 I will recommend Ooooh to everyone I know!</h5>
      <h6>h6 I will recommend Ooooh to everyone I know!</h6>
    </PLExample>
    <PLCodeBlock>
      {`
        <h1>I will recommend Ooooh to everyone I know!</h1>
        <h2>I will recommend Ooooh to everyone I know!</h2>
        <h3>I will recommend Ooooh to everyone I know!</h3>
        <h4>I will recommend Ooooh to everyone I know!</h4>
        <h5>I will recommend Ooooh to everyone I know!</h5>
        <h6>I will recommend Ooooh to everyone I know!</h6>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const BodyCopy = () => (
  <PLWrapper>
    <PLHeading text="Body copy" />
    <PLExample>
      <p>Trong chiến dịch lập lại trật tự vỉa hè, sáng 23/2, tại địa chỉ số 25C đường Nguyễn Bình Khiêm (phường Bến Nghé), chiếc ôtô biển xanh và biển trắng đỗ chiếm vỉa hè đã bị <a href="#">lực lượng kiểm tra xử lý</a>, yêu cầu đưa xe về phường. Sáng 2/3 những chiếc xe bốn bánh từng đỗ trước cửa công ty nay đã được đưa vào bên trong.</p>
    </PLExample>
    <PLCodeBlock>
      {`
        <p>...</p>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const Unordered = () => (
  <PLWrapper>
    <PLHeading text="Unordered" />
    <PLExample>
      <ul>
        <li>I will recommend Ooooh to everyone I know!</li>
        <li>I will recommend Ooooh to everyone I know!</li>
        <li>I will recommend Ooooh to everyone I know!</li>
      </ul>
    </PLExample>
    <PLCodeBlock>
      {`
        <ul>
          <li>I will ...</li>
        </ul>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const Ordered = () => (
  <PLWrapper>
    <PLHeading text="Ordered" />
    <PLExample>
      <ol>
        <li>I will recommend Ooooh to everyone I know!</li>
        <li>I will recommend Ooooh to everyone I know!</li>
        <li>I will recommend Ooooh to everyone I know!</li>
      </ol>
    </PLExample>
    <PLCodeBlock>
      {`
        <ol>
          <li>I will ...</li>
        </ol>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

export const Typography = () => (
  <div>
    <PLSectionHeading text="Typography" />

    <Heading />
    <BodyCopy />
    <Ordered />
    <Unordered />

  </div>
);
