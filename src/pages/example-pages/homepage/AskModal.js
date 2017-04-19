import React from 'react';
import {
  Modal,
} from '../general-components';

class ModalFooter extends React.Component {
  render() {
    return (
      <div className="lf lf_align-middle">
        <div className="lf_full-space">
          <div className="f__checkbox f__checkbox_inline">
            <label>
              <input type="checkbox"/> Ask anonymouse
            </label>
          </div>
        </div>

        <div>
          <button
            className="btn btn_reset mrmd"
            onClick={this.props.onRequestClose}
            >Huỷ</button>
        </div>

        <div>
          <button className="btn btn_warning">Đặt câu hỏi</button>
        </div>

      </div>
    );
  }
}

export class AskModal extends React.Component {
  render() {
    const {
      isModalOpen,
      onRequestClose
    } = this.props;

    return (
      <Modal
        isModalOpen={isModalOpen}
        onRequestClose={onRequestClose}
        modalFooter={<ModalFooter onRequestClose={onRequestClose} />}
      >
        <form className="f">
          <div className="mbmd">
            <label htmlFor="title">Câu hỏi</label>
            <input
              type="text"
              className="f__control"
              placeholder="How can I improve English's writing skill?"
              id="title"
              ref={(ref) => this.askInput = ref}
            />
          </div>

          <div className="mbmd">
            <label htmlFor="extra">Mô tả thêm</label>
            <textarea className="f__control" rows="4" id="extra" />
          </div>

          <div className="mbmd">
            <label htmlFor="tags">Tags:</label>
            <input type="text" className="f__control" placeholder="IELTS, Grammar..." id="tags" />
          </div>
        </form>
      </Modal>
    );
  }
}
