import React from 'react';

import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessList from './guess-list';
import './guess-section.css';

export default class GuessSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      answer: 1,
      feedback: 'Make your Guess!'
    };
  }

  handleSubmit(guess) {
    this.setState({guesses: [...this.state.guesses, guess]})
  }

  render() {
    return (
      <section>
        <h2 id="feedback">{this.state.feedback}</h2>
        <GuessForm handleSubmit={ guess => this.handleSubmit(guess)} />
        <GuessCount count={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </section>
    );
  }
}
