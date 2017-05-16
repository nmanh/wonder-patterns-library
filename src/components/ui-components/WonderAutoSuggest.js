import React from 'react';
import Autosuggest from 'react-autosuggest';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'Why can’t I learn JavaScript?',
    year: 1972
  },
  {
    name: 'With knowledge in HTML, CSS and a little JavaScript, what kind of projects should I start with to strengthen my skills in web development?',
    year: 2012
  },
  {
    name: 'As a programmer, what do you do when your build is running?',
    year: 2012
  },
  {
    name: 'What is the best strategy to improve my skills in competitive programming in 2-3 months?',
    year: 2012
  },
  {
    name: 'Should I dropout of college and learn web development online?',
    year: 2012
  },
  {
    name: 'How do programmers code quickly?',
    year: 2012
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

export class WonderAutoSuggest extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <PLSectionHeading text="Auto Suggest" />
        <PLWrapper>
          <PLHeading text="Auto Suggest" />
          <PLExample>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
          </PLExample>
          <PLCodeBlock>
            {`
            `}
          </PLCodeBlock>
        </PLWrapper>
      </div>
    )
  }
}
