import thrive1 from "./images/Thrive1.jpeg";
import thrive2 from "./images/Thrive2.jpeg";
import thrive3 from "./images/Thrive3.jpeg";
import thrive4 from "./images/Thrive4.jpeg";

import upsport1 from "./images/Upsport1.jpeg";
import upsport2 from "./images/Upsport2.jpeg";
import upsport3 from "./images/Upsport3.jpeg";
import upsport4 from "./images/Upsport4.jpeg";

export enum Category {
  Education = "Empowering Through Education",
  Economics = "Economics in Action",
  Building = "Curiosity to Creation",
  Interests = "Where You’ll Find Me",
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
    pic: require("./images/thriveTodayPlaceholder.webp"),
    timeline: "Jan 2024 – present",
    title: "Founder & Lead Organizer",
    category: Category.Education,
    bullets: [
      "As the founder of Thrive Today, I wanted to address a gap in India’s Right to Education Act—one that overlooks the importance of soft skills in shaping a child’s success. In weekly sessions with 6th and 7th graders from marginalized backgrounds, I built trust through role-playing games and personal vulnerability, helping these students gain confidence and navigate challenges in a supportive environment. This initiative allowed me to mentor younger students, empowering them to become leaders themselves as they continue to foster integration across socioeconomic lines. Thrive Today reflects my commitment to education equity and my belief in the power of empathy and communication.",
    ],
    images: thriveImages,
    buttons: [],
  },
  {
    name: "Research on EWS Inclusivity – Creating a Blueprint for Change",
    pic: require("./images/ewsPlaceholder.webp"),
    timeline: "Sept 2024 – present",
    title: "Researcher",
    category: Category.Education,
    bullets: [
      "Driven by a commitment to education equity, I conducted research on the challenges faced by Economically Weaker Section (EWS) students in private schools. By collecting and analyzing data, I developed a blueprint for enhancing inclusivity and academic success in schools, suggesting practical steps to foster a more welcoming environment for all students. This project expanded my understanding of systemic educational barriers and fueled my passion for using data-driven insights to advocate for change. Through this research, I aimed to create actionable solutions that could bridge gaps in educational opportunities for underserved students.",
    ],
    images: [],
    buttons: [],
  },
  {
    name: "Confederation of Indian Industry (CII) Education Panel – Amplifying Student Voices",
    pic: require("./images/CII.webp"),
    timeline: "July. 2024",
    title: "Research Associate",
    category: Category.Education,
    bullets: [
      "As one of four student representatives on the Confederation of Indian Industry Education Panel, I have had the privilege of contributing to important conversations around public education in Delhi. My role on the panel allowed me to provide recommendations to improve the education system, particularly in the realm of social and emotional well-being. Currently, I am working on a white paper that will be submitted to the Delhi State Government, advocating for a more holistic approach to education. This experience deepened my understanding of policy-making and taught me how to amplify student voices to influence long-term educational reform.",
    ],
    images: [],
    buttons: [],
  },
  {
    name: "Cognitive Biases in Sports – Blending Psychology and Economics",
    pic: require("./images/cbadm.webp"),
    timeline: "May – Jun 2024",
    title: "Independent Research",
    category: Category.Economics,
    bullets: [
      "In my independent research on cognitive biases in sports, I explored how athletes, under the pressure of time, often rely on intuitive thinking—leading to cognitive biases that influence decision-making. This project allowed me to blend my interests in psychology and economics, demonstrating how different fields can converge to address real-world issues. By analyzing these biases, I proposed strategies for athletes to mitigate them and improve performance. This research exemplifies my curiosity-driven approach to solving problems and my passion for understanding the human mind’s role in critical decision-making.",
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
    name: "Exploring Economic Progress – Beyond GDP",
    pic: require("./images/eep.webp"),
    timeline: "Dec 2023 – Jan 2024",
    title: "Independent Research",
    category: Category.Economics,
    bullets: [
      "My passion for economics led me to investigate the Genuine Progress Indicator (GPI) as an alternative to traditional economic metrics. In this research, I challenged conventional measures like GDP and argued that GPI offers a more comprehensive evaluation of progress by factoring in sustainability and social well-being. This project fueled my drive to rethink entrenched systems and consider innovative approaches to societal progress. By advocating for GPI, I sought to contribute to a more balanced understanding of economic success, aligning with my belief in holistic solutions that prioritize long-term well-being.",
    ],
    images: [],
    buttons: [
      {
        src: require("./images/gpi.pdf"),
        label: "Paper Link",
      },
    ],
  },
  {
    name: "John Locke Brief",
    pic: require("./images/billion.webp"),
    timeline: "Sept. 2023",
    title: "Independent Research",
    category: Category.Economics,
    bullets: [
      "In my paper, What Would Happen if We Banned Billionaires?, I explored both sides of the debate surrounding a potential ban on billionaires. On one hand, banning them could lead to wealth redistribution, lower poverty, and reduced political and environmental harm. On the other hand, it may lead to economic instability, increased unemployment, and a decline in innovation. While banning billionaires might seem like a solution to inequality, I argued that the negatives—such as hindering entrepreneurship and economic growth—outweigh the benefits. This project reflects my ability to critically assess complex issues from multiple angles and offer balanced, data-driven insights.",
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
    name: "Anicut Capital – Exploring the World of Venture Capital",
    pic: require("./images/anicut.webp"),
    timeline: "Jun 2024",
    title: "Intern",
    category: Category.Economics,
    bullets: [
      "During my internship at Anicut Capital, I shadowed the angel fund team and learned the intricacies of early-stage investments. Over the course of three weeks, I prepared detailed notes for two potential deals, offering insights into founder backgrounds, investor landscapes, and post-money valuations. This experience deepened my understanding of how startups are evaluated, what metrics matter, and how financial support can drive innovation. It also connected to my broader interest in using entrepreneurship to drive social impact, showing me how strategic investments can help groundbreaking ideas flourish.",
    ],
    images: [],
    buttons: [],
  },
  {
    name: "Accenture @The Forage – Using Data to Drive Strategic Decisions",
    pic: require("./images/accenture.webp"),
    timeline: "Jun 2023",
    title: "Virtual Internship",
    category: Category.Economics,
    bullets: [
      "During my virtual internship with Accenture, I analyzed seven data sets to uncover key consumption trends and inform strategic marketing decisions. I then prepared a PowerPoint and video presentation to communicate these insights to Accenture’s stakeholders, showcasing how data analysis can drive business growth. This experience reinforced my passion for data-driven decision-making, combining problem-solving with clear communication to deliver actionable results.",
    ],
    images: [],
    buttons: [],
  },

  {
    name: "Makers Asylum – From Curiosity to Creation",
    pic: require("./images/guitar.webp"),
    timeline: "Mar – Jun 2024",
    title: "Participant & Innovator",
    category: Category.Building,
    bullets: [
      "The GuitarGlove project is where my passion for creativity and innovation comes to life. By combining LEDs and sensors, I created a glove that simplifies learning guitar chords, making the instrument more accessible to beginners. This hands-on project at Makers Asylum allowed me to apply my technical skills to solve a practical problem, while also nurturing my curiosity and love for STEM. It demonstrated my belief that technology can make learning more engaging and accessible for everyone, showcasing my commitment to using innovation to empower others.",
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
    name: "GetItDone – Personalized Learning for Diverse Needs",
    pic: require("./images/getitdone.webp"),
    timeline: "July. 2023",
    title: "Cofounder",
    category: Category.Building,
    bullets: [
      "Cofounding GetItDone allowed me to merge my technical skills with my passion for inclusivity in education. This productivity app personalizes learning for students with diverse needs, using AI to offer tailored teaching methods and sensory tools. Through this project, I aimed to make education accessible and engaging for everyone, from neurodivergent students to those with unique learning styles. GetItDone embodies my belief in the power of personalized learning and highlights my desire to create solutions that cater to individuals, ensuring that no one is left behind.",
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
    name: "Up SportsHub – Building Community Through Sports",
    pic: require("./images/up.webp"),
    timeline: "Jan 2024 – present",
    title: "Founder",
    category: Category.Interests,
    bullets: [
      "Upcycling athletic equipment and promoting sports culture across social segments led me to found Up SportsHub. In January 2024, I began collecting donations and athletic gear to support NGOs serving marginalized communities. This initiative, which raised INR 1.3 lakhs, allowed children across Delhi-NCR to access resources that enhance both their physical and emotional well-being. Up SportsHub combines my passion for sports and community-building, demonstrating how sports can serve as a tool for inclusion and empowerment, particularly for those who face economic barriers.",
    ],
    images: upsportImages,
    buttons: [],
  },
  {
    name: "More Than Play – Empowering Children Through Sports",
    pic: require("./images/more.webp"),
    timeline: "Apr 2023 – present",
    title: "Lead Student Volunteer",
    category: Category.Interests,
    bullets: [
      "As the Lead Student Volunteer for More Than Play, I’ve used sports as a tool to teach life skills like leadership, conflict resolution, and confidence to children from less economically stable backgrounds. Organizing a cricket tournament and recruiting volunteers have been pivotal in extending the initiative’s impact. This experience highlighted my belief in the transformative power of sports, not just as a recreational activity, but as a platform for personal growth. Through More Than Play, I’ve seen firsthand how sports can empower individuals, build character, and create opportunities for leadership.",
    ],
    images: [],
    buttons: [
      {
        src: "https://www.instagram.com/p/C5umngqPIFa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
        label: "Featured!",
      },
    ],
  },
];
