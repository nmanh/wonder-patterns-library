import React, { Component } from 'react';
import './assets/prism.css';
import Prism from './assets/prism.js';

export class PLCodeBlock extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <section className="pt-code-block">
        <h3 className="pt-code-block__title">Code Block</h3>
        <pre>
          <code className="language-html">
            {this.props.children}
          </code>
        </pre>
      </section>
    );
  }
}
