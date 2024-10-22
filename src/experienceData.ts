import thrive1 from "./images/Thrive1.jpeg";
import thrive2 from "./images/Thrive2.jpeg";
import thrive3 from "./images/Thrive3.jpeg";
import thrive4 from "./images/Thrive4.jpeg";

import upsport1 from "./images/Upsport1.jpeg";
import upsport2 from "./images/Upsport2.jpeg";
import upsport3 from "./images/Upsport3.jpeg";
import upsport4 from "./images/Upsport4.jpeg";

export enum Category {
  Education = "Causes close to my heart",
  Economics = "Economics in Action",
  Building = "Curiosity into creation",
  Interests = "Where you’ll find me",
}

interface Image {
  src: string;
  alt: string;
}

interface Button {
  src: string;
  label: string;
}
export interface Experience {
  name: string;
  pic: string;
  description?: string;
  timeline: string;
  title: string;
  bullets: string[];
  category: Category;
  images: Image[];
  buttons: Button[];
}

const thriveImages: Image[] = [
  { src: thrive1, alt: "Image 1" },
  { src: thrive2, alt: "Image 1" },
  { src: thrive3, alt: "Image 1" },
  { src: thrive4, alt: "Image 1" },
];

const upsportImages: Image[] = [
  { src: upsport1, alt: "Image 1" },
  { src: upsport2, alt: "Image 1" },
  { src: upsport3, alt: "Image 1" },
  { src: upsport4, alt: "Image 1" },
];

export const experiences: Experience[] = [
  {
    name: "Thrive",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Education,
    bullets: [
      "Motivated by the gaps I noticed in India’s Right to Education Act, I founded Thrive Today to focus on an often-overlooked dimension of success—soft skills. Through weekly sessions with forty 6th and 7th graders from marginalized backgrounds at my school, I work on building trust through role-playing games, musical conversations, and sharing personal vulnerabilities. Over time, these students have gained confidence in their speech and become more open about their challenges, helping them bridge the socioeconomic divide. As I continue this work, I’ve passed leadership on to younger students to ensure this supportive environment continues to grow and impact more lives.",
    ],
    images: thriveImages,
    buttons: [],
  },
  {
    name: "TSRR",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Education,
    bullets: ["Fill"],
    images: [],
    buttons: [],
  },
  {
    name: "CII",
    pic: require("./images/placeholder.png"),
    timeline: "Sept. 2023",
    title: "Cofounder",
    category: Category.Education,
    bullets: ["Fill"],
    images: [],
    buttons: [],
  },
  {
    name: "Research paper",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Economics,
    bullets: [
      "Traditional economic theory suggests that individuals make rational decisions to maximize benefits, but behavioral economics argues that emotions and biases can influence choices. This research focuses on how athletes, under time constraints, rely more on intuitive, fast-thinking systems (System 1) rather than slower, rational thought processes (System 2), leading to cognitive biases such as the availability heuristic, anchoring bias, sunk cost fallacy, and framing bias. Through primary research involving amateur athletes, the study identifies these biases in action and proposes strategies for mitigating their effects to enhance athletic performance.",
    ],
    images: [],
    buttons: [
      {
        src: require("./images/paper.pdf"),
        label: "Paper Link",
      },
    ],
  },
  {
    name: "GPI Paper",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Economics,
    bullets: ["Fill"],
    images: [],
    buttons: [],
  },
  {
    name: "John Locke Brief",
    pic: require("./images/placeholder.png"),
    timeline: "Sept. 2023",
    title: "Cofounder",
    category: Category.Economics,
    bullets: ["Fill"],
    images: [],
    buttons: [
      {
        src: "https://drive.google.com/file/d/1wX3l0KToAaQVw3VyzM_rRY507b_CAJVy/view",
        label: "Paper Link",
      },
    ],
  },
  {
    name: "Makers Asylum",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Building,
    bullets: [
      "The GuitarGlove project was created to make learning guitar chords easier and more intuitive for beginners. The smart glove has six LEDs on each finger, representing the guitar's strings, and lights up to indicate the correct finger placement. It also features sensors that detect the hand's position and only activate the LEDs when the hand is in the right position to play the chord. The glove connects to a guitar learning website, offering a fun and engaging way for users to learn chords without the need for expensive lessons or difficult music theory.",
    ],
    images: [],
    buttons: [
      {
        src: "https://makersasylum.com/project/guitarglove/",
        label: "Project Link",
      },
      {
        src: "https://github.com/sumairahuja/GuitarGlove/tree/main",
        label: "Github",
      },
    ],
  },
  {
    name: "NSLC",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Building,
    bullets: ["Fill"],
    images: [],
    buttons: [
      {
        src: "https://docs.google.com/presentation/d/1g5AH2gtWxPzB6rNf7NY0SnseNgq785UT/edit#slide=id.p1",
        label: "Project Link",
      },
    ],
  },
  {
    name: "GetItDone: An App to Enhance Productivity",
    pic: require("./images/placeholder.png"),
    timeline: "July. 2023",
    title: "Cofounder",
    category: Category.Building,
    bullets: [
      "GetItDone is an app designed to enhance productivity by personalizing learning for students with different learning styles and neurodivergent needs. It offers a tailored experience by using an initial quiz to create a personalized learning schedule based on each student's environment and preferences. The app includes alternative teaching methods, such as documentaries, podcasts, 3D models, and community discussions, all powered by AI to suit various learning types. Additionally, GetItDone provides physical accommodations like sensory toys for neurodivergent students, aiming to make education more accessible and engaging for all learners.",
    ],
    images: [],
    buttons: [
      {
        src: "https://docs.google.com/document/d/1pQ0SALnP8wuhvEpS6GIJFkLa8ihyO-o1JebpeBhO2B0/edit?tab=t.0",
        label: "Project Link",
      },
    ],
  },
  {
    name: "Upsporthub",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Interests,
    bullets: ["Fill"],
    images: upsportImages,
    buttons: [],
  },
  {
    name: "More than play",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Interests,
    bullets: ["Fill"],
    images: [],
    buttons: [],
  },
  {
    name: "Sports pics",
    pic: require("./images/placeholder.png"),
    timeline: "Sept. 2023",
    title: "Cofounder",
    category: Category.Interests,
    bullets: ["Fill"],
    images: [],
    buttons: [],
  },
];
