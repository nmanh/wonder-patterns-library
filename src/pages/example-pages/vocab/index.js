import React from 'react';
import { Header } from '../general-components';

export default class Vocab extends React.Component {
  render() {
    return (
      <div>
        <Header
          openAskModal={this.openAskModal}
          removeMarginBottom
        />
        <div className="well">
          <div className="row">
            <div className="small-12 medium-8 medium-offset-2 column">
              <form action="" className="f">
                <div className="f__input-group">
                  <input className="f__control f__control_ig f__control_large br-r-tr-br"/>
                  <button className="f__input-addon br-r-tl-bl">@example.com</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
