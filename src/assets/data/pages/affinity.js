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
    description: "By creating a visual representation of physicality with biometrics such as heart rate, body temperature, oxygen levels, and body movement, we are bringing awareness to our physical beings in a digital space. ",
    team: "Katherine Gilchrist, Dover Horesh, Mark Lisanti, Melanie Sharif",
    roles: "Programming, Hardware, Presentation",
    stack: "Unity, C#, JavaScript, Arduino",
    hardware: "Kinectv2, Qwiic temperature sensor (TMP117), Qwiic pulse oximeter & heart rate sensor (MAX30101 & MAX32664)",
    image: Affinity_0
  
  },
  {
    id: 1,
    heading: "Overview",
    text: "Using a Microsoft Kinect camera, its depth data, and Unity graphics, we created 3D renderings of individual body shapes. By mapping motion data to a mesh and 3D point cloud, users can visualize their physical beings in a novel way. "+
    "These renderings can use biometric data points from the user's physiology, which are gathered through Arduino sensors built into a custom glove. This data may influence the colors, patterns, visuals and sequences within the animations. " +
    "The physical space is a large, open room — however, the digital space is much smaller, bound by digital walls to create a sense of affinity. Within these walls you may find objects to interact with, or find new ways to interact with each other."
  },

  {
    id: 2,
    heading: "The Journey",
    text: "Once we had our vision, we began to plan the tech stack, the space, and explore the hardware that we would be using. This became an iterative process as different constraints arose, and we adjusted course to achieve our artistic aims. " +
    "Additional prototyping included testing interactions with objects in Unity, and upgraded visuals: "
  }, 
  {
    id: 3,
    text: "Initial visual sketches and room mockups included a seperator between individuals.  This was later removed to allow more movement:",
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
    "tested our project and provide nice footage of our vision.  Biometric data data animations were not included with this testing: " 
  },
  {
    id: 6,
    text: "To collect biometric data we used a Pulse Oximeter and Heartrate sensor, Temperature sensor and ESP32 equiped Arduino. " +
    "Housing for the electronics was 3d printed and then integrated into a glove design.  The data collected could be sent wirelessly to Unity for animations:",
    image6: Affinity_6,
    image7: Affinity_7,
  },
  {
    id: 7,
    heading: "Conclusion",
    text: "Prospectively, the areas explored by this installation remain interesting. The visualization of biometrics, fostering a higher degree of physical awareness in digital spaces, and the dynamics between the physical and virtual may offer more opportunities for creating novel, playful, and cooperative human-computer interactions."
  }
];

