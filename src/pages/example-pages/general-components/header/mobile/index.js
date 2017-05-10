import React from 'react';

const navData = [
  // {
  //   icon: 'home',
  //   title: 'Home',
  // },
  {
    icon: 'comments',
    title: 'Blog'
  },
  {
    icon: 'pencil-square-o',
    title: 'Vocab'
  },
  {
    icon: 'question-circle-o',
    title: 'Quiz',
  },
  // {
  //   icon: 'user',
  //   title: 'You',
  // },
];

export default class MobileHeader extends React.Component {
  render() {
    return (
      <header>
        <div className="app-mobile-header">
          <a href="#" className="app-mobile-header__item">
            <i className="fa fa-search" /> Search
          </a>
          <a href="#" className="app-mobile-header__logo">
            <h1 className="app-mobile-header__heading">Wonder</h1>
          </a>
          <a href="#" className="app-mobile-header__item txt-right">
            <i className="fa fa-plus-square-o" /> Ask
          </a>
        </div>
        <div className="mobile-nav">
          <a href="#" className="mobile-nav__link active">
            <i className="fa fa-home fa-lg" />
            <div className="mobile-nav__title">Home</div>
          </a>
          {navData.map((item, index) => (
            <a href="#" className="mobile-nav__link" key={index}>
              <i className={`fa fa-${item.icon} fa-lg`} />
              <div className="mobile-nav__title">{item.title}</div>
            </a>
          ))}
          <a href="#" className="mobile-nav__link">
            <div className="mobile-nav__icon-wrap">
              <i className="fa fa-user fa-lg" />
              <div className="mobile-nav__icon-addon">6</div>
            </div>
            <div className="mobile-nav__title">User</div>
          </a>
        </div>
        <div className="row">
          <div className="small-12 column">
            <div className="lf lf_align-middle ptmd pbmd">
              <a href="#">
                <i className="fa fa-smile-o fa-3x mrmd" />
              </a>
              <a href="#" className="lf_full-space mrmd">
                <span className="txt-muted">Hi, click vào đây để login nhé!</span>
              </a>
              <button className="btn btn_warning">Login</button>
            </div>
            <div className="divider" />
          </div>
        </div>
      </header>
    )
  }
}
