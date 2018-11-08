import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        return new Promise(function(resolve, reject) {
          props.handleSubmit(Number(e.target.userGuess.value));
          resolve()
        })
        .then(() =>  props.handleStatus())
        .catch(err => console.log("whoops! something's broken :-/"))
      }}>  
      <input
        type="text"
        name="userGuess"
        id="userGuess"
        className="text"
        maxLength="3"
        autoComplete="off"
        placeholder="Enter your Guess"
        required
      />
      <input
        type="submit"
        id="guessButton"
        className="button"
        name="submit"
        value="Guess"
      />
    </form>
  );
}
