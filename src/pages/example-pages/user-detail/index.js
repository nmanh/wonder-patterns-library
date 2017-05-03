import React from 'react';
import { Header } from '../general-components';
import AnswersBlock from './AnswersBlock';
import QuestionsBlock from './QuestionsBlock';
import BlogBlock from './BlogBlock';
import VocabBuilder from './VocabBuilder';
import Followers from './Followers';
import Following from './Following';
import Topics from './Topics';
import Bookmarks from './Bookmarks';
import Settings from './Settings';
import SideNav from './SideNav';

const PAGES = {
  answer: AnswersBlock,
  question: QuestionsBlock,
  blog: BlogBlock,
  vocab: VocabBuilder,
  follower: Followers,
  following: Following,
  setting: Settings,
  topic: Topics,
  bookmark: Bookmarks,
};

const DIV = () => (
  <div />
);

class UserDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      navActive: 'answer',
    }

    this.setNavActive = this.setNavActive.bind(this);
  }

  setNavActive(nav) {
    this.setState({
      navActive: nav,
    });
  }

  render() {
    const MainContent = PAGES[this.state.navActive] || DIV;

    return (
      <div>
        <Header />
        <div className="row">
          <div className="small-8 small-offset-2 medium-offset-0 medium-3 columns mblg">
            <div className="txt-center">
              <img src="https://unsplash.it/300" className="img-circle" alt="" />
            </div>
            <button className="btn btn_block mtmd">
              <i className="fa fa-picture-o" /> Change
            </button>
          </div>
          <div className="medium-9 columns mblg">
            <h2>Tim A. Mitchell</h2>
            <div className="txt-bold">About</div>
            <p>
              2702 Timberbrook Lane
              <br />
              Greeley, CO 80631
            </p>

            <div className="txt-bold">Bio</div>
            <p>
              Soufflé sweet roll ice cream sweet caramels pie.<br />
              Dessert sesame snaps pudding dragée wafer chocolate pie sweet roll.<br />
              Sesame snaps cake halvah sweet cheesecake jelly-o.<br />
            </p>
            <button className="btn">
              <i className="fa fa-pencil" /> Edit information
            </button>
          </div>
        </div>

        <div className="nav-tab-h hide-for-medium">
          <ul className="nav-tab-h__list">
            <li className="nav-tab-h__item active">
              <a href="#" className="nav-tab-h__link">Answers</a>
            </li>
            <li className="nav-tab-h__item">
              <a href="#" className="nav-tab-h__link">Questions</a>
            </li>
            <li className="nav-tab-h__item">
              <a href="#" className="nav-tab-h__link">Blogs</a>
            </li>
            <li className="nav-tab-h__item">
              <a href="#" className="nav-tab-h__link">Vocab list</a>
            </li>
            <li className="nav-tab-h__item">
              <a href="#" className="nav-tab-h__link">Followers</a>
            </li>
            <li className="nav-tab-h__item">
              <a href="#" className="nav-tab-h__link">Following</a>
            </li>
            <li className="nav-tab-h__item">
              <a href="#" className="nav-tab-h__link">Topic</a>
            </li>
            <li className="nav-tab-h__item">
              <a href="#" className="nav-tab-h__link">Bookmarks</a>
            </li>
            <li className="nav-tab-h__item">
              <a href="#" className="nav-tab-h__link">Settings</a>
            </li>
          </ul>
        </div>

        <div className="row mblg">
          <div className="small-12 columns show-for-medium">
            <div className="divider" />
          </div>

          <div className="medium-3 columns show-for-medium">
            <SideNav
              navActive={this.state.navActive}
              setNavActive={this.setNavActive}
            />
          </div>
          <div className="medium-9 columns">
            <MainContent />
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetail;
