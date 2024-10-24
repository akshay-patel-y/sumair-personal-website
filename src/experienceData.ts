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
    name: "Thrive Today – Where Education Meets Empathy",
    pic: require("./images/placeholder.png"),
    timeline: "Jan 2024 – present",
    title: "Founder & Lead Organizer",
    category: Category.Education,
    bullets: [
      "As the founder of Thrive Today, I wanted to address a gap in India’s Right to Education Act—one that overlooks the importance of soft skills in shaping a child’s success. In weekly sessions with 6th and 7th graders from marginalized backgrounds, I’ve built trust through role-playing games and personal vulnerability, helping these students gain confidence and navigate challenges in a supportive environment. This work allowed me to pass leadership to younger students, ensuring the program continues to grow and foster integration across socioeconomic lines.",
    ],
    images: thriveImages,
    buttons: [],
  },
  {
    name: "Research on EWS Inclusivity – Creating a Blueprint for Change",
    pic: require("./images/placeholder.png"),
    timeline: "Sept 2024 – present",
    title: "Researcher",
    category: Category.Education,
    bullets: [
      "Driven by a commitment to education equity, I conducted research on the challenges faced by Economically Weaker Section (EWS) students in private schools. By collecting and analyzing data, I developed a blueprint for enhancing inclusivity and academic success in schools, suggesting practical steps to foster a more welcoming environment for all students.",
    ],
    images: [],
    buttons: [],
  },
  {
    name: "Confederation of Indian Industry (CII) Education Panel – Amplifying Student Voices",
    pic: require("./images/placeholder.png"),
    timeline: "July. 2024",
    title: "Research Associate",
    category: Category.Education,
    bullets: [
      "Serving as one of four student representatives on the Confederation of Indian Industry Education Panel, I’ve been able to provide recommendations to improve public education in Delhi. My current focus is a white paper on social and emotional well-being, which will be submitted to the Delhi State Government, contributing to a more holistic approach to education.",
    ],
    images: [],
    buttons: [],
  },
  {
    name: "Cognitive Biases in Sports – Blending Psychology and Economics",
    pic: require("./images/placeholder.png"),
    timeline: "May – Jun 2024",
    title: "Independent Research",
    category: Category.Economics,
    bullets: [
      "In my independent research, I explore how athletes, under the pressure of time, often rely on intuitive thinking—leading to cognitive biases that influence decision-making. This exploration of cognitive biases blends my interest in psychology and economics, highlighting the real-world impact of decision-making under pressure and offering strategies to mitigate these biases for better athletic performance."],
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
    name: "Exploring Economic Progress – Beyond GDP",
    pic: require("./images/placeholder.png"),
    timeline: "Dec 2023 – Jan 2024",
    title: "Independent Research",
    category: Category.Economics,
    bullets: [
      "My passion for economics drove me to investigate the Genuine Progress Indicator (GPI) as an alternative to traditional economic metrics. Through my research, I argued that GPI offers a more comprehensive measure of progress by accounting for sustainability and social well-being, challenging conventional views on how we evaluate economic success.",
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
    name: "Makers Asylum – From Curiosity to Creation",
    pic: require("./images/placeholder.png"),
    timeline: "Mar – Jun 2024",
    title: "Participant & Innovator",
    category: Category.Building,
    bullets: [
      "The GuitarGlove project is where my passion for creativity and innovation comes to life. By combining LEDs and sensors, I created a glove that simplifies learning guitar chords. This hands-on project at Makers Asylum not only showcased my curiosity and problem-solving skills but also my desire to make learning more accessible and fun.",
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
    timeline: "Summer 2023",
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
    name: "GetItDone – Personalized Learning for Diverse Needs",
    pic: require("./images/placeholder.png"),
    timeline: "July. 2023",
    title: "Cofounder",
    category: Category.Building,
    bullets: [
      "Cofounding GetItDone allowed me to merge my technical skills with my passion for inclusivity. This productivity app personalizes learning for students with diverse needs, using AI to offer tailored teaching methods and sensory tools. Through this project, I sought to make education accessible and engaging for everyone, from neurodivergent students to those with unique learning styles."    ],
    images: [],
    buttons: [
      {
        src: "https://docs.google.com/document/d/1pQ0SALnP8wuhvEpS6GIJFkLa8ihyO-o1JebpeBhO2B0/edit?tab=t.0",
        label: "Project Link",
      },
    ],
  },
  {
    name: "Up SportsHub – Building Community Through Sports",
    pic: require("./images/placeholder.png"),
    timeline: "Jan 2024 – present",
    title: "Founder",
    category: Category.Interests,
    bullets: [
      "Upcycling athletic equipment and promoting sports culture across social segments led me to found Up SportsHub. In January 2024, I began collecting donations and athletic gear to support NGOs serving marginalized communities. The initiative, which raised INR 1.3 lakhs, allowed children across Delhi-NCR to access resources that enhance both their physical and emotional well-being.",
    ],
    images: upsportImages,
    buttons: [],
  },
  {
    name: "More Than Play – Empowering Children Through Sports",
    pic: require("./images/placeholder.png"),
    timeline: "Apr 2023 – present",
    title: "Lead Student Volunteer",
    category: Category.Interests,
    bullets: [
      "As the Lead Student Volunteer for More Than Play, I’ve used sports as a tool to teach life skills like leadership, conflict resolution, and confidence to children from less economically stable backgrounds. Organizing a cricket tournament and recruiting volunteers have been pivotal in extending the initiative’s impact, showing how play can be more than just fun—it’s a platform for growth."    ],
    images: [],
    buttons: [
      {
        src: "https://www.instagram.com/p/C5umngqPIFa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
        label: "Featured!",
      },
    ],
  },
  {
    name: "Sports pics",
    pic: require("./images/placeholder.png"),
    timeline: "Sept. 2023",
    title: "Me",
    category: Category.Interests,
    bullets: ["Fill"],
    images: [],
    buttons: [],
  },
];
