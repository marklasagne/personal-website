
// Personal website and portfolio //
// 2023                          //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Boulder Parks Data

import BoulderParks_0 from '../../images/BoulderParks/initial_laser_cut.jpg';
import BoulderParks_1 from '../../images/BoulderParks/initial_laser_cut_2.jpg';
import BoulderParks_2 from '../../images/BoulderParks/etch.jpg';
import BoulderParks_3 from '../../images/BoulderParks/test_fit.jpg';
import BoulderParks_4 from '../../images/BoulderParks/paint.jpg';
import BoulderParks_5 from '../../images/BoulderParks/paint_2.jpg';
import BoulderParks_6 from '../../images/BoulderParks/led_test.jpg';
import BoulderParks_7 from '../../images/BoulderParks/assembly.jpg';
import BoulderParks_8 from '../../images/BoulderParks/assembly_2.jpg';
import BoulderParks_9 from '../../images/BoulderParks/assembly_3.jpg';
import BoulderParks_10 from '../../images/BoulderParks/final.jpg';
import BoulderParks_11 from '../../images/BoulderParks/map_screenshot.png';


export const BoulderParksData = [
    {
      id: 0,
      description: "Interactive map created aimed to raise awareness about the significance of green spaces and the availability of such spaces in Boulder. It is constructed using scrap wood and can be accessed through any device equipped with location services." ,
      text1: "Boulder is home to a wealth of parks and open spaces, offering numerous benefits to its residents. To highlight the importance of green space and promote accessibility, I created an interactive map using scrap wood. The map is designed to work seamlessly with any device with location services, allowing visitors to explore the city's parks and open spaces in an engaging and educational way.",
      image: BoulderParks_11,
      stack: "Firebase, Python, Arduino, React",
      hardware: "Le Potato (Micro Computer), Arduino Uno"
    },
    {
      id: 1,
      heading: "Controlling the LEDs",
      text1: "Interacting with the map does not require an app or blue tooth.  Any device with location services can use the website to illuminate LEDs and learn about individual parks.  This is done using a realtime data base hosted on Google Firebase.  Hardware connected to the LEDs listen for changes in the database and control the state of the LEDs."
    },
    {
      id: 2,
      heading: "The Build",
      text1: "Initial plans and art was created in Adobe Illustrator.  Using 1/8th inch plywood scraps I then fired up the laser to cut the intricate designs. " +
      "Various glues and a tad bit of eyeballing helped shape its final form.",
      image0: BoulderParks_0,
      image1: BoulderParks_1,
      image2: BoulderParks_2,
      image3: BoulderParks_3,
      image4: BoulderParks_4,   
      image5: BoulderParks_5,
      image6: BoulderParks_6,
      image7: BoulderParks_7,
      image8: BoulderParks_8,   
      image9: BoulderParks_9,
      image10: BoulderParks_10,   
    },
    {
      id: 3,
      text1: "Special thanks to Annie Margaret at CU Boulder for assisting with research techniques and providing the opportunity to produce this project. "
    },
  ];
  