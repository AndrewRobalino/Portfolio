"use client";

import { useState, useCallback } from "react";

type Board = number[]; // 0 = empty space, 1-8 = tiles

const SOLVED: Board = [1, 2, 3, 4, 5, 6, 7, 8, 0];

function isSolvable(board: Board): boolean {
  let inversions = 0;
  const tiles = board.filter((t) => t !== 0);
  for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[i] > tiles[j]) inversions++;
    }
  }
  return inversions % 2 === 0;
}

function shuffle(): Board {
  let board: Board;
  do {
    board = [...SOLVED];
    for (let i = board.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [board[i], board[j]] = [board[j], board[i]];
    }
  } while (!isSolvable(board) || arraysEqual(board, SOLVED));
  return board;
}

function arraysEqual(a: Board, b: Board): boolean {
  return a.every((v, i) => v === b[i]);
}

function getAdjacent(index: number): number[] {
  const row = Math.floor(index / 3);
  const col = index % 3;
  const neighbors: number[] = [];
  if (row > 0) neighbors.push(index - 3);
  if (row < 2) neighbors.push(index + 3);
  if (col > 0) neighbors.push(index - 1);
  if (col < 2) neighbors.push(index + 1);
  return neighbors;
}

export default function EightPuzzleDemo() {
  const [board, setBoard] = useState<Board>(shuffle);
  const [moves, setMoves] = useState(0);
  const solved = arraysEqual(board, SOLVED);

  const handleTileClick = useCallback(
    (index: number) => {
      if (solved) return;
      const emptyIndex = board.indexOf(0);
      if (!getAdjacent(index).includes(emptyIndex)) return;

      setBoard((prev) => {
        const next = [...prev];
        [next[index], next[emptyIndex]] = [next[emptyIndex], next[index]];
        return next;
      });
      setMoves((m) => m + 1);
    },
    [board, solved]
  );

  const handleShuffle = () => {
    setBoard(shuffle());
    setMoves(0);
  };

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span style={{ color: "#4ade80", fontSize: 13 }}>
          moves: {moves}
        </span>
        {solved && (
          <span style={{ color: "#4ade80", fontSize: 13 }}>solved!</span>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
          width: 198,
          margin: "0 auto",
        }}
      >
        {board.map((tile, i) => (
          <button
            key={i}
            onClick={() => handleTileClick(i)}
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              color: tile === 0 ? "transparent" : "#fff",
              background: "transparent",
              border: tile === 0 ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
              cursor: tile === 0 ? "default" : "pointer",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              if (tile !== 0) {
                (e.target as HTMLButtonElement).style.borderColor =
                  "rgba(74,222,128,0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (tile !== 0) {
                (e.target as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
              }
            }}
          >
            {tile === 0 ? "" : tile}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 14, textAlign: "center" }}>
        <button
          onClick={handleShuffle}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#4ade80",
            background: "transparent",
            border: "1px solid rgba(74,222,128,0.3)",
            padding: "5px 16px",
            cursor: "pointer",
          }}
        >
          shuffle
        </button>
      </div>
    </div>
  );
}
