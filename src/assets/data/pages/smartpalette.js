// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Smart palette project page data

import SmartPalette_3 from '../../images/SmartPalette/SmartPalette_3.png';
import SmartPalette_4 from '../../images/SmartPalette/SmartPalette_4.png';
import SmartPalette_5 from '../../images/SmartPalette/SmartPalette_5.png';
import SmartPalette_6 from '../../images/SmartPalette/SmartPalette_6.png';
import SmartPalette_420 from '../../images/SmartPalette/bart_palette.gif';

export const SmartPaletteData = [
  {
    id: 0,
    description: "Smart Palette is a Web Application for users to generate color palettes by uploading an image. " +
      "The platform uses an unsupervised AI algorithm to choose the optimal diverse color " +
      "series for the image. If you do not like what is generated, you can run it again and " +
      "get a different result. You can view other color palettes created by different users.",
    team: "Jacob Thomas, Kevin Conti, Thomas Taylor, Devan Corcoran, Mark Lisanti",
    roles: "Developer, Designer",
    stack: "PostgresSQL, Python, HTML/CSS/JS",
    image: SmartPalette_420
  },
  {
    id: 1,
    heading: "But why?",
    text1: "For anyone from painters, to web designers, to interior designers, color palettes are useful. " +
      "If a user has a picture or a piece of art that they love the colors of, they can quickly " +
      "create a palette with it.",
    text2: "We performed requirements elicitation with five unique users in order to grasp a consistent " +
      "picture of the user's requirements. Requirements were gathered from the users in a group " + 
      "setting through an open-ended dialogue with a focus on user creativity in order to prevent " +
      "developer bias in the elicitation process. Afterwards, requirements analysis was used to " +
      "determine specific feature expectations, as well as to resolve ambiguity in requirements.",
    image: SmartPalette_4
  },
  {
    id: 2,
    heading: "Requirements",
    text: ["⦁ Able to create users and store usernames/passwords in database ",
      "⦁ Users able to upload photos and generate palettes until they get the one they like ",
      "⦁ Store photo file paths in database ",
      "⦁ Store palettes created in database ",
      "⦁ Palettes created by all users visible on website palette timeline"
    ],
    image: SmartPalette_3
  },
  {
    id: 3,
    heading: "Architectural Design",
    text: "This application uses a PostgresSQL database " +
      "(relational database) which communicates via a web-based API, " +
      "which the user is able to interact with via an HTML/CSS/JS user interface.",
    image: SmartPalette_5
  },
  {
    id: 4,
    heading: "Component Design",
    text1: "Our three modules are the User Interface (UI), API, and the database (DB)",
    text2: [" ⦁ UI: There are several interfaces for the UI. There is a login screen, user image upload screen, sample image screen , account registration screen",
      "⦁ API: The API allows for various inputs that create functionality. The API utilizes a CRUD interface with regards to the five major resources of the project: color, user, palette, color-palette, and image",
      "⦁ DB: The database interface is accessed via ORM (object relational mapping) pattern via the API. The end user is unable to interact with any input our output without utilizing the API as a form of middleware"
    ],
    image: SmartPalette_6
  },
  {
    id: 5,
    heading: "Conclusion and Reflection",
    text: "Overall the team worked well together and I believe we designed an elegant piece of software. " +
      "I wish I spent more time understanding front end frameworks " +
      "at the time to polish the look of the project. " +
      "Unfortuantely the submitted interface, while functional, has an unfinished look and does " +
      "not do the well designed backend justice.  I hope to redo the interface as a future project. You can visit the site at: ",
  }
];