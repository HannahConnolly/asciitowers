import React from 'react';

const Turn = props => {
  console.log('turn called');

  return <h2> Turns: {props.turn}</h2>;
};

export default Turn;
