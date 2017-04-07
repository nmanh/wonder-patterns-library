import React from 'react';
import { ButtonDropdown } from '../general-components';

const PostNoAnswer = () => (
  <div>
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
    <div className="divider mblg" />
  </div>
);

class QuestionsBlock extends React.Component {
  render() {
    return (
      <div>
        <h3 className="mtlg mblg">You asked these questions</h3>
        <PostNoAnswer />
        <PostNoAnswer />
        <PostNoAnswer />
        <PostNoAnswer />
      </div>
    )
  }
}

export default QuestionsBlock;
