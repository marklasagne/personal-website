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
    text: "Layout and color remained simple with a 'natural' palette and single column list. " +
      "Animation and illustration was built with Adobe software and implemented using CSS and Lottie JS. " +
      " Once I had deployed test versions of the app I used " +
      "feedback from users to make tweaks to the color and layout to increase usability and accessibility.",
    image: TriangTrail_2
  },
  {
    id: 3,
    heading: "Conclusion and Reflection",
    text1: "Ultimately this was a success, and proved real value in the local mountain biking community. " +
      "At the time of publishing the application I did not have access to MacOS so I was unable to build and publish the app for iPhone, despite being built with React Native. I hope to revist this project and release an iOS version. " +
      "The design, development and releasing of this app was a valuable experience. ",
  },
];