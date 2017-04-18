import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

export class NavTabH extends React.Component {
  constructor() {
    super();
    this.state = {
      isEndList: false,
    };

    this.calculateTotalWidth = this.calculateTotalWidth.bind(this);
    this.checkEndList = this.checkEndList.bind(this);
  }

  componentDidMount() {
    this.calculateTotalWidth();
    this.checkEndList();
  }

  calculateTotalWidth() {
    const items = this.tabList.querySelectorAll('.nav-tab-h__item');
    this.totalWidth = 0;
    items.forEach((item) => {
      this.totalWidth += item.offsetWidth;
    });
  }

  checkEndList() {
    const offsetRight = this.totalWidth - (this.tabList.scrollLeft + this.tab.offsetWidth);
    if (offsetRight === 0) {
      this.setState({ isEndList: true });
    } else {
      this.setState({ isEndList: false });
    }
  }

  render() {
    return (
      <div>
        <PLSectionHeading text="Nav tab horizontal" />
        <PLWrapper>
          <PLHeading text="Nav tab horizontal" />
          <PLExample>
            <div
              className={this.state.isEndList ? 'nav-tab-h end-list' : 'nav-tab-h'}
              ref={ref => this.tab = ref}
            >
              <ul
                className="nav-tab-h__list"
                ref={ref => this.tabList = ref}
                onScroll={this.checkEndList}
              >
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
                  <a href="#" className="nav-tab-h__link">Vocab builder</a>
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
          </PLExample>
          <PLCodeBlock>
            {`
              <div className="nav-tab-h">
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
                    <a href="#" className="nav-tab-h__link">Vocab builder</a>
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
            `}
          </PLCodeBlock>
        </PLWrapper>
      </div>
    )
  }
}
