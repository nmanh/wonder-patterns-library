import React from 'react';

class SideNav extends React.Component {
  constructor() {
    super();

    this.state = {
      nav: [
        {
          id: 'answer',
          title: 'Answers',
          addon: 32,
        },
        {
          id: 'question',
          title: 'Questions',
          addon: 32,
        },
        {
          id: 'blog',
          title: 'Blogs',
          addon: 4,
        },
        {
          id: 'vocab',
          title: 'Vocab list',
          addon: 4,
        },
        {
          id: 'follower',
          title: 'Followers',
          addon: 9,
        },
        {
          id: 'following',
          title: 'Following',
          addon: 6,
        },
        {
          id: 'topic',
          title: 'Topics',
          addon: 4,
        },
        {
          id: 'bookmark',
          title: 'Bookmarks',
          addon: 8,
        },
        {
          id: 'setting',
          title: 'Settings',
          addon: 0,
        },
      ]
    }
  }

  render() {
    return (
      <ul className="nav-tab-v">
        {this.state.nav.map((item) => (
          <li
            key={item.id}
            className={item.id === this.props.navActive ? 'nav-tab-v__item active' : 'nav-tab-v__item'}
          >
            <a
              href="#"
              className="nav-tab-v__link"
              onClick={(e) => {
                e.preventDefault();
                this.props.setNavActive(item.id);
              }}
            >
              <span className="nav-tab-v__text">{item.title}</span>
              {Boolean(item.addon) && (
                <span className="nav-tab-v__addon">{item.addon}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    )
  }
}

export default SideNav;
