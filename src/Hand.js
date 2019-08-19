import React from 'react';

const Hand = props => {
  if (props.win === true) {
    return <h2>You win! turns: {props.turns}</h2>;
  }
  if (props.num !== 0) {
    var ascii = 'I';
    for (var i = 0; i < props.num - 1; i++) {
      ascii += 'II';
    }
    return <h2> Hand: {ascii}</h2>;
  } else {
    return <h2> Hand: </h2>;
  }
};

export default Hand;
