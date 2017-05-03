import React from 'react';
import {
  Modal,
  ButtonDropdown,
} from '../general-components';

export const AnswerModal = ({ isModalOpen, onRequestClose }) => (
  <Modal
    isModalOpen={isModalOpen}
    onRequestClose={onRequestClose}
  >
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

    <div>
      {/* Answer's content */}
      <p>
        Chiều 29/3, trao đổi với Zing.vn, ông Đoàn Ngọc Hải, Phó chủ tịch UBND quận 1, cho biết đoàn kiểm tra liên ngành của quận 1 sẽ tạm dừng hoạt động dẹp vỉa hè. Việc này sẽ được các phường tiếp tục đẩy mạnh, quyết liệt trong thời gian tới.<br />
        "Tôi tạm thời dừng, việc dẹp vỉa hè được quận giao lại cho các phường tăng tốc, quyết liệt làm. Những vụ việc nào nóng, khó, anh em địa bàn làm không được thì tôi sẽ đích thân xuống giải quyết", ông Hải nói.
        Chiều 29/3, trao đổi với Zing.vn, ông Đoàn Ngọc Hải, Phó chủ tịch UBND quận 1, cho biết đoàn kiểm tra liên ngành của quận 1 sẽ tạm dừng hoạt động dẹp vỉa hè. Việc này sẽ được các phường tiếp tục đẩy mạnh, quyết liệt trong thời gian tới.
      </p>
      <p>
        "Tôi tạm thời dừng, việc dẹp vỉa hè được quận giao lại cho các phường tăng tốc, quyết liệt làm. Những vụ việc nào nóng, khó, anh em địa bàn làm không được thì tôi sẽ đích thân xuống giải quyết", ông Hải nói.
        Chiều 29/3, trao đổi với Zing.vn, ông Đoàn Ngọc Hải, Phó chủ tịch UBND quận 1, cho biết đoàn kiểm tra liên ngành của quận 1 sẽ tạm dừng hoạt động dẹp vỉa hè. Việc này sẽ được các phường tiếp tục đẩy mạnh, quyết liệt trong thời gian tới.
      </p>
      <img src="https://unsplash.it/800x400" alt="" className="img-rounded mbmd" />
      <p>
        "Tôi tạm thời dừng, việc dẹp vỉa hè được quận giao lại cho các phường tăng tốc, quyết liệt làm. Những vụ việc nào nóng, khó, anh em địa bàn làm không được thì tôi sẽ đích thân xuống giải quyết", ông Hải nói.
      </p>
    </div>

    <div className="lf lf_align-middle">

      <div className="lf_full-space">
        <button className="btn btn_warning mrmd">Upvote 2</button>
        <a href="#" className="txt-muted mrmd">Downvote</a>
        <a href="#" className="txt-muted mrmd">Bình luận (4)</a>
      </div>

      <ButtonDropdown />
    </div>
  </Modal>
)
