import React from 'react';
import Suggestion from './Suggestion';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (/(\w|\s)+/g.test(String.fromCharCode(e.keyCode))) {
      this.props.showBackdrop();
      this.props.showSuggestion();
      return;
    }

    return;
  }

  render() {
    const {
      showBackdrop,
      isShowSuggestion,
      hideSuggestion,
      hideBackdrop,
    } = this.props;

    return (
      <div
        className="app-header__search-box lf_full-space"
        onClick={e => e.stopPropagation()}
      >
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div className="app-header__search-wrap">
            <input
              className="app-header__search-input shadow"
              type="search"
              placeholder="Tim kiem voi Wonder"
              onFocus={showBackdrop}
              onKeyDown={this.handleKeyDown}
              ref={ref => this.searchInput = ref}
            />
            <button className="app-header__search-btn">
              <i className="fa fa-search" />
            </button>
            {isShowSuggestion && (
              <Suggestion
                hideSuggestion={hideSuggestion}
                hideBackdrop={hideBackdrop}
              />
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default SearchForm;
