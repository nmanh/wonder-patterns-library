import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = ({ openAskModal }) => (
  <header className="app-header mbxxlg">
    <div className="app-header__main">

      <div className="row column lf lf_no-wrap lf_align-middle mbsm">

        <Link to="/example-pages/homepage" className="app-header__logo mrmd">
          <h1 className="mb-reset show-for-medium">Wonder</h1>
          <h1 className="mb-reset show-for-small-only">W</h1>
        </Link>

        <div className="app-header__action-box mrlg">

          <div className="lf lf_no-wrap">
            <div className="app-header__search-box lf_full-space">
              <form className="f">
                <input
                  className="app-header__search-input shadow"
                  type="search"
                  placeholder="Tim kiem voi Wonder"
                />
              </form>
            </div>

            <div
              className="app-header__cta-box mlmd"
              onClick={openAskModal}
              >
                <button className="btn btn_warning btn_large shadow txt-uppercase">Hỏi</button>
              </div>
          </div>


        </div>

        <a href="#" className="badge mrxlg txt-white">
          <div className="badge__icon">
            <i className="fa fa-bell-o fa-lg" />
          </div>
          <div className="badge__addon">4</div>
        </a>

        <div>
          <Link to="/example-pages/user-detail" className="lf lf_align-middle txt-white">
            <img src="https://unsplash.it/40" className="img-circle mrsm" alt="avatar" />
            <div className="show-for-medium">
              <span className="mrsm">Linh duong</span>
              <i className="fa fa-angle-down"></i>
            </div>
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

    <div className="app-header__ghost" style={{height: '60px'}}></div>
  </header>
);
