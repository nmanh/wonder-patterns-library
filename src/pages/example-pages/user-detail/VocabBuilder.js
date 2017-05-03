import React from 'react';
// import { ButtonDropdown } from '../general-components';

class VocabBuilder extends React.Component {
  render() {
    return (
      <div>
        <div className="lf lf_align-middle mtlg mblg">
          <h3 className="mrmd mb-reset show-for-medium">You build 1 list</h3>
          <button className="btn btn_warning show-for-medium">
            <i className="fa fa-plus" /> Build new list
          </button>

          <button className="btn btn_warning btn_block btn_large hide-for-medium">
            <i className="fa fa-plus" /> Build new list
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
                  <ul>
                    <li className="mbmd">consider</li>
                    <li className="mbmd">minute</li>
                    <li className="mbmd">accord</li>
                    <li className="mbmd">evident</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="mbsm">My Vocab Test Results</h3>

        <ul className="list-unstyled">
          <li className="mbsm"><i className="fa fa-check txt-primary-color" /> You scored 18/20 in <a href="#">Vocab Quiz Family Topic</a></li>
          <li className="mbsm"><i className="fa fa-check txt-primary-color" /> You completed <a href="#">IELTS Word Challenge</a></li>
          <li className="mbsm"><i className="fa fa-check txt-primary-color" /> You scored 2/10 in <a href="#">Vocab Test</a></li>
          <li className="mbsm"><i className="fa fa-check txt-primary-color" /> You won <a href="#">Pictionary 02</a> over <a href="#">Lily Miller</a></li>
        </ul>

      </div>
    )
  }
}

export default VocabBuilder;
