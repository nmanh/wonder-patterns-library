import React from 'react';
import { Header } from '../general-components';

export default class QuizTest extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="row mblg">
          <div className="small-12 column">
            <div>
              <span className="txt-fw-normal txt-large">Vocabulary quiz: </span>
              <span>See how good you are with this set of 10 quizes!</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="small-12 column">
            <div className="panel panel_special">
              <div className="panel__body ptxlg pbxlg">
                <div className="row mblg">
                  <div className="small-12 medium-5 column">
                    <div className="panel mbmd">
                      <div className="panel__body">
                        <h4>Accomplish means to:</h4>
                        <ul className="list-unstyled">
                          <li className="mbsm">
                            <div className="f__radio">
                              <label>
                                <input type="radio" name="radio"/> Break apart
                              </label>
                            </div>
                          </li>
                          <li className="mbsm">
                            <div className="f__radio txt-primary-color">
                              <label>
                                <input type="radio" name="radio"/> Calm down
                              </label>
                            </div>
                          </li>
                          <li className="mbsm">
                            <div className="f__radio txt-danger-color">
                              <label>
                                <input type="radio" name="radio"/> Carry out
                              </label>
                            </div>
                          </li>
                          <li className="mbsm">
                            <div className="f__radio">
                              <label>
                                <input type="radio" name="radio"/> Fend for
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="txt-primary-color mbsm">Correct!</div>
                    <div className="txt-danger-color">Oops, try it again...</div>
                  </div>
                  <div className="small-12 medium-7 column">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptatibus recusandae laboriosam ipsum asperiores, ipsa dicta, omnis tempora reiciendis itaque provident delectus hic quod eligendi, autem saepe quis animi ea!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut quidem placeat praesentium quasi modi doloremque accusamus eius, earum eaque.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="small-12 column">
                    <ul className="list-breadcrumb txt-right">
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset active">1</button>
                      </li>
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset">2</button>
                      </li>
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset">3</button>
                      </li>
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset">4</button>
                      </li>
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset">5</button>
                      </li>
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset">6</button>
                      </li>
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset">7</button>
                      </li>
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset">8</button>
                      </li>
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset">9</button>
                      </li>
                      <li className="list-breadcrumb__item">
                        <button className="btn btn_reset">10</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
