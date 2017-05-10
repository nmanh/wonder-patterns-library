import React from 'react';
import 'flickity/dist/flickity.css';
import Flickity from 'flickity/dist/flickity.pkgd.js';
import { ButtonDropdown } from '../general-components';
import { Loader } from './Loader';

const PostHasAnswer = ({ openAnswerModal, isShowComment }) => (
  <article className="medium-ptmd medium-pbmd ptxlg pbxlg hover">
    <div>
      {/* Tags */}
      <div className="mbmd lf">

        <div className="lf_full-space">
          <div className="lf lf_align-middle">
            <div className="mrmd">
              <button className="wtag mrsm">Kỹ năng nghe</button>
              <button className="wtag mrsm">IELTS 5.0</button>
            </div>
          </div>
        </div>

        <div>
          <button className="btn btn_special">Q&A</button>
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
      <a href="#" className="lf mbmd">
        <div className="lf_no-gas">
          <img src="https://unsplash.it/40" className="img-circle mrmd" alt="" />
        </div>
        <div>
          <ul className="list-unstyled txt-body-color">
            <li className="mbsm txt-ellipsis-2-lines">Phan Hương, Là con gái cả của ông trùm Phan Quân. Trước đây, ngoài sở thích phi dao, Hương là cô gái biết nghe lời bố mẹ và ít khi làm “Người phán xử” phải phiền lòng.</li>
            <li>Trả lời 1 tiếng trước</li>
          </ul>
        </div>
      </a>
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
          <button className="btn mrmd txt-small">Upvote | 9</button>
          <button className="btn btn_reset txt-small txt-muted mrmd">Downvote</button>
          <button className="btn btn_reset txt-small txt-muted mrmd">Bình luận</button>
        </div>

        <ButtonDropdown />
      </div>
    </div>

    {isShowComment && (
      <div className="panel panel_special-border mtmd">
        <div className="panel__body">

          <div className="lf mbmd">
            <a href="#" className="mrsm lf_no-gas">
              <img src="https://unsplash.it/40" className="img-circle" alt=""/>
            </a>
            <div className="lf_full-space mrsm">
              <textarea rows="1" className="f__control"></textarea>
            </div>
            <div>
              <button className="btn">Submit</button>
            </div>
          </div>

          <div className="lf mbmd">
            <div className="mrsm lf_no-gas">
              <img src="https://unsplash.it/40" className="img-circle" alt=""/>
            </div>
            <div className="lf_full-space mrsm">
              <h4 className="txt-body-color mb-reset">John Doe</h4>
              <div className="txt-small mbxs">12/12/2012</div>
              <div className="mbxs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eaque unde dolorem magnam.</div>

              <button className="btn btn_reset txt-warning-color mrmd">Upvote</button>
              <button className="btn btn_reset mrmd">Downvote</button>
              <button className="btn btn_reset mrmd">Report</button>
            </div>
          </div>

          <div className="lf">
            <a href="#" className="mrsm lf_no-gas">
              <img src="https://unsplash.it/40" className="img-circle" alt=""/>
            </a>
            <div className="lf_full-space mrsm">
              <a href="#">
                <h4 className="txt-body-color mb-reset">John Doe</h4>
              </a>
              <div className="txt-small mbxs">12/12/2012</div>
              <div className="mbxs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eaque unde dolorem magnam.</div>

              <button className="btn btn_reset txt-warning-color mrmd">Upvote</button>
              <button className="btn btn_reset mrmd">Downvote</button>
              <button className="btn btn_reset mrmd">Report</button>
            </div>
          </div>

          <div className="txt-right">
            <a href="#">More comments</a>
          </div>

        </div>
      </div>
    )}
  </article>
)

// class TagHorizontalList extends React.Component {
//   componentDidMount() {
//     new Flickity(this.tagList, {
//       freeScroll: true,
//       contain: true,
//       prevNextButtons: false,
//       pageDots: false,
//       // resize: false,
//       percentPosition: false,
//     });
//   }
//
//   render() {
//     return (
//       <div className="mrlg lf_full-space" ref={(ref) => this.tagList = ref}>
//         <button className="wtag mrsm">Kỹ năng nghe</button>
//         <button className="wtag mrsm">IELTS 5.0</button>
//         <button className="wtag mrsm">Very loooooooooooong tag</button>
//         <button className="wtag mrsm">Jessica Alba</button>
//         <button className="wtag mrsm">Adam Levine</button>
//       </div>
//     )
//   }
// }

const PostNoAnswer = () => (
  <article className="medium-ptmd medium-pbmd ptxlg pbxlg hover">
    <div>
      {/* Tags */}
      <div className="lf lf_align-middle mbmd">
        <div className="mrlg lf_full-space list-h-scroll no-scrollbar">
          <button className="wtag mrsm">Kỹ năng nghe</button>
          <button className="wtag mrsm">IELTS 5.0</button>
          <button className="wtag mrsm">Very loooooooooooong tag</button>
          <button className="wtag mrsm">Jessica Alba</button>
          <button className="wtag mrsm">Adam Levine</button>
        </div>
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
          <button className="btn btn_reset txt-muted mrmd">Trả lời</button>
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
      <div className="medium-ptmd medium-pbmd ptxlg pbxlg">
        <div className="lf lf_align-middle mbmd">
          <div className="lf_full-space mrmd">
            <span className="txt-large">Suggessted by Wonder</span>
          </div>

          <div>
            <button className="btn btn_special">Live session</button>
          </div>
        </div>

        <div ref={ref => this.slider = ref}>
          {[1, 2, 3, 4, 5, 6].map(item => (
            <a href="#" className="txt-center" key={item} style={{display: 'block', width: '180px'}}>
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
      <div className="medium-ptmd medium-pbmd ptxlg pbxlg">
        <div className="lf lf_align-middle mbmd">
          <div className="lf_full-space mrmd">
            <span className="txt-large">Suggessted by Wonder</span>
          </div>

          <div>
            <button className="btn btn_special">Quiz/Test</button>
          </div>
        </div>

        <div className="carousel">
          <div ref={(ref) => this.slider = ref}>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div className="panel txt-center mlsm mrsm" key={item} style={{width: '200px'}}>
                <div className="panel__heading">
                  <h3 className="panel__title">Quiz Test</h3>
                </div>
                <div className="panel__body">
                  <p>
                    Vocabulary
                    <br />
                    SAT Words
                  </p>
                  <button className="btn btn_warning">Take Quiz</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const Divider = ({ helpCls }) => (
  <div className={helpCls ? `divider ${helpCls}` : 'divider'} />
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
      <li role="presentation" className="nav-tab__item">
        <a href="#" className="nav-tab__link">Bookmarks</a>
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
      <img src="https://unsplash.it/40x60" className="img-circle mrlg" alt=""/>
      <span>Hi Linh! Click vào đây để đặt câu hỏi nhé</span>
    </a>

    <Divider />

    <PostHasAnswer openAnswerModal={openAnswerModal} isShowComment />
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
    <Divider helpCls="mbxlg" />

    <Loader />

  </div>
);
