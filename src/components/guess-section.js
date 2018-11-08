import React from 'react';

import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessList from './guess-list';
import './guess-section.css';



export default function GuessSection (props) {
    return (
      <section>
        <h2 id="feedback">{props.feedback}</h2>
        <GuessForm handleSubmit={guess => props.handleSubmit(guess)}/>
      </section>
    );
  }

