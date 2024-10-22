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
    name: "Thrive Today",
    pic: require("./images/placeholder.png"),
    timeline: "Jan 2024 – present",
    title: "Founder & Lead Organizer",
    category: Category.Education,
    bullets: [
      "Motivated by the gaps I noticed in India’s Right to Education Act, I founded Thrive Today to focus on an often-overlooked dimension of success—soft skills. Through weekly sessions with forty 6th and 7th graders from marginalized backgrounds at my school, I work on building trust through role-playing games, musical conversations, and sharing personal vulnerabilities. Over time, these students have gained confidence in their speech and become more open about their challenges, helping them bridge the socioeconomic divide. As I continue this work, I’ve passed leadership on to younger students to ensure this supportive environment continues to grow and impact more lives.",
    ],
    images: thriveImages,
    buttons: [],
  },
  {
    name: "TSRS EWS Report",
    pic: require("./images/placeholder.png"),
    timeline: "Sept 2024 – present",
    title: "Researcher",
    category: Category.Education,
    bullets: [
      "I conducted research using primary data from surveys to explore the challenges faced by EWS (Economically Weaker Section) students in private schools. Based on the findings, I suggested initiatives to enhance inclusivity and academic success, offering a blueprint for schools in the region.",
    ],
    images: [],
    buttons: [],
  },
  {
    name: "Confederation of Indian Industry Education Panel (CII)",
    pic: require("./images/placeholder.png"),
    timeline: "July. 2024",
    title: "Research Associate",
    category: Category.Education,
    bullets: [
      "As a Research Associate for the Confederation of Indian Industry Education Panel (CII) in New Delhi, I serve as one of four student representatives providing recommendations on public education in Delhi. I am currently working on a white paper focused on social and emotional well-being, which will be submitted to the Delhi State Government.",
    ],
    images: [],
    buttons: [],
  },
  {
    name: "Cognitive Biases and Athlete’s Decision-Making Abilities",
    pic: require("./images/placeholder.png"),
    timeline: "May – Jun 2024",
    title: "Independent Research",
    category: Category.Economics,
    bullets: [
      "In my research, I explore how athletes, under time constraints, often rely on fast, intuitive thinking (System 1) rather than slower, rational thought processes (System 2), leading to cognitive biases. While traditional economic theory suggests that people make rational decisions to maximize benefits, my study highlights how emotions and biases—such as the availability heuristic, anchoring bias, sunk cost fallacy, and framing bias—can influence athletic decisions. Through primary research with amateur athletes, I identify these biases in action and propose strategies to mitigate their effects, aiming to enhance performance in high-pressure situations.",
    ],
    images: [],
    buttons: [
      {
        src: require("./images/paper.pdf"),
        label: "Paper Link",
      },
      {
        src: "https://www.ijfmr.com/research-paper.php?id=28202",
        label: "Journal Link",
      },
    ],
  },
  {
    name: "Is the GPI a more comprehensive measure of economic progress than traditional economic indicators",
    pic: require("./images/placeholder.png"),
    timeline: "Dec 2023 – Jan 2024",
    title: "Independent Research",
    category: Category.Economics,
    bullets: [
      "I conducted independent research to determine whether the Genuine Progress Indicator (GPI) offers a more comprehensive measure of economic progress compared to traditional indicators like GDP, HDI, GNI, government budgets, and money supply. By evaluating the limitations of these conventional metrics in accounting for environmental sustainability, social well-being, and income inequality, I explored how GPI can address these gaps. My study demonstrates that GPI provides a more accurate reflection of true societal progress, highlighting its potential to better capture the multifaceted aspects of economic development.",
    ],
    images: [],
    buttons: [],
  },
  {
    name: "John Locke Brief",
    pic: require("./images/placeholder.png"),
    timeline: "Sept. 2023",
    title: "Independent Research",
    category: Category.Economics,
    bullets: [
      "In my paper, What Would Happen if We Banned Billionaires?, I explore both sides of the debate surrounding a potential ban on billionaires. On one hand, banning them could lead to wealth redistribution, lower poverty, and reduced political and environmental harm. On the other hand, it may lead to economic instability, increased unemployment, and a decline in innovation. While banning billionaires might seem like a solution to inequality, I argue that the negatives—such as hindering entrepreneurship and economic growth—outweigh the benefits, and a more balanced approach is necessary. ",
    ],
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
    title: "Participant",
    category: Category.Building,
    bullets: [
      "During this project, I gained hands-on experience in soldering, CAD design, and windmill construction, while also developing a productivity-boosting website tailored to meet diverse learning needs. Additionally, I contributed to a civil engineering initiative focused on sustainable urban planning, applying practical skills to address real-world challenges in creating more eco-friendly and efficient urban environments.",
    ],
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
    name: "Up SportsHub",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Interests,
    bullets: [
      "I launched Up SportsHub in January 2024 with the goal of upcycling athletic equipment and promoting sports culture across various social segments. Through this initiative, I collected over 1000 items, including board games, racquets, skates, and other athletic gear. I also raised INR 1.3 lakhs, which was used to fulfill the wish lists of NGOs supporting marginalized communities in the Delhi-NCR region.",
    ],
    images: upsportImages,
    buttons: [],
  },
  {
    name: "More than play",
    pic: require("./images/placeholder.png"),
    timeline: "Current",
    title: "Cofounder",
    category: Category.Interests,
    bullets: [
      "As the Lead Student Volunteer for More Than Play, I work to teach life skills through sports to children from less economically stable backgrounds. By using team games, I've helped improve their conflict resolution, confidence, and leadership skills. I’ve also recruited and trained new volunteers, shared best practices on leadership development through sports, and organized a cricket tournament where coaches conducted training sessions for the children.",
    ],
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
