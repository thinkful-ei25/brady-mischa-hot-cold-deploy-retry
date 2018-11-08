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
      answer: 10,
      feedback: ''
    };
  }

  handleSubmit(guess) {
    this.setState({guesses: [...this.state.guesses, guess]})
  }

  handleStatus(){
    const length = this.state.guesses.length-1;
    const distanceFromGuess = Math.abs(this.state.guesses[length] - this.state.answer);
    if(!this.state.guesses.length){
      this.setState({
        feedback: 'Make your Guess!'
      })
    }else if(distanceFromGuess === 0){
      this.setState({
        feedback: 'YOU WIN!! <3'
      })
    }else if (distanceFromGuess <= 10){
      this.setState({
        feedback: 'hot'
      })
    }else{ this.setState({
      feedback: 'cold'
    })}

  }

  render() {
    // this.handleStatus();
    return (
      <section>
        <h2 id="feedback">{this.state.feedback}</h2>
        <GuessForm handleSubmit={ guess => this.handleSubmit(guess)} handleStatus={() => this.handleStatus()}/>
        <GuessCount count={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </section>
    );
  }
}
