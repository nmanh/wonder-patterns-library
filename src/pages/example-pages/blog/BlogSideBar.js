import React from 'react';

const TopBlogger = () => (
  <div className="panel panel_special mblg">
    <div className="panel__heading">
      <h3 className="panel__title">Top Bloggers</h3>
    </div>
    <div className="panel__body">

      <a href="#" className="lf lf_align-middle lf_no-wrap txt-body-color mbmd">
        <img src="https://unsplash.it/40x40" className="img-circle mrmd" alt="" />
        <div>
          <div className="txt-bold">Tu Ngo</div>
          <div>CEO & Cofounder at Yola</div>
        </div>
      </a>
      <a href="#" className="lf lf_align-middle lf_no-wrap txt-body-color mbmd">
        <img src="https://unsplash.it/40x40" className="img-circle mrmd" alt="" />
        <div>
          <div className="txt-bold">Lan Le, IELTS 8.5</div>
          <div>Upvoted 2.2k</div>
        </div>
      </a>
      <a href="#" className="lf lf_align-middle lf_no-wrap txt-body-color mbmd">
        <img src="https://unsplash.it/40x40" className="img-circle mrmd" alt="" />
        <div>
          <div className="txt-bold">Tony Bui</div>
          <div>Cofounder at FundaMine</div>
        </div>
      </a>
      <a href="#" className="lf lf_align-middle lf_no-wrap txt-body-color mbmd">
        <img src="https://unsplash.it/40x40" className="img-circle mrmd" alt="" />
        <div>
          <div className="txt-bold">Jane Miller</div>
          <div>Ila Teacher, 12k Followers</div>
        </div>
      </a>

      <div className="txt-right">
        <a href="#">View more</a>
      </div>

    </div>
  </div>
)

const BlogStats = () => (
  <div className="panel panel_special mblg">
    <div className="panel__heading">
      <h3 className="panel__title">Blog Stats</h3>
    </div>
    <div className="panel__body">

      <ul>
        <li>xxx blogs</li>
        <li>xxx bloggers</li>
        <li>xxx teachers sharing blogs</li>
        <li>xxx topics blogged</li>
      </ul>

    </div>
  </div>
)

const TopTopics = () => (
  <div className="panel panel_special mblg">
    <div className="panel__heading">
      <h3 className="panel__title">Top topics</h3>
    </div>
    <div className="panel__body">

      <button className="btn btn_primary mrsm mbsm">English Practice</button>
      <button className="btn btn_primary mrsm mbsm">SAT</button>
      <button className="btn btn_primary mrsm mbsm">IELTS</button>
      <button className="btn btn_primary mrsm mbsm">Kỹ năng Nói IELTS</button>

    </div>
  </div>
)

class BlogSideBar extends React.Component {
  render() {
    return (
      <aside>
        <div className="mblg">
          <button className="btn btn_warning btn_large">
            <i className="fa fa-plus" /> Create Blog
          </button>
        </div>

        <TopBlogger />
        <BlogStats />
        <TopTopics />

      </aside>
    )
  }
}

export default BlogSideBar;
