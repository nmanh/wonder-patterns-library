import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

class Example extends React.Component {
  render() {
    return (
      <PLWrapper>
        <PLHeading text="Example" />
        <PLExample>
          <div style={{backgroundColor: '#ccc'}}>
            <nav className="nav">
              <a href="#" className="nav__link active">
                <i className="fa fa-home" /> Trang chủ
              </a>
              <a href="#" className="nav__link">
                <i className="fa fa-comments" /> Blog
              </a>
              <a href="#" className="nav__link">
                <i className="fa fa-video-camera" /> Live session
              </a>
              <a href="#" className="nav__link">
                <i className="fa fa-edit" /> Learn center
              </a>
            </nav>
          </div>
        </PLExample>
        <PLCodeBlock>
          {`

          `}
        </PLCodeBlock>
      </PLWrapper>
    );
  }
}

export const Nav = () => (
  <div>
    <PLSectionHeading text="Nav" />
    <Example />
  </div>
);
