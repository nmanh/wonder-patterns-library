import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

export const Media = () => (
  <div>
    <PLSectionHeading text="Media" />
    <PLWrapper>
      <PLHeading text="Media" />
      <PLExample>
        <div className="media">
          <a href="#" className="media__content">
            <div className="media__head">
              <img src="https://unsplash.it/100x100" className="img-circle" alt=""/>
            </div>
            <div className="media__body">
              <div className="txt-large">Joe Dohn</div>
              <div className="txt-muted">0 Người theo dõi 54 Lượt xem</div>
              <div>Lorem ipsum dolor sit amet, consectetur.</div>
            </div>
          </a>
          <button className="media__addon">
            <i className="fa fa-ellipsis-h fa-lg"></i>
          </button>
        </div>
      </PLExample>
      <PLCodeBlock>
        {`
          <div className="media">
            <a href="#" className="media__content">
              <div className="media__head">
                <img src="https://unsplash.it/100x100" className="img-circle" alt=""/>
              </div>
              <div className="media__body">
                <div className="txt-large">Joe Dohn</div>
                <div className="txt-muted">0 Người theo dõi 54 Lượt xem</div>
                <div>Lorem ipsum dolor sit amet, consectetur.</div>
              </div>
            </a>
            <button className="media__addon">
              <i className="fa fa-ellipsis-h fa-lg"></i>
            </button>
          </div>
        `}
      </PLCodeBlock>
    </PLWrapper>
  </div>
);
