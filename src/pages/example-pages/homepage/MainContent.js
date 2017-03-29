import React from 'react';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import $ from 'jquery';

const PostHasAnswer = () => (
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

    <p>
      {/* Answer's content */}
      Chiều 29/3, trao đổi với Zing.vn, ông Đoàn Ngọc Hải, Phó chủ tịch UBND quận 1, cho biết đoàn kiểm tra liên ngành của quận 1 sẽ tạm dừng hoạt động dẹp vỉa hè. Việc này sẽ được các phường tiếp tục đẩy mạnh, quyết liệt trong thời gian tới.<br />
      "Tôi tạm thời dừng, việc dẹp vỉa hè được quận giao lại cho các phường tăng tốc, quyết liệt làm. Những vụ việc nào nóng, khó, anh em địa bàn làm không được thì tôi sẽ đích thân xuống giải quyết", ông Hải nói...<a href="#">Xem thêm </a>
    </p>

    <div>
      {/* Question actions */}
      <div className="lf lf_align-middle">

        <div className="lf_full-space">
          <button className="btn btn_warning mrmd">Upvote 2</button>
          <a href="#" className="txt-muted mrmd">Downvote</a>
          <a href="#" className="txt-muted mrmd">Bình luận (4)</a>
        </div>

        <a href="#">
          <i className="fa fa-ellipsis-h fa-2x" />
        </a>
      </div>
    </div>
  </article>
);

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

        <a href="#">
          <i className="fa fa-ellipsis-h fa-2x" />
        </a>
      </div>
    </div>
  </article>
);

class LiveSession extends React.Component {
  componentDidMount() {
    $(this.slider).slick({
      centerMode: true
    });
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

        <div ref={(ref) => this.slider = ref}>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div className="txt-center">
                <img
                  src="https://unsplash.it/100"
                  className="img-circle mbmd"
                  alt=""
                  key={item}
                />
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

export const MainContent = () => (
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

    <a href="#" className="lf lf_align-middle mblg">
      <img src="https://unsplash.it/60x60" className="img-circle mrlg" alt=""/>
      <span>Hi Linh! Click vào đây để đặt câu hỏi nhé</span>
    </a>

    <Divider />

    <PostHasAnswer />
    <Divider />
    <PostHasAnswer />
    <Divider />

    <LiveSession />
    <Divider />

    <PostHasAnswer />
    <Divider />

    <PostNoAnswer />
    <Divider />

  </div>
);
