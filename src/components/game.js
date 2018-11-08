import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false,
      guesses: [],
      answer: Math.floor(Math.random() * 100) + 1,
      feedback: 'Make Your Guess',
    };
  }


  handleSubmit(guess) {
    const distanceFromGuess = Math.abs(guess - this.state.answer);
    let feedback;
  

 
  if(distanceFromGuess >= 50) {
    feedback = 'Ice Cold!';
  } else if(distanceFromGuess >=30) {
    feedback = 'cold';
  } else if (distanceFromGuess >= 10) {
    feedback = 'warm';
  } else if(distanceFromGuess >=1) {
    feedback = 'Hot';
  } else {
    feedback = 'You win!';
  }

  this.setState({
    feedback,
    guesses: [...this.state.guesses, guess]
  })
  }


  render() {
    return (
      <div>
        <Header />
        <GuessSection
          feedback={this.state.feedback}
          handleSubmit={val => this.handleSubmit(val)}
        />
        <GuessCount count={this.state.guesses.length}/>
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}
