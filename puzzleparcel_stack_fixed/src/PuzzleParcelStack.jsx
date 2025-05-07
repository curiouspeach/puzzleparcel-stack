import React from "react";

const Button = ({ children, ...props }) => (
  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" {...props}>
    {children}
  </button>
);

export default function PuzzleParcelStack() {
  return (
    <div className="min-h-screen bg-black text-purple-400 p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">🎁 PuzzleParcel Stack</h1>
      <p className="mb-4">Welcome to your interactive puzzle gift adventure!</p>
      <Button onClick={() => alert('Imagine a puzzle here!')}>Start Puzzle</Button>
    </div>
  );
}
