import React from 'react';
import { Header, ButtonDropdown } from '../general-components';

export default class Vocab extends React.Component {
  render() {
    return (
      <div>
        <Header
          openAskModal={this.openAskModal}
          removeMarginBottom
        />
        <div className="well mbxlg">
          <div className="row">
            <div className="small-12 medium-8 medium-offset-2 column">
              <form action="" className="f mtxlg mblg">
                <div className="f__input-group">
                  <input className="f__control f__control_ig-border f__control_ig f__control_large br-r-tr-br" placeholder="Look up words with Wonder!" />
                  <button className="btn btn_primary br-r-tl-bl"><i className="fa fa-search"></i> Look up</button>
                </div>
              </form>
            </div>

            <div className="small-12 column txt-right">
              <a href="#">Vocabulary Pratical <i className="fa fa-chevron-right"></i></a>
            </div>
          </div>
        </div>

        <div className="row mbxlg">
          <section className="small-12 column">
            <h2>Word of the day</h2>

            <div className="lf mbmd">
              <div className="lf_full-space">
                <ul className="list-inline txt-primary-color">
                  <li>
                    <div className="txt-fz-h2 txt-bold">Back</div>
                  </li>
                  <li>[bae:k]</li>
                  <li><i className="fa fa-volume-up"></i></li>
                </ul>
              </div>
              <div>
                <button className="btn btn_warning"><i className="fa fa-plus"></i> Add to list</button>
              </div>
            </div>

            <div className="panel mblg">
              <div className="panel__body">
                <div className="row">
                  <div className="small-12 medium-6 columns">
                    <div className="mbxs">Back is a noun, verb, adjective or adverb.</div>
                    <ul>
                      <li>Noun: <span className="txt-italic">back</span> (sing.), <span className="txt-italic">backs</span> (plu.)</li>
                      <li>Verb: <span className="txt-italic">back-backed-backed, backing</span></li>
                    </ul>
                  </div>
                  <div className="small-12 medium-6 columns">
                    <div className="mbxs">Lists</div>
                    <ul>
                      <li>Human body parts</li>
                      <li>Army grossary (45 words)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="small-12 medium-6 columns">
                <h4 className="mbxs">Back (n)</h4>
                <ol>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laborum fuga fugit autem cumque!</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                </ol>
              </div>
              <div className="small-12 medium-6 columns">
                <h4 className="mbxs">Examples:</h4>
                <ol>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                </ol>
              </div>

              <div className="small-12 columns">
                <div className="lf">
                  <h4 className="mrmd">Synonyms:</h4>
                  <div>
                    <span className="txt-primary-color">Tail</span>, <span className="txt-primary-color">Rear</span>, <span className="txt-primary-color">Posterior</span>, <span className="txt-primary-color">Hind</span>
                  </div>
                </div>
              </div>
              <div className="small-12 columns">
                <div className="lf">
                  <h4 className="mrmd">Synonyms:</h4>
                  <div>
                    <span className="txt-primary-color">Feature</span>, <span className="txt-primary-color">Beginning</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="txt-center mtmd">
              <button className="btn btn_reset txt-primary-color">See more meanings <i className="fa fa-chevron-down"></i></button>
            </div>

          </section>
        </div>

        <div className="well mbxlg">
          <div className="row">

            <div className="small-12 column mbmd">
              <div className="lf mbmd">
                <h2 className="lf_full-space">My lists</h2>
                <div>
                  <button className="btn btn_warning"><i className="fa fa-plus"></i> Build new list</button>
                </div>
              </div>
              <ul>
                <li>IELTS 50</li>
                <li>Marketing English</li>
              </ul>
            </div>

            <article className="small-12 medium-6 columns mbmd">
              <h2>Featured lists</h2>
              <ul>
                <li>IELTS 50</li>
                <li>Marketing English</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                <li>Lorem ipsum dolor.</li>
              </ul>
            </article>

            <article className="small-12 medium-6 columns mbmd">
              <h2>Top lists</h2>
              <ul>
                <li>IELTS 50</li>
                <li>Marketing English</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                <li>Lorem ipsum dolor.</li>
              </ul>
            </article>

            <article className="small-12 medium-6 columns mbmd">
              <h2>Test prep</h2>
              <ul>
                <li>IELTS 50</li>
                <li>Marketing English</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                <li>Lorem ipsum dolor.</li>
              </ul>
            </article>

            <article className="small-12 medium-6 columns mbmd">
              <h2>News</h2>
              <ul>
                <li>IELTS 50</li>
                <li>Marketing English</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                <li>Lorem ipsum dolor.</li>
              </ul>
            </article>

            <div className="small-12 medium-6 columns"></div>

            <div className="txt-center">
              <button className="btn btn_reset txt-primary-color">See more lists</button>
            </div>

          </div>
        </div>

        <section className="row">
          <div className="small-12 column">
            <h2>Popular vocab questions</h2>

            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <div className="divider" />
                <article className="ptxlg pbxlg hover">
                  <div>
                    {/* Tags */}
                    <div className="mbmd lf">

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
                      <span className="txt-body-color">Chiều 29/3, trao đổi với Zing.vn, ông Đoàn Ngọc Hải, Phó chủ tịch UBND quận 1.</span>
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
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}
