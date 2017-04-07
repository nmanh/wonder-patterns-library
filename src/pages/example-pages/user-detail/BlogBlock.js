import React from 'react';
import { ButtonDropdown } from '../general-components';

const BlogHasThumbnail = () => (
  <article className="panel mbxlg">
    <div className="panel__body">
      <div>
        {/* Tags */}
        <div className="lf lf_align-middle mbmd">
          <div className="mrlg">
            <button className="btn btn_primary mrsm mbxs">Kỹ năng nghe</button>
            <button className="btn btn_primary mrsm mbxs">IELTS 5.0</button>
          </div>
          <ul className="lf_full-space list-inline txt-muted mbxs">
            <li>18 lượt xem</li>
          </ul>
        </div>
      </div>

      {/* Blog thumbnail */}
      <div className="mbmd">
        <a href="#">
          <img src="https://unsplash.it/800/450" className="img-rounded" alt="" />
        </a>
      </div>

      <div>
        {/* Blog title */}
        <a href="#" className="txt-body-color">
          <h2 className="mblg">Ông Đoàn Ngọc Hải tạm dừng xuống đường dẹp vỉa hè quận 1</h2>
        </a>
      </div>

      <div>
        {/* Blog's author */}
        <div className="lf lf_align-middle mbmd">
          <div className="lf_full-space">
            <a href="#" className="lf lf_align-middle">
              <img src="https://unsplash.it/60" className="img-circle mrmd" alt="" />
              <div>
                <ul className="list-unstyled txt-body-color">
                  <li>Tuan Pham, IELTS 8.0</li>
                  <li>Upvoted 154</li>
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
          {/* Blog's content */}
          <span className="txt-body-color">Chiều 29/3, trao đổi với Zing.vn, ông Đoàn Ngọc Hải, Phó chủ tịch UBND quận 1, cho biết đoàn kiểm tra liên ngành của quận 1 sẽ tạm dừng hoạt động dẹp vỉa hè. Việc này sẽ được các phường tiếp tục đẩy mạnh, quyết liệt trong thời gian tới.<br />
          "Tôi tạm thời dừng, việc dẹp vỉa hè được quận giao lại cho các phường tăng tốc, quyết liệt làm. Những vụ việc nào nóng, khó, anh em địa bàn làm không được thì tôi sẽ đích thân xuống giải quyết", ông Hải nói...</span>Xem thêm
        </a>
      </div>

      <div>
        {/* Blog actions */}
        <div className="lf lf_align-middle">

          <div className="lf_full-space">
            <button className="btn btn_warning mrmd">Upvote 2</button>
            <a href="#" className="txt-muted mrmd">Downvote</a>
            <a href="#" className="txt-muted mrmd">Bình luận (4)</a>
          </div>

          <ButtonDropdown />
        </div>
      </div>
    </div>
  </article>
)

const Blog = () => (
  <article className="panel mbxlg">
    <div className="panel__body">
      <div>
        {/* Tags */}
        <div className="lf lf_align-middle mbmd">
          <div className="mrlg">
            <button className="btn btn_primary mrsm mbxs">Kỹ năng nghe</button>
            <button className="btn btn_primary mrsm mbxs">IELTS 5.0</button>
          </div>
          <ul className="lf_full-space list-inline txt-muted mbxs">
            <li>18 lượt xem</li>
          </ul>
        </div>
      </div>

      <div>
        {/* Blog title */}
        <a href="#" className="txt-body-color">
          <h2 className="mblg">Messi, Ronaldinho sánh vai ở đội hình 8x vĩ đại nhất lịch sử bóng đá</h2>
        </a>
      </div>

      <div>
        {/* Blog's author */}
        <div className="lf lf_align-middle mbmd">
          <div className="lf_full-space">
            <a href="#" className="lf lf_align-middle">
              <img src="https://unsplash.it/60" className="img-circle mrmd" alt="" />
              <div>
                <ul className="list-unstyled txt-body-color">
                  <li>Tuan Pham, IELTS 8.0</li>
                  <li>Upvoted 154</li>
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
          {/* Blog's content */}
          <span className="txt-body-color">Football Republic bình chọn đội hình những cầu thủ 8x thành công nhất lịch sử. Trong đó có hàng loạt cái tên đã và đang chơi cho Barca như Messi, Ronaldinho, Xavi,...</span>Xem thêm
        </a>
      </div>

      <div>
        {/* Blog actions */}
        <div className="lf lf_align-middle">

          <div className="lf_full-space">
            <button className="btn btn_warning mrmd">Upvote 2</button>
            <a href="#" className="txt-muted mrmd">Downvote</a>
            <a href="#" className="txt-muted mrmd">Bình luận (4)</a>
          </div>

          <ButtonDropdown />
        </div>
      </div>
    </div>
  </article>
)

class BlogBlock extends React.Component {
  render() {
    return (
      <div>
        <div className="lf lf_align-middle mtlg mblg">
          <h3 className="mrmd mb-reset">My Blog</h3>
          <button className="btn btn_warning-bordered">
            <i className="fa fa-plus" /> Create blog
          </button>
        </div>

        <BlogHasThumbnail />
        <Blog />
        <BlogHasThumbnail />
      </div>
    )
  }
}

export default BlogBlock;
