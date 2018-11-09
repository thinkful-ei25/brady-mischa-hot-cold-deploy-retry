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
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(guess) {
    const distanceFromGuess = Math.abs(guess - this.state.answer);
    let feedback;
  
    if(this.state.guesses.includes(guess)){
      this.setState({
        feedback: 'already guessed that!'
      })
      return;
    }

    if(guess > 100 || guess < 1 ){
      this.setState({
        feedback: 'guess should be between 1 and 100'
      })
      return;
    }
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
      // this.setState({
      //   guesses: [],
      //   answer: Math.floor(Math.random() * 100) + 1
      // })
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    })
  }

  newGame() {
    this.setState({
      guesses: [],
      answer: Math.floor(Math.random() * 100) + 1,
      feedback: 'Make Your Guess'
    })
  }

  infoToggle(){
    this.setState({
      info: !this.state.info
    })
  }

  render() {
    return (
      <div>
        <Header newGameButton={() => this.newGame()} infoToggle={()=> this.infoToggle()} modalShow={this.state.info}/>
        <GuessSection
          feedback={this.state.feedback}
          // handleSubmit={val => this.handleSubmit(val)}
          handleSubmit={this.handleSubmit}
        />
        <GuessCount count={this.state.guesses.length}/>
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}
