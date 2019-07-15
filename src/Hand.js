import React from 'react';

class Hand extends React.Component {
  render() {
    return this.updateHand(0);
  }

  updateHand = num => {
    return <h2>Hand: {num}</h2>;
  };
}

export default Hand;
