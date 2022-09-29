// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Ambie sense project page data

import AmbieSense_0 from '../../images/AmbieSense/AmbieSense_0.png';
import AmbieSense_3 from '../../images/AmbieSense/AmbieSense_3.png';
import AmbieSense_5 from '../../images/AmbieSense/AmbieSense_5.png';
import AmbieSense_6 from '../../images/AmbieSense/AmbieSense_6.png';

export const AmbieSenseData = [
  {
    id: 0,
    description: "An in-home experience to help support mental health during a pandemic through AR/VR. Project a new environment into your home, while connecting with family and friends. " + 
      " Take a journey, find your meditative place, or simply revamp your space!",
    team: "Katherine Gilchrist, Jenny Lee, Mark Lisanti, Priyanka Makin",
    roles: "Developer, Designer",
    stack: "React Native, JavaScript",
    image: AmbieSense_6
  },
  {
    id: 1,
    heading: "Software design and development",
    text1: "Topology: Mobile App - Websocket server - p5js sketch",
    text2: "The mobile application is currently built and tested for Android but using React Native for possible iOS support in the future.  " +
      "At this stage there is very limited functionality within the app but it is set up for integration with a backend to support user logins and personalized accounts.",
    image: AmbieSense_0
  },
  {
    id: 2,
    heading: "none",
    text1: "The mobile application communicates through a local websocket server to change an image in a p5js sketch running on the second system. " +
      "This sketch is then projected onto a wall or surface through an HDMI cable connected to the second system.  Currently the setup only allows communication between the app and projection if the devices are connected to the same network. " +
      "As the server is very simple it will need to be expanded for better security and persistence.  ",
    text2: "The p5js sketch is used to easily utilize HTML canvas to display videos.  It changes the video based on the data sent from the websocket server. " +
      "Depending on how the future environments are developed this p5js sketch may be expanded or scrapped for a more robust library. ",
    image: AmbieSense_3
  },
  {
    id: 3,
    heading: "Hardware design",
    text: " The housing for this product was drawn up in Sketchup, a web-based CAD software. It is designed to scale with the hardware we currently have (Auking projector and diffuser) and measures 15 inches in diameter. " +
      "The projector and diffuser are kept separate from each other. The diffuser steam can escape through openings at the bottom of the sphere. Additionally, RGB LEDs can be added toward the bottom of the AmbieSense housing making " + 
      "it look glowy and modern and can add to the overall ambience. This design can be exported and 3D printed with white filament. ",
    image: AmbieSense_5
  },
  {
    id: 4,
    heading: "Conclusion and Reflection",
    text: "The goal of this project was to design something with the pandemic in mind and I think we achieved this. " +
    "We ambitiously designed both software and hardware and unfortunately did not have time to fabricate the hardware components. " +
    "Other stretch goals included projection mapping, or some sort of AR integration.  Personally I learned a lot and would be happy to revisit the project in the future. ",
  }, 
];

