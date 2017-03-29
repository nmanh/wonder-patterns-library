import React from 'react';

export const Header = () => (
  <header className="app-header mbxxlg">
    <div className="app-header__main">

      <div className="row column lf lf_align-middle mblg">

        <div className="app-header__logo mrmd">
          <img src="https://unsplash.it/140/50" alt="logo" />
        </div>

        <form className="f lf_full-space mrlg">
          <div className="row">
            <div className="medium-8 columns">
              <input
                className="f__control"
                type="search"
                placeholder="Tim kiem Q&A, blog, chu de va tai lieu hoc"
              />
            </div>
            <div className="medium-4 columns">
              <button className="btn btn_warning">Hỏi</button>
            </div>
          </div>
        </form>

        <a href="#" className="txt-white mrxlg">
          <i className="fa fa-bell fa-lg" />
        </a>
        <div>
          <a href="#" className="lf lf_align-middle txt-white">
            <img src="https://unsplash.it/40" className="img-circle mrsm" alt="avatar" />
            <div>
              <span className="mrsm">Looooooooong name</span>
              <i className="fa fa-angle-down"></i>
            </div>
          </a>
        </div>

      </div>

      <div className="row column">
        <nav className="nav">
          <a href="#" className="nav__link active">
            <i className="fa fa-home" /> Trang chủ
          </a>
          <a href="#" className="nav__link">
            <i className="fa fa-comments" /> Blog
          </a>
          <a href="#" className="nav__link">
            <i className="fa fa-camera" /> Live session
          </a>
          <a href="#" className="nav__link">
            <i className="fa fa-edit" /> Learn center
          </a>
        </nav>
      </div>

    </div>

    <div className="app-header__ghost"></div>
  </header>
);
