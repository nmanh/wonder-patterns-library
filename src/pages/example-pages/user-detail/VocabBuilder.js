import React from 'react';
// import { ButtonDropdown } from '../general-components';

class VocabBuilder extends React.Component {
  render() {
    return (
      <div>
        <div className="lf lf_align-middle mtlg mblg">
          <h3 className="mrmd mb-reset">My Lists</h3>
          <button className="btn btn_warning-bordered">
            <i className="fa fa-plus" /> Create list
          </button>
        </div>

        <div className="panel mbxlg">
          <div className="panel__heading">
            <div className="lf lf_align-middle">
              <h3 className="lf_full-space panel__title">IELTS 100</h3>
              <a href="#"><i className="fa fa-pencil" /> Edit</a>
            </div>
          </div>

          <div className="panel__body">
            <div className="row">
              {[1, 2, 3, 4].map((item) => (
                <div className="small-6 medium-3 columns" key={item}>
                  <div className="mbmd">
                    <a href="#" className="txt-bold">consider</a>
                    <p className="txt-small">deem to be</p>
                  </div>
                  <div className="mbmd">
                    <a href="#" className="txt-bold">minute</a>
                    <p className="txt-small">infinitely or immeasurably small</p>
                  </div>
                  <div className="mbmd">
                    <a href="#" className="txt-bold">accord</a>
                    <p className="txt-small">concurrence of opinion</p>
                  </div>
                  <div className="mbmd">
                    <a href="#" className="txt-bold">evident</a>
                    <p className="txt-small">clearly revealed to the mind or the senses or judgment</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="mbsm">My Vocab Test Results</h3>

        <ul className="list-underline">
          <li>You scored 18/20 in <a href="#">Vocab Quiz Family Topic</a></li>
          <li>You completed <a href="#">IELTS Word Challenge</a></li>
          <li>You scored 2/10 in <a href="#">Vocab Test</a></li>
          <li>You won <a href="#">Pictionary 02</a> over <a href="#">Lily Miller</a></li>
        </ul>

      </div>
    )
  }
}

export default VocabBuilder;
