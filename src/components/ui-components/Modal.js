import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

const StaticModal = () => (
  <PLWrapper>
    <PLHeading text="Static Modal" />
    <PLExample>
      <div className="modal static" tabIndex="-1" role="dialog">
        <div className="modal__dialog" role="document">
          <div className="modal__content fade-in-down">
            <div className="modal__header">
              <button className="modal__btn-close">
                <i className="fa fa-times fa-lg"></i>
              </button>
            </div>
            <div className="modal__body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor dolorem, inventore repellendus nam porro quidem ratione, nesciunt debitis soluta!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor dolorem, inventore repellendus nam porro quidem ratione, nesciunt debitis soluta!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor dolorem, inventore repellendus nam porro quidem ratione, nesciunt debitis soluta!</p>
              <button className="btn btn_block btn_info mbmd">View changes</button>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor dolorem, inventore repellendus nam porro quidem ratione, nesciunt debitis soluta!</p>
            </div>
            <div className="modal__footer">
              <div className="pull-right">
                <button className="btn mrmd">Close</button>
                <button className="btn btn_primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal__dialog" role="document">
            <div className="modal__content fade-in-down">

              <div className="modal__header">
                <h3 className="modal__title">Modal example</h3>
                <button className="modal__btn-close">
                  <i className="fa fa-times"></i>
                </button>
              </div>

              <div className="modal__body">
                ...
              </div>

              <div className="modal__footer">
                <div className="pull-right">
                  <button className="btn mrmd">Close</button>
                  <button className="btn btn_primary">Save changes</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

class LiveDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ isModalOpen: true });
    this.modal.style.display = 'block';
  }

  hideModal() {
    this.setState({ isModalOpen: false });
    window.setTimeout(() => {
      this.modal.style.display = 'none';
    }, 250);
  }

  render() {
    return (
      <PLWrapper>
        <PLHeading text="Live demo" />
        <PLExample>
          <button
            className="btn btn_primary"
            onClick={this.showModal}
          >
            Lauch modal
          </button>

          <div
            className={this.state.isModalOpen ? 'modal open' : 'modal'}
            tabIndex="-1"
            role="dialog"
            ref={(ref) => {this.modal = ref}}
            onClick={this.hideModal}
          >
            <div
              className="modal__dialog"
              role="document"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal__content fade-in-down">
                <div className="modal__header">
                  <h3 className="modal__title">Modal example</h3>

                  <button
                    className="modal__btn-close"
                    onClick={this.hideModal}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
                <div className="modal__body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor dolorem, inventore repellendus nam porro quidem ratione, nesciunt debitis soluta!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor dolorem, inventore repellendus nam porro quidem ratione, nesciunt debitis soluta!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor dolorem, inventore repellendus nam porro quidem ratione, nesciunt debitis soluta!</p>
                  <button className="btn btn_block btn_info mbmd">View changes</button>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor dolorem, inventore repellendus nam porro quidem ratione, nesciunt debitis soluta!</p>
                </div>
                <div className="modal__footer">
                  <div className="pull-right">
                    <button className="btn mrmd" onClick={this.hideModal}>Close</button>
                    <button className="btn btn_primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PLExample>
      </PLWrapper>
    );
  }
}

export const Modal = () => (
  <div>
    <PLSectionHeading text="Modal" />
    <StaticModal />
    <LiveDemo />
  </div>
);
