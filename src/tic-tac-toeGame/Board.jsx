import React, { useState } from "react";
import Square from "./Square";
import "../Styles/style.css";

function Board() {
  let [state, setState] = useState(Array(9).fill(null));
  let [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const checkLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of checkLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const checkDraw = () => {
    for (let status of state) {
      if (status === null) {
        return false;
      }
    }
    return true;
  };

  let isWinner = checkWinner();

  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    return;
  };

  return (
    <>
      {checkWinner() ? (
        <div className='board-container'>
          <h1> {isWinner} won the game</h1>
          <h5>congratulations</h5>
          <button onClick={handleReset}>GAME RESET</button>
        </div>
      ) : checkDraw() ? (
        <div className='board-container'>
          <h1>MATCH IS DRAW</h1>
          <h3>BETTER LUCK NEXT TIME</h3>
          <button onClick={handleReset}>GAME RESET</button>
        </div>
      ) : (
        <>
          <h1>
            PLAYER <a>{isXTurn ? "X" : "O"}</a> Please move
          </h1>
          <div className='board-container'>
            <div className='board-row'>
              <Square value={state[0]} onClick={() => handleClick(0)} />
              <Square value={state[1]} onClick={() => handleClick(1)} />
              <Square value={state[2]} onClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
              <Square value={state[3]} onClick={() => handleClick(3)} />
              <Square value={state[4]} onClick={() => handleClick(4)} />
              <Square value={state[5]} onClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
              <Square value={state[6]} onClick={() => handleClick(6)} />
              <Square value={state[7]} onClick={() => handleClick(7)} />
              <Square value={state[8]} onClick={() => handleClick(8)} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Board;
