import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Hand from './Hand';
import Turn from './Turn';
import Alert from './Alert';
import Instructions from './Instructions';
class Game extends React.Component {
  state = {
    board: [
      [1, 2, 3, 4, 5],
      ['|', '|', '|', '|', '|'],
      ['|', '|', '|', '|', '|']
    ],
    hand: 0,
    turn: 0
  };

  render() {
    return (
      <div>
        <div className='ui segment'>
          <Container className='hand'>
            <Hand num={this.state.hand} />
          </Container>
          <div className='ui divider' />
          <div className='ui three column centered aligned divided grid'>
            <div className='three wide column'>
              {this.displayTower(this.state.board[0])}
              <br />
              <button onClick={e => this.buttonClick(0, e)}> Click me</button>
            </div>
            <div className='three wide column'>
              <div justify-content='center' align-items='center'>
                {this.displayTower(this.state.board[1])}
              </div>
              <br />
              <button onClick={e => this.buttonClick(1, e)}> Click me</button>
            </div>
            <div className='three wide column'>
              {this.displayTower(this.state.board[2])}
              <br />
              <button onClick={e => this.buttonClick(2, e)}> Click me</button>
            </div>
          </div>
          <div className='ui divider' />
          <Container className='hand'>
            <Turn turn={this.state.turn} />
          </Container>
        </div>
        <Container className='hand'>
          <Alert alert={this.state.alert} />
        </Container>
        <div className='ui segment'>
          <Instructions />
        </div>
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
      return;
    }

    // reset alert
    this.setState({ alert: 0 });
    var newboard;
    var x;

    // check if hand is empty
    if (this.state.hand === 0) {
      //check if board is empty
      if (this.state.board[num][4] === '|' && this.state.hand === 0) {
        this.setState({ alert: 'EMPTY' });
        return;
      }

      // check for num to pick up
      x = 0;
      while (this.state.board[num][x] === '|' && x < 5) {
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
  };

  checkWin() {
    if (this.state.board[2][0] === 1) {
      this.setState({ alert: 'WIN' });
    }
  }
}

export default Game;