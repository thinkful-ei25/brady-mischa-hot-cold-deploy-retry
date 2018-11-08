import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 1, //randomNumber better 1-100.
      info: false
    };
  }

// handleSubmit(guess) {
//         this.setState( ({ guesses: [...this.state.guesses, guess] }))
// }
    


  render() {
    //TODO: Create a new answer number for on click of the header.

    return (
      <div>
        <Header />
        <GuessSection
          // feedback="Make your guess!"
          // handleSubmit={this.handleSubmit}
          // //guesses={this.state.guesses}
        />
      </div>
    );
  }
}

//