import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import './Game.css';
import Hand from './Hand';

class Game extends React.Component {
  state = {
    row1: [1, 2, 3, 4, 5],
    row2: ['|', '|', '|', '|', '|'],
    row3: ['|', '|', '|', '|', '|'],
    hand: 0
  };

  render() {
    return (
      <div>
        <Container className='hand'>
          <Hand num={this.state.hand} />
        </Container>
        <Container className='box'>
          <Row className='tower'>
            {this.displayTower(this.state.row1)}
            <br />
            <button onClick={e => this.buttonClick(1, e)}> Click me</button>
          </Row>
          <Row className='tower'>
            {this.displayTower(this.state.row2)}
            <br />
            <button onClick={e => this.buttonClick(2, e)}> Click me</button>
          </Row>
          <Row className='tower'>
            {this.displayTower(this.state.row3)}
            <br />
            <button onClick={e => this.buttonClick(3, e)}> Click me</button>
          </Row>
        </Container>
      </div>
    );
  }

  displayTower = tower => {
    var towerDisp = [];
    towerDisp = tower.map(x => {
      return <div key={Math.random()}>{x}</div>;
    });

    return towerDisp;
  };

  buttonClick = num => {
    // check if hand is empty
    if (this.state.hand === 0) {
      //check if row is empty
      if (num === 1) {
        if (this.state.row1[4] === '|') {
          console.log('row is empty');
          return;
        }
      }
      if (num === 2) {
        if (this.state.row2[4] === '|') {
          console.log('row is empty');
          return;
        }
      }
      if (num === 3) {
        if (this.state.row3[4] === '|') {
          console.log('row is empty');
          return;
        }
      }

      // check for num to pick up
      var x = 0;
      if (num === 1) {
        while (this.state.row1[x] === '|' && x < 5) {
          console.log(this.state.row1[x]);
          x++;
        }
        this.setState({ hand: this.state.row1[x] });
      }
    } else {
      var x = 0;
      if (num === 1) {
      }
      if (num === 2) {
        while (this.state.row2[x] === '|' && x < 5) {
          x++;
          if (x === 4) {
            var newrow = this.state.row2;
            newrow[4] = this.state.hand;
            this.setState({ row2: newrow });
            this.setState({ hand: 0 });
          }
        }
      }
    }

    this.render();
    console.log(this.state);
  };
}

export default Game;
