// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Game of life project page data

export const LifesAGameData = [
  {
    id: 0,
    heading: "Game of Life Generative Art",
    roles: "Developer, Artist",
    stack: "p5js, WebGL, python, OpenWhisk ",
  },
  {
    id: 1,
    heading: "none",
    text: "This generative art piece uses my implementation of Conway's game of life and visualizes a grid of randomized elements. " +
      "Using p5js and WebGL flashing and rotating cells represent alive cells.  Dead cells become static and are resized depending on the number of life cycles that include them.  The algorithm is implemented " +
      "with Python and is running on IBM Cloud's serverless functions platform with OpenWhisk and called through " +
      "an API Gateway endpoint."
  },
  {
    id: 2,
    heading: "none",
    text: "Users may control the dimensions of the grid, randomize colors at any time and save their generated images. " +
    " Images are output as 800x800 PNG. "

  },
  {
    id: 3,
    heading: "Conclusion and Reflection",
    text: "Initially I would have liked to save any outputs to SVG, however, this was not easily achieved as I was using WebGL in p5js. " +
    "Avoiding the overhead of converting the PNG to SVG I settled with the output simply being PNG. " +
    "The user controls could also use some more refinement. " 
  }
];