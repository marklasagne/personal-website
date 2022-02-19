// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Game of life project page data

import GameOfLife_0 from '../../images/GameOfLife/GameOfLife_0.gif';

export const GameOfLifeData = [
  {
    id: 0,
    heading: "Game of Life Visualization",
    roles: "Developer, Artist",
    stack: "p5js, WebGL, python, OpenWhisk ",
  },
  {
    id: 1,
    heading: "none",
    text: "This generative art piece uses my own implementation of Conway's game of life and visualizes an 11x11 grid. " +
      "Using p5js and WebGL the flashing and rotating cells represent alive cells.  The algorithm is implemented " +
      "with Python and is running on IBM Cloud's serverless functions platform with OpenWhisk and called through " +
      "and API Gateway endpoint.",
    image: GameOfLife_0
  },
  {
    id: 2,
    heading: "Conclusion and Reflection",
    text: "Initially I kept the grid small to show the effect of the cubes, however, I think that visually the algorithm " +
      "will look better if the number of children was increased.  Running the code externally was fun to explore, but practically " +
      "it is not the most efficient in this application.",
    }
];