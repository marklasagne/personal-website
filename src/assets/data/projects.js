import TriangleTrailStatus from '../images/triangle_trail_status.gif';
import SmartPalette from '../images/color_palette.gif';
import CardinalPride from '../images/cardinal_pride.gif';
import AmbieSense from '../images/ambie_sense.gif';
import AudioVisualizer from '../images/audio_visualization.gif';
import GameOfLife_0 from '../images/GameOfLife/GameOfLife_0.gif';

const projects = [
    {
        id: 'triangle-trail-status',
        name: 'Triangle Trail Status',
        description: 'Check where to ride, add your favorites, and get notified.',
        image: TriangleTrailStatus,
        tags: ['development', 'design']
    },
    {
        id: 'smart-palette',
        name: 'Smart Palette',
        description: 'Web application to create and save color palettes from any image.',
        image: SmartPalette, 
        tags: ['development', 'design']
    },
    {
        id: 'audio-visualizer',
        name: '3D Audio Visualizer',
        description: 'Short exploration of FTT data and GLSL',
        image: AudioVisualizer, 
        tags: ['development', 'art']
    },
    {
        id: 'game-of-life-visualization',
        name: 'Game of Life Visualization',
        description: 'Integrating p5js and WebGL with Cloud Technology',
        image: GameOfLife_0, 
        tags: ['development', 'art']
    },
    {
        id: 'cardinal-pride',
        name: 'Cardinal Pride Property Care',
        description: 'Website for local handyman',
        image: CardinalPride, 
        tags: ['development', 'design']
    },
    {
        id: 'ambio-sense',
        name: 'Ambie Sense',
        description: 'Stay at home interactive experience taylored to mental health.',
        image: AmbieSense, 
        tags: ['development', 'design']
    },
];

export default projects;

