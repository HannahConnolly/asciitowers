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
    row3: ['|', '|', '|', '|', '|']
  };

  render() {
    return (
      <div>
        <Hand className='hand' />
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
    console.log('clicked! ' + num);
  };
}

export default Game;
