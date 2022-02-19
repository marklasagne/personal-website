// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Triangle Trail Status project page data

import TriangTrail_1 from '../../images/TriangleTrailStatus/TriangTrail_1.png';
import TriangTrail_2 from '../../images/TriangleTrailStatus/TriangTrail_2.png';

export const TriangleTrailStatusData = [
  {
    id: 0,
    description: "Triangle Trail Status is a mobile application aimed to give users an easier experience " +
      "checking for where to ride. In the application, you can favorite trails which gives the option to receive " +
      "post notifications if that trail either opens or closes.",
    roles: "Developer, Designer",
    stack: "React-native, Firestore and Cloud functions in Firebase, NodeJS - Cloud Foundry on IBM Cloud",
  },
  {
    id: 1,
    heading: "Problem and Solution",
    text1: "is not very friendly to check on your mobile device. " + 
      "As community members update the status's up trails you may miss when your favorite trail opens, " +
      "missing the opportunity to ride that day.",
    text2: "Triangle Trail Status provides a lightweight two-page application that allows users to favorite trails of their choice. " +
    "Once favorited the user may receive push notifications when the trail's status is updated..",
    image: TriangTrail_1
  },
  {
    id: 2,
    heading: "Design and Style",
    text: "The project started because I wanted to make and animate a logo, specifically a triangle tire. " +
      "After initially sketching and learning different tools to digitalize my drawings I decided to " +
      "write some code to implement my animation on web or mobile applications. This led to me fleshing " +
      "out the ideas and final design of the app.  Once I had deployed test versions of the app I used " +
      "feedback from users to make tweaks and add features to quickly add updated releases.",
    image: TriangTrail_2
  },
  {
    id: 3,
    heading: "Conclusion and Reflection",
    text1: "Being my first publically published mobile app I was nervous.  Ultimately this was a success, and proved real value in the local " +
      "mountain biking community. I worked hard at learning react-native and feel the result is a clean,  " +
      "and professional codebase.  I wish I spent more time designing the interface and user testing the usability before publishing. ",
    text2: "Bonus skills I picked up were drawing and animating the logo which gave me exposure to Adobe products and using my artistic side."
  },
];