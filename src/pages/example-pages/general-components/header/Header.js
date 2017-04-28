import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import Notification from './Notification';

export class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowBackdrop: false,
      isShowSuggestion: false,
    };

    this.showBackdrop = this.showBackdrop.bind(this);
    this.hideBackdrop = this.hideBackdrop.bind(this);
    this.showSuggestion = this.showSuggestion.bind(this);
    this.hideSuggestion = this.hideSuggestion.bind(this);
  }

  showBackdrop() {
    this.setState({ isShowBackdrop: true });
  }

  hideBackdrop() {
    this.setState({ isShowBackdrop: false });
  }

  showSuggestion() {
    this.setState({ isShowSuggestion: true });
  }

  hideSuggestion() {
    this.setState({ isShowSuggestion: false });
  }

  render() {
    const { openAskModal } = this.props;

    return (
      <header className="app-header mbxxlg">
        <div className="app-header__main">

          <div className="row column lf lf_no-wrap lf_align-middle large-mbsm mblg">

            <Link to="/example-pages/homepage" className="app-header__logo medium-mrsm mrmd">
              <h1 className="mb-reset show-for-medium">Wonder</h1>
              <h1 className="mb-reset show-for-small-only">W</h1>
            </Link>

            <div className="app-header__action-box medium-mrmd mrlg">

              <div className="lf lf_no-wrap">

                <SearchForm
                  showBackdrop={this.showBackdrop}
                  hideBackdrop={this.hideBackdrop}
                  showSuggestion={this.showSuggestion}
                  hideSuggestion={this.hideSuggestion}
                  isShowSuggestion={this.state.isShowSuggestion}
               />

                <div
                  className="app-header__cta-box mlmd"
                  onClick={openAskModal}
                >
                  <button className="btn btn_warning btn_large shadow txt-uppercase">Hỏi</button>
                </div>
              </div>

            </div>

            <Notification />

            <div>
              <Link to="/example-pages/user-detail" className="lf lf_align-middle txt-white">
                <img src="https://unsplash.it/40" className="img-circle mrsm" alt="avatar" />
                <div className="show-for-medium">Linh duong</div>
              </Link>
            </div>

          </div>

          <nav className="nav">
            <NavLink to="/example-pages/homepage" className="nav__link">
              <i className="fa fa-home" /> <span className="show-for-medium">Trang chủ</span>
            </NavLink>
            <NavLink to="/example-pages/blog" className="nav__link">
              <i className="fa fa-comments" /> <span className="show-for-medium">Blog</span>
            </NavLink>
            <a href="#" className="nav__link">
              <i className="fa fa-video-camera" /> <span className="show-for-medium">Live session</span>
            </a>
            <a href="#" className="nav__link">
              <i className="fa fa-edit" /> <span className="show-for-medium">Vocab</span>
            </a>
            <a href="#" className="nav__link">
              <i className="fa fa-question-circle" /> <span className="show-for-medium">Quiz/Test</span>
            </a>
          </nav>

        </div>

        <div className="app-header__ghost" style={{height: '60px'}} />

        {this.state.isShowBackdrop && (
          <div
            className="app-header__backdrop"
            onClick={() => {
              this.hideSuggestion();
              this.hideBackdrop();
            }}
          />
        )}
      </header>
    )
  }
}
