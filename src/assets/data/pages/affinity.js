// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Affinity page data 

import Affinity_0 from '../../images/Affinity/Affinity_0.png';
import Affinity_1 from '../../images/Affinity/Affinity_1.png';
import Affinity_2 from '../../images/Affinity/Affinity_2.png';
import Affinity_3 from '../../images/Affinity/Affinity_3.png';
import Affinity_4 from '../../images/Affinity/Affinity_4.png';
import Affinity_6 from '../../images/Affinity/Affinity_6.png';
import Affinity_7 from '../../images/Affinity/Affinity_7.png';

export const AffinityData = [
  {
    id: 0,
    heading: "Digital Intimacy",
    description: "Bringing awareness to our physical being while interacting digitally with one-another " +
    "through visiual representation of those physical traits (heart rate, temperature, oxygen level, movement).",
    team: "Katherin Gilchrist, Dover Horesh, Mark Lisanti, Melanie Sharif",
    roles: "Programming, Hardware, Presentation",
    stack: "Unity, C#, JavaScript, Arduino",
    image: Affinity_0
  
  },
  {
    id: 1,
    heading: "Overview",
    text: "Using a Microsoft Kinect camera and its depth data we mapped artistic renderings in the shape of individual.  These renderings can use data points from individuals biometric data. " +
    "which can be gathered through Ardunio sensors built into a custom glove.  This data may influence the colors and patterns within the visual animations " +
    "The physical space is in a large open room, however, the digital space is much smaller bound by digital walls.  Within these walls you may find objects to interact with, or interact with each other." 
  },
  {
    id: 2,
    heading: "The Journey",
    text: "Once we had our vision we began to plan the tech stack and the space.  This process was interative as different constraints arose. " +
    "The initial technical prototypes were to become familiar with interfacing our hardware (Kinect and Arduino) with software (Processing and Unity): "
  }, 
  {
    id: 3,
    text: "Initial visual sketches and room mockups:",
    image1: Affinity_1,
    image2: Affinity_2,
    image3: Affinity_3,
    image4: Affinity_4,   
  },
  {
    id: 4,
    text: "Additional prototyping included testing interactions with objects in unity and upgraded visuals:",
  },
  {
    id: 5,
    text: "User testing took place weekly with a group of dancers.  We felt the movements visually " +
    "tested our project and provide nice footage of our vision.  Special thanks to our testers, Anna Lowrimore, Shae Nance, Maddie Grove and Chelsae Magyar." 
  },
  {
    id: 6,
    text: "To collect biometric data we used a Pulse Oximeter and Heartrate sensor, Temperature sensor and ESP32 equiped Arduino. " +
    "Housing for the electronics was 3d printed and then integrated into a glove design.  The data collected could be sent wirelessly to Unity for animations:",

    image6: Affinity_6,
    image7: Affinity_7,
  }
];

