import React from 'react';
import { ButtonDropdown } from '../general-components';

const Divider = () => (
  <div className="divider mblg" />
)

const Answers = () => (
  <div>
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
              <img src="https://unsplash.it/40" className="img-circle mrmd" alt="" />
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
        <a href="#">
          {/* Answer's content */}
          <span className="txt-body-color">Chiều 29/3, trao đổi với Zing.vn, ông Đoàn Ngọc Hải, Phó chủ tịch UBND quận 1, cho biết đoàn kiểm tra liên ngành của quận 1 sẽ tạm dừng hoạt động dẹp vỉa hè. Việc này sẽ được các phường tiếp tục đẩy mạnh, quyết liệt trong thời gian tới...</span>Xem thêm
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
    <Divider />
  </div>
)

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <h3 className="mtlg mblg">You answered these questions</h3>
        {[1, 2, 3, 4, 5].map((item) => (
          <Answers key={item} />
        ))}
      </div>
    )
  }
}

export default MainContent;
