import React from 'react';

const Alert = props => {
  if (props.alert === 0) {
    return (
      <div>
        <h2> </h2>
      </div>
    );
  }
  if (props.alert === 'EMPTY') {
    return <h2>Error! column empty</h2>;
  } else if (props.alert === 'NUM_LARGER') {
    return <h2>Error! Number in hand is larger than stack</h2>;
  } else if (props.alert === 'WIN') {
    return <h2>Winner Winner Chicken Dinner!</h2>;
  }
  return <div />;
};

export default Alert;
