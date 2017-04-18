import React from 'react';
import 'flickity/dist/flickity.css';
import Flickity from 'flickity/dist/flickity.pkgd.js';
import $ from 'jquery';
import { ButtonDropdown } from '../general-components';
import { Loader } from './Loader';

const PostHasAnswer = ({ openAnswerModal }) => (
  <article className="mbxlg">
    <div>
      {/* Tags */}
      <div className="mbmd lf lf_no-wrap">

        <div className="lf_full-space">
          <div className="lf lf_align-middle">
            <div className="mrmd">
              <button className="btn btn_primary mrsm mbxs">Kỹ năng nghe</button>
              <button className="btn btn_primary mrsm mbxs">IELTS 5.0</button>
            </div>
            <ul className="lf_full-space list-inline txt-muted mbxs">
              <li>1 trả lời</li>
              <li>18 lượt xem</li>
            </ul>
          </div>
        </div>

        <div>
          <button className="btn btn_special mbxs">Q&A</button>
        </div>

      </div>
    </div>

    <div>
      {/* Questions */}
      <a href="#" className="txt-body-color">
        <h2 className="mblg">Ông Đoàn Ngọc Hải tạm dừng xuống đường dẹp vỉa hè quận 1?</h2>
      </a>
    </div>

    <div>
      {/* Answer's author */}
      <div className="lf lf_align-middle mbmd">
        <div className="lf_full-space">
          <a href="#" className="lf lf_align-middle">
            <img src="https://unsplash.it/60" className="img-circle mrmd" alt="" />
            <div>
              <ul className="list-unstyled txt-body-color">
                <li>Chibi, Học viên Yola</li>
                <li>Trả lời 1 tiếng trước</li>
              </ul>
            </div>
          </a>
        </div>

        <a href="#">
          <i className="fa fa-user-plus fa-2x" />
        </a>
      </div>
    </div>

    <div className="mbmd">
      <a
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          openAnswerModal();
        }}>
        {/* Answer's content */}
        <span className="txt-body-color">Chiều 29/3, trao đổi với Zing.vn, ông Đoàn Ngọc Hải, Phó chủ tịch UBND quận 1, cho biết đoàn kiểm tra liên ngành của quận 1 sẽ tạm dừng hoạt động dẹp vỉa hè. Việc này sẽ được các phường tiếp tục đẩy mạnh, quyết liệt trong thời gian tới.<br />
        "Tôi tạm thời dừng, việc dẹp vỉa hè được quận giao lại cho các phường tăng tốc, quyết liệt làm. Những vụ việc nào nóng, khó, anh em địa bàn làm không được thì tôi sẽ đích thân xuống giải quyết", ông Hải nói...</span>Xem thêm
      </a>
    </div>

    <div>
      {/* Question actions */}
      <div className="lf lf_align-middle">

        <div className="lf_full-space">
          <button className="btn btn_warning mrmd">Upvote 2</button>
          <a href="#" className="txt-muted mrmd">Downvote</a>
          <a href="#" className="txt-muted mrmd">Bình luận (4)</a>
        </div>

        <ButtonDropdown />
      </div>
    </div>
  </article>
)

const PostNoAnswer = () => (
  <article className="mbxlg">
    <div>
      {/* Tags */}
      <div className="lf lf_align-middle mbmd">
        <div className="mrlg">
          <button className="btn btn_primary mrsm mbxs">Kỹ năng nghe</button>
          <button className="btn btn_primary mrsm mbxs">IELTS 5.0</button>
        </div>
        <ul className="lf_full-space list-inline txt-muted mbxs">
          <li>1 trả lời</li>
          <li>18 lượt xem</li>
        </ul>
        <button className="btn btn_special mbxs">Q&A</button>
      </div>
    </div>

    <div>
      {/* Questions */}
      <a href="#" className="txt-body-color">
        <h2 className="mblg">Tóc Tiên diện đầm gợi cảm thu hút truyền thông quốc tế ở Seoul?</h2>
      </a>
    </div>


    <div>
      {/* Question actions */}
      <div className="lf lf_align-middle">

        <div className="lf_full-space">
          <button className="btn btn_warning mrmd">Trả lời</button>
          <a href="#" className="txt-muted mrmd">Downvote</a>
        </div>

        <ButtonDropdown />
      </div>
    </div>
  </article>
);

