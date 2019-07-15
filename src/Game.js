import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import './Game.css';
import './App.css';
import Hand from './Hand';
import Turn from './Turn';
import Alert from './Alert';

class Game extends React.Component {
  state = {
    board: [
      [5, 4, 3, 2, 1],
      ['|', '|', '|', '|', '|'],
      ['|', '|', '|', '|', '|']
    ],
    hand: 0,
    turn: 0
  };

  render() {
    return (
      <div>
        <Container className='hand'>
          <Hand num={this.state.hand} />
        </Container>
        <Container className='box'>
          <Row className='tower'>
            {this.displayTower(this.state.board[0])}
            <br />
            <button onClick={e => this.buttonClick(0, e)}> Click me</button>
          </Row>
          <Row className='tower'>
            {this.displayTower(this.state.board[1])}
            <br />
            <button onClick={e => this.buttonClick(1, e)}> Click me</button>
          </Row>
          <Row className='tower'>
            {this.displayTower(this.state.board[2])}
            <br />
            <button onClick={e => this.buttonClick(2, e)}> Click me</button>
          </Row>
        </Container>

        <Container className='hand'>
          <Turn turn={this.state.turn} />
        </Container>
        <Container className='hand'>
          <Alert alert={this.state.alert} />
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
    if (this.state.win === true) {
      console.log('win found');
      return;
    }

    // reset alert
    this.setState({ alert: 0 });
    var newboard;
    var x;

    // check if hand is empty
    console.log(this.state);
    if (this.state.hand === 0) {
      //check if board is empty
      if (this.state.board[num][4] === '|' && this.state.hand === 0) {
        this.setState({ alert: 'EMPTY' });
        console.log('row is empty');
        return;
      }

      // check for num to pick up
      x = 0;
      while (this.state.board[num][x] === '|' && x < 5) {
        console.log(this.state.board[num][x]);
        x++;
      }
      this.setState({ hand: this.state.board[num][x] });
      newboard = this.state.board;
      newboard[num][x] = '|';
      this.setState({ board: newboard });
    } else {
      // hand not empty - begin place
      x = 0;
      while (this.state.board[num][x] === '|' && x < 5) {
        // check for next var
        x++;
        // check for empty column
        if (x === 4 && this.state.board[num][x] === '|') {
          newboard = this.state.board;
          newboard[num][4] = this.state.hand;
          this.setState({ board: newboard });
          this.setState({ hand: 0 });
          this.setState({ turn: this.state.turn + 1 });
          this.checkWin();
          return;
        } else {
          this.render();
        }
      }
      // check if num is smaller
      if (this.state.hand < this.state.board[num][x] && x !== 0) {
        console.log('entered smaller');
        newboard = this.state.board;
        newboard[num][x - 1] = this.state.hand;
        this.setState({ board: newboard });
        this.setState({ hand: 0 });
        this.setState({ turn: this.state.turn + 1 });
        this.checkWin();
        return;
      } else {
        this.setState({ alert: 'NUM_LARGER' });
        this.render();
      }
    }
    if (this.state.win === true) {
    }
    this.render();
    console.log(this.state);
  };

  checkWin() {
    if (this.state.board[2][0] === 1) {
      this.setState({ alert: 'WIN' });
    }
  }
}

export default Game;
