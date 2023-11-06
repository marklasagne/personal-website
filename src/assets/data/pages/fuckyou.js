
// Personal website and portfolio //
// 2023                          //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Fuck you sign data

import FuckYou_0 from '../../images/FuckYouSign/face_detection.jpg';
import FuckYou_1 from '../../images/FuckYouSign/laser_cut.jpg';
import FuckYou_2 from '../../images/FuckYouSign/glue_up.jpg';
import FuckYou_3 from '../../images/FuckYouSign/circuit_test.jpg';

export const FuckYouData = [
  {
    id: 0,
    description: "Animated edge lit sign to let you know how I really feel. Just kidding." ,
    text: "Semiotic devices are powerful tools that are necessary for modern society.  This sign is not particularly necessary, but that's okay.  Whether it's playful or not, " +
    "''flipping the bird'' can be a valuable release.  This piece is meant to be lighthearted fun.  Multiple states and a toggling effect are inspired by animated LED signs.  " +
     "Using a Rasberry PI and camera, the state of the sign may change when a passerby looks in its direction and the software detects a face. ",
    stack: "Python, OpenCV",
    hardware: "Rasberry PI, NeoPixel"
  },
  {
    id: 1,
    text: "Initial plans and art was created in Adobe Illustrator.  Using 1/8th inch plywood scraps and a laser I cut the plans and prepped them for assembly. " +
    "Various glues and a tad bit of eyeballing helped shape its final form.  Basic soldering and glueing allowed me to place the circuit inside of the enclosure.",
    image0: FuckYou_0,
    image1: FuckYou_1,
    image2: FuckYou_2,
    image3: FuckYou_3
  },
  {
    id: 2,
    text: "Thanks to Zach Weaver at CU Boulder for running a space where I could make such a silly little project and for giving this sign a home." 
  },
];
