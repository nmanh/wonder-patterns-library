import React from 'react';
import { Header } from '../general-components';
import BlogSideBar from './BlogSideBar';
import MainContent from './MainContent';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Header
          openAskModal={this.openAskModal}
        />
        <div className="row">
          <div className="large-9 columns">
            <MainContent />
          </div>
          <div className="large-3 columns">
            <BlogSideBar />
          </div>
        </div>
      </div>
    )
  }
}

export default Blog;
