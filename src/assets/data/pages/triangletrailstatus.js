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
    description: "Triangle Trail Status is a mobile application designed to provide users with an easier experience in checking where to ride " +
      "In the application, users can favorite trails and receive post notifications if a trail either opens or closes",
    roles: "Developer, Designer",
    stack: "React-native, Firestore and Cloud functions in Firebase, NodeJS - Cloud Foundry on IBM Cloud",
  },
  {
    id: 1,
    heading: "Problems and Solutions",
    text1: "is not very friendly to check on your mobile device. " + 
      "As community members update the status's up trails you may miss when your favorite trail opens, " +
      "missing the opportunity to ride that day.",
    text2: "Triangle Trail Status provides a lightweight two-page application that allows users to favorite trails of their choice. " +
    "Once favorited the user may receive push notifications when the trail's status is updated..",
  },
  {
    id: 2,
    heading: "Design and Style",
    text: "The layout and color scheme of the app were kept simple, using a natural palette and a single column list. Animation and illustration were created with Adobe software and implemented using CSS and Lottie JS. " +
      "After deploying test versions of the app, user feedback was used to make tweaks to the color and layout, improving usability and accessibility. ",
    image1: TriangTrail_2,
    image2: TriangTrail_1
  },
  {
    id: 3,
    heading: "Conclusion and Reflection",
    text1: "In the end, the app proved to be successful and provided real value to the local mountain biking community. However, at the time of publication, the app was only available for Android as the developer did not have access to MacOS to build and publish the app for iPhone, despite being built with React Native. " +
      "I hopes to revisit the project and release an iOS version in the future. Overall, designing, developing, and releasing the app was a valuable experience. " 
  },
];