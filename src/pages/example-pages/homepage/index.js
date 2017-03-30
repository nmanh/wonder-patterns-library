import React from 'react';
import { Header, SideBar } from '../general-components';
import { MainContent } from './MainContent';
import { AnswerModal } from './AnswerModal';
import { AskModal } from './AskModal';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswerModalOpen: false,
      isAskModalOpen: false,
    }

    this.closeAnswerModal = this.closeAnswerModal.bind(this);
    this.openAnswerModal = this.openAnswerModal.bind(this);

    this.closeAskModal = this.closeAskModal.bind(this);
    this.openAskModal = this.openAskModal.bind(this);
  }

  closeAnswerModal() {
    this.setState({ isAnswerModalOpen: false });
  }

  openAnswerModal() {
    this.setState({ isAnswerModalOpen: true });
  }

  closeAskModal() {
    this.setState({ isAskModalOpen: false });
  }

  openAskModal() {
    this.setState({ isAskModalOpen: true });
  }

  render() {
    return (
      <div>
        <Header
          openAskModal={this.openAskModal}
        />
        <div className="row">
          <div className="medium-9 columns">
            <MainContent
              openAnswerModal={this.openAnswerModal}
              openAskModal={this.openAskModal}
            />
          </div>
          <div className="medium-3 columns">
            <SideBar />
          </div>
        </div>
        <AnswerModal
          isModalOpen={this.state.isAnswerModalOpen}
          onRequestClose={this.closeAnswerModal}
        />
        <AskModal
          isModalOpen={this.state.isAskModalOpen}
          onRequestClose={this.closeAskModal}
        />
      </div>
    )
  }
}

export default HomePage;