class LiveSession extends React.Component {
  componentDidMount() {
    // flickity carousel
    new Flickity( this.slider, {
      // options
      cellAlign: 'left',
      freeScroll: true,
      pageDots: false,
      groupCells: true,
      contain: true,
    });
  }

  render() {
    return (
      <div className="mbxlg">
        <div className="lf lf_no-wrap lf_align-middle mbmd">
          <div className="lf_full-space mrmd">
            <span className="txt-large">Suggessted by Wonder</span>
          </div>

          <div>
            <button className="btn btn_special">Live session</button>
          </div>
        </div>

        <div ref={ref => this.slider = ref}>
          {[1, 2, 3, 4, 5, 6].map(item => (
            <a href="#" className="txt-center" key={item} style={{display: 'block', width: '200px'}}>
              <img
                src="https://unsplash.it/100"
                className="img-circle mbmd"
                alt=""
                width="100"
                height="100"
              />
              <div className="txt-bold txt-body-color">Ms. Lisa Chan</div>
              <div className="txt-body-color">Communicate English<br />on</div>
              <div className="txt-bold txt-uppercase txt-body-color">IELTS 6.0 Writing</div>
              <div>now broadcasting</div>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

class QuizTest extends React.Component {
  componentDidMount() {
    // flickity carousel
    new Flickity( this.slider, {
      // options
      cellAlign: 'left',
      freeScroll: true,
      pageDots: false,
      groupCells: true,
      contain: true,
    });
  }

  render() {
    return (
      <div className="mbxlg">
        <div className="lf lf_no-wrap lf_align-middle mbmd">
          <div className="lf_full-space mrmd">
            <span className="txt-large">Suggessted by Wonder</span>
          </div>

          <div>
            <button className="btn btn_special">Quiz/Test</button>
          </div>
        </div>

        <div ref={(ref) => this.slider = ref}>
          {[1, 2, 3, 4, 5, 6].map(item => (
            <div className="panel txt-center mlsm mrsm" key={item}>
              <div className="panel__heading">
                <h3 className="panel__title">Quiz Test</h3>
              </div>
              <div className="panel__body">
                <p>
                  Vocabulary
                  <br />
                  SAT Words
                </p>
                <button className="btn btn_warning-bordered">Take Quiz</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const Divider = () => (
  <div className="divider mbxlg" />
);

  export const MainContent = ({ openAnswerModal, openAskModal }) => (
  <div>
    <ul id="nav-tab" className="nav-tab mblg">
      <li role="presentation" className="nav-tab__item active">
        <a href="#" className="nav-tab__link">Dành cho bạn</a>
      </li>
      <li role="presentation" className="nav-tab__item">
        <a href="#" className="nav-tab__link">Nội dung HOT</a>
      </li>
      <li role="presentation" className="nav-tab__item">
        <a href="#" className="nav-tab__link">Cần trả lời</a>
      </li>
    </ul>

    <a
      href="#"
      className="lf lf_align-middle lf_no-wrap mblg"
      onClick={(e) => {
        e.preventDefault();
        openAskModal();
      }}
    >
      <img src="https://unsplash.it/60x60" className="img-circle mrlg" alt=""/>
      <span>Hi Linh! Click vào đây để đặt câu hỏi nhé</span>
    </a>

    <Divider />

    <PostHasAnswer openAnswerModal={openAnswerModal} />
    <Divider />
    <PostHasAnswer openAnswerModal={openAnswerModal} />
    <Divider />

    <LiveSession />
    <Divider />

    <PostHasAnswer openAnswerModal={openAnswerModal} />
    <Divider />

    <PostNoAnswer />
    <Divider />

    <QuizTest />
    <Divider />

    <PostNoAnswer />
    <Divider />

    <Loader />

  </div>
);
