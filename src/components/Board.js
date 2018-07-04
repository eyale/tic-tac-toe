import React from 'react';
import Square from './Square';
import { calculateWinner, generateEmptyBoard } from '../utils';

import '../styles/tic-tac-toe.css';

export class Board extends React.Component {
  state = {
    isX: true,
    winner: '',
    grid: generateEmptyBoard(),
  };

  onReset = () => {
    this.setState({
      grid: generateEmptyBoard(),
      winner: ''
    });
  };

  onClick = (x, y) => {
    if (this.state.grid[x][y] === '') {
      const newGrid = this.state.grid;
      newGrid[x][y] = this.state.isX === true ? 'x' : 'o';
      this.setState({ grid: newGrid, isX: !this.state.isX });

      const scanSquare = (x_, y_, side) => {
        let scanned = 0;
        let _x = x;
        let _y = y;

        while (newGrid[_x] !== undefined && newGrid[_x][_y] === side) {
          scanned += 1;
          _y += y_;
          _x += x_;
        }
        return scanned;
      };

      const x_hor = scanSquare(0, 1, 'x') + scanSquare(0, -1, 'x') - 1;
      const o_hor = scanSquare(0, 1, 'o') + scanSquare(0, -1, 'o') - 1;
      const x_ver = scanSquare(1, 0, 'x') + scanSquare(-1, 0, 'x') - 1;
      const o_ver = scanSquare(1, 0, 'o') + scanSquare(-1, 0, 'o') - 1;
      const x_diag1 = scanSquare(1, 1, 'x') + scanSquare(-1, -1, 'x') - 1;
      const o_diag1 = scanSquare(1, 1, 'o') + scanSquare(-1, -1, 'o') - 1;
      const x_diag2 = scanSquare(1, 1, 'x') + scanSquare(-1, -1, 'x') - 1;
      const o_diag2 = scanSquare(-1, 1, 'o') + scanSquare(1, -1, 'o') - 1;

      let result = calculateWinner(
        x_hor,
        x_ver,
        x_diag1,
        x_diag2,
        o_hor,
        o_ver,
        o_diag1,
        o_diag2
      );

      if (result) {
        this.setState({ winner: result });
      }
    }
  };
  render() {
    const grid = this.state.grid;
    const board = grid.map((row, idx) => {
      return (
        <tr key={idx.toString()}>
          {row.map((col, j) => {
            const allowToClick =
              this.state.winner === '' ? () => this.onClick(idx, j) : null;
            return (
              <Square
                onClick={allowToClick}
                value={grid[idx][j]}
                key={Math.random().toString()}
              />
            );
          })}
        </tr>
      );
    });

    return (
      <section className="game">
        <table cellSpacing="0">
          <tbody>{board}</tbody>
        </table>
        <p className="status">The winner is: {this.state.winner}</p>
        <button onClick={() => this.onReset()}>____RESET____</button>
      </section>
    );
  }
}
export default Board;
