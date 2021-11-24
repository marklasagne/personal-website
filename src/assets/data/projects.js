import TriangleTrailStatus from '../images/triangle_trail_status.gif';
import SmartPalette from '../images/color_palette.gif';
import CardinalPride from '../images/cardinal_pride.gif';
import Ambiosense from '../images/ambiosense.png';
import CreativeCode from '../images/creative_code.gif';


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
        id: 'creative-code',
        name: 'Creative Code',
        description: 'Collection of creative coding assigments and personal interests.',
        image: CreativeCode, 
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
        id: 'ambiosense',
        name: 'Ambiosense',
        description: 'Stay at home interactive experience taylored to mental health.',
        image: Ambiosense, 
        tags: ['development', 'design']
    },
];

export default projects;