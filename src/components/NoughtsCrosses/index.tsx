import { useEffect, useState } from "react";
import "./styles.css";

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

export const NoughtsCross = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xTurn, setXTurn] = useState(true);
  const [status, setStatus] = useState("");

  // TODO:
  // choose player
  // win counter
  // FORCE WIN option (rearrange the squares)

  const handleClick = (currentSquare) => {
    let squaresCopy = [...squares];

    if (winner(squaresCopy) || squaresCopy[currentSquare]) return;

    squaresCopy[currentSquare] = xTurn ? "X" : "O";
    setXTurn((prev) => !prev);
    setSquares(squaresCopy);
  };

  const winner = (squares) => {
    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [6, 3, 0],
      [7, 4, 1],
      [8, 5, 2],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winPattern.length; i++) {
      const [x, y, z] = winPattern[i];

      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z])
        return squares[x];
    }

    return null;
  };

  const restartGame = () => {
    setSquares(() => Array(9).fill(""));
    setXTurn(() => true);
    setStatus(() => "");
  };

  useEffect(() => {
    if (!winner(squares) && squares.every((item) => item !== "")) {
      setStatus(() => "You somehow drew in this very balanced game...");
    } else if (winner(squares)) {
      setStatus(() => `Winner is ${winner(squares)}`);
    } else setStatus(() => `Next player is ${xTurn ? "O" : "X"}`);
  }, [squares, xTurn]);

  return (
    <div className="container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h2>{status}</h2>
      <button onClick={restartGame}>RESTART GAME</button>
    </div>
  );
};
