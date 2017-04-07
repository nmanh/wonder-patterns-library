import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = ({ openAskModal }) => (
  <header className="app-header mbxxlg">
    <div className="app-header__main">

      <div className="row column lf lf_align-middle mblg">

        <Link to="/example-pages/homepage" className="app-header__logo mrmd">
          <h1 className="mb-reset">Wonder</h1>
        </Link>

        <div className="row lf_full-space mrlg">
          <div className="medium-8 columns">
            <form className="f">
              <input
                className="f__control f__control_large shadow"
                type="search"
                placeholder="Tim kiem Q&A, blog, chu de va tai lieu hoc"
              />
            </form>
          </div>
          <div
            className="medium-4 columns"
            onClick={openAskModal}
          >
            <button className="btn btn_warning btn_large shadow txt-uppercase">Hỏi</button>
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
            <div>
              <span className="mrsm">Linh duong</span>
              <i className="fa fa-angle-down"></i>
            </div>
          </Link>
        </div>

      </div>

      <div className="row column">
        <nav className="nav">
          <NavLink to="/example-pages/homepage" className="nav__link">
            <i className="fa fa-home" /> <span className="hide-for-small">Trang chủ</span>
          </NavLink>
          <NavLink to="/example-pages/blog" className="nav__link">
            <i className="fa fa-comments" /> <span className="hide-for-small">Blog</span>
          </NavLink>
          <a href="#" className="nav__link">
            <i className="fa fa-camera" /> <span className="hide-for-small">Live session</span>
          </a>
          <a href="#" className="nav__link">
            <i className="fa fa-edit" /> <span className="hide-for-small">Vocab</span>
          </a>
          <a href="#" className="nav__link">
            <i className="fa fa-question-circle" /> <span className="hide-for-small">Quiz/Test</span>
          </a>
        </nav>
      </div>

    </div>

    <div className="app-header__ghost" style={{height: '60px'}}></div>
  </header>
);
