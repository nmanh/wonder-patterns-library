import React from 'react';

class Following extends React.Component {
  render() {
    return (
      <div>
        <h3 className="mtlg mblg mrmd">Topics (4)</h3>

        <div className="row">
          {[1, 2, 3, 4].map(item => (
            <div className="medium-6 columns" key={item}>
              <div className="panel mbmd">
                <div className="panel__body">
                  <div className="lf lf_align-middle lf_no-wrap">
                    <a href="#" className="mrmd">
                      <img src="https://unsplash.it/40" className="img-circle" alt="" />
                    </a>
                    <a href="#" className="lf_full-space mrmd txt-body-color">
                      <div>Advanced IELTS</div>
                      <div className="txt-small txt-muted">4 posts - 200 followers</div>
                    </a>
                    <button className="btn btn_reset txt-primary-color">
                      <i className="fa fa-user-times fa-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Following;
