import React from 'react';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import $ from 'jquery';
import { ButtonDropdown } from '../general-components';
import { Loader } from './Loader';

const PostHasAnswer = ({ openAnswerModal }) => (
  <article className="mbxlg">
    <div>
      {/* Tags */}
      <div className="lf lf_align-middle mbmd">
        <button className="btn btn_primary mrsm">Kỹ năng nghe</button>
        <button className="btn btn_primary mrlg">IELTS 5.0</button>
        <ul className="lf_full-space list-inline txt-muted">
          <li>1 trả lời</li>
          <li>18 lượt xem</li>
        </ul>
        <button className="btn btn_special">Q&A</button>
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
        onMouseDown={(evt) => {
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
        <button className="btn btn_primary mrsm">Kỹ năng nghe</button>
        <button className="btn btn_primary mrlg">IELTS 5.0</button>
        <ul className="lf_full-space list-inline txt-muted">
          <li>1 trả lời</li>
          <li>18 lượt xem</li>
        </ul>
        <button className="btn btn_special">Q&A</button>
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
  constructor() {
    super();

    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  componentDidMount() {
    // initial carousel
    $(this.slider).slick({
      slidesToShow: 3,
      centerPadding: '16px',
      infinite: false,
      arrows: false,
    });
  }

  goToPrevSlide() {
    $(this.slider).slick('slickPrev');
  }

  goToNextSlide() {
    $(this.slider).slick('slickNext');
  }

  render() {
    return (
      <div className="mbxlg">
        <div className="lf lf_align-middle mbmd">
          <div className="lf_full-space">
            <img src="https://unsplash.it/40" className="img-circle mrmd" alt="" />
            <span className="txt-large">Suggessted by Wonder</span>
          </div>
          <button className="btn btn_special">Live session</button>
        </div>

        <div className="carousel">
          <div ref={(ref) => this.slider = ref}>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <a href="#" className="txt-center" key={item}>
                <img
                  src="https://unsplash.it/100"
                  className="img-circle mbmd"
                  alt=""
                />
                <div className="txt-bold txt-body-color">Ms. Lisa Chan</div>
                <div className="txt-body-color">Communicate English<br />on</div>
                <div className="txt-bold txt-uppercase txt-body-color">IELTS 6.0 Writing</div>
                <div>now broadcasting</div>
              </a>
            ))}
          </div>
          <button
            className="carousel__narrow carousel__narrow_prev"
            ref={(ref) => this.narrowPrev = ref}
            onMouseDown={this.goToPrevSlide}
          >
            <i className="fa fa-chevron-left fa-lg" />
          </button>
          <button
            className="carousel__narrow carousel__narrow_next"
            ref={(ref) => this.narrowNext = ref}
            onMouseDown={this.goToNextSlide}
          >
            <i className="fa fa-chevron-right fa-lg" />
          </button>
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
      className="lf lf_align-middle mblg"
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

    <Loader />

  </div>
);
