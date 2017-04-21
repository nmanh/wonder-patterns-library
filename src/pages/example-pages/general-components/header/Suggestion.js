import React from 'react';

class Suggestion extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsLength: 0,
      activeItemIndex: -1, // make first item in list selected when first time press keydown
      keyEvent: '',
    };

    this.handleKeyEvent = this.handleKeyEvent.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  componentDidMount() {
    const suggestList = this.suggestBox.querySelectorAll('.app-header__suggest-item');
    const itemsLength = suggestList.length;

    this.setState({ itemsLength });

    window.addEventListener('keydown', this.handleKeyEvent);
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.activeItemIndex === nextState.activeItemIndex);
  }

  componentDidUpdate(prevProps, prevState) {
    this.suggestBox
      .querySelectorAll('.app-header__suggest-item')
      .forEach((el) => {
        el.classList.remove('active');
      });

    this.suggestBox.querySelectorAll('.app-header__suggest-item')[this.state.activeItemIndex].classList.add('active');
  }

  componentWillUnmount() {
    window.removeEventListener('keydow', this.handleKeyEvent);
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleKeyEvent(e) {
    if (e.keyCode === 38) {
      if (this.state.activeItemIndex <= 0) {
        if (this.suggestBox) this.setState({ activeItemIndex: this.state.itemsLength - 1 });
        return;
      }

      if (this.suggestBox) this.setState({ activeItemIndex: this.state.activeItemIndex - 1 });
      return;
    }

    if (e.keyCode === 40) {
      if (this.state.activeItemIndex === (this.state.itemsLength - 1)) {
        if (this.suggestBox) this.setState({ activeItemIndex: 0 });
        return;
      }

      if (this.suggestBox) this.setState({ activeItemIndex: this.state.activeItemIndex + 1 });
      return;
    }

    if (e.keyCode === 27) {
      this.props.hideBackdrop();
      this.props.hideSuggestion();
    }
  }

  handleWindowClick() {
    this.props.hideSuggestion();
    this.props.hideBackdrop();
    console.log('window click');
  }

  render() {
    return (
      <div
        className="app-header__suggest-box shadow"
        ref={ref => this.suggestBox = ref}
      >
        <a href="#" className="app-header__suggest-item">
          <span className="txt-muted">Topic: </span>
          Web Applications
        </a>
        <a href="#" className="app-header__suggest-item">
          <span className="txt-muted">Topic: </span>
          Google (company)
        </a>
        <a href="#" className="app-header__suggest-item">
          <span className="txt-muted">Topic: </span>
          Computer Science
        </a>
        <a href="#" className="app-header__suggest-item">
          <span className="txt-muted">Topic: </span>
          Life and Living
        </a>
        <a href="#" className="app-header__suggest-item">
          What are some great programming projects for beginners?
        </a>
        <a href="#" className="app-header__suggest-item">
          Why is the number of bugs significantly higher in software systems than in hardware or mechanical systems?
        </a>
        <a href="#" className="app-header__suggest-item">
          Why is C programming language not used for smartphones and other hardware devices instead of Java?
        </a>
      </div>
    );
  }
}

export default Suggestion;
