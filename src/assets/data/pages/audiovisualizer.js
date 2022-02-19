// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Audio viz project page data

import AudioVisualizer_0 from '../../images/AudioVisualizer/AudioVisualizer.gif';

export const AudioVisualizerData = [
  {
    id: 0,
    heading: "3D Audio Visualization",
    roles: "Developer, Artist",
    stack: "p5js, GLSL",
  },
  {
    id: 1,
    heading: "none",
    text: "This is a quick exploration of using FFT data from audio files to create visualization.  " +
    " The waveform is passed as a uniform to a vertex shader to manipulate the shape of the 3D model. " +
    " The amplitude is used to change the rotational speed when the amplitude hits an upper threshold.",
    image: AudioVisualizer_0
  },
  {
    id: 2,
    heading: "Conclusion and Reflection",
    text: "Exploring shaders and 3d objects was fun.  I like the direction that this exploration went and would love " +
    "to expand on this project in the future.  I invision users being able to create their own visualization by uploading " +
    "3d models and music of their own tastes."
  }
];

