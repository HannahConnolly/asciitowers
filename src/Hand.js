import React from 'react';

const Hand = props => {
  if (props.win === true) {
    return <h2>You win! turns: {props.turns}</h2>;
  }
  if (props.num !== 0) {
    return <h2> Hand: {props.num}</h2>;
  } else {
    return <h2> Hand: </h2>;
  }
};

export default Hand;
