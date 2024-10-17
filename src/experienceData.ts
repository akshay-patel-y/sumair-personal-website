export enum Category {
  Software = "Software Engineering",
  Product = "Product",
  VentureCapital = "Venture Capital",
  Leadership = "Leadership",
  Education = "Education Equity & Policy Initiatives",
  Economics = "Behavioral and Financial Ecnomics Explorations",
  Research = "Research"
}
export interface Experience {
  name: string;
  pic: string;
  description?: string;
  timeline: string;
  title: string;
  bullets: string[];
  category: Category;
}

export const experiences: Experience[] = [
  {
    name: "Typeface",
    pic: require("./images/Typeface.jpeg"),
    timeline: "Sept. 2023 - Current",
    title: "Software Engineer",
    category: Category.Software,
    bullets: ["Building an Enterpise grade AI marketing agent"],
  },
  {
    name: "Coinbase",
    pic: require("./images/CB.png"),
    timeline: "June 2022 - Sept. 2022",
    title: "Software Engineering Intern - Security and Resilience Team",
    category: Category.Software,
    bullets: [
      "Developed high-performance asset filtering API using gRPC and Go, enhancing service reliability and query speed by 40%",
      "Architected and implemented full-stack asset management solution using React, MongoDB, and Go, resulting in 60% faster sub-attribute searches and improved user productivity",
      "Led decomposition of Golang microservices across 5 financial products, streamlining architecture and accelerating deployment by 30%",
      "Spearheaded creation of product service map, identifying 15 critical security vulnerabilities and strengthening disaster recovery protocols",
    ],
  },
  {
    name: "Pear VC",
    pic: require("./images/Pear.png"),
    description:
      "Company: 0 to 1 VC fund partnering with entrepreneurs from day one. Investments include Doordash, Guardant Health, and Branch",
    timeline: "Oct. 2020 - Current",
    title: "Venture Scout",
    category: Category.VentureCapital,
    bullets: [
      "Deals Sourced: Brutus AI (PearX) -> Acquisition by Forta Health; Advex AI (PearX) -> Seed from Emmerson Collective and Kleiner Perkins; Poppin (Seed); My AI Front Desk (Offered PearX, UC Berkeley $50k Competition Winner).",
      "Sourcing pre-seed to seed-stage start-ups and conducting due diligence to evaluate investment opportunities.",
      "Analyzed 25+ crypto white papers for due diligence on potential investments across L1’s, DEXs, & Liquidity Staking protocols",
      "Lead monthly office hours for web3 founders at Capitol Factory (Texas) & in the Bay Area to strengthen founder networks",
      "Conduct internal research on emerging market trends covering asset & application interoperability, ZKs, and scalability solutions",
    ],
  },
  {
    name: "Pantera Capital",
    pic: require("./images/Pantera.png"),
    description:
      "Company: 0 to 1 VC fund partnering with entrepreneurs from day one. Investments include Doordash, Guardant Health, and Branch",
    timeline: "Jan. 2023 - Current",
    title: "Investment Analyst",
    category: Category.VentureCapital,
    bullets: [
      "Working with the investment team to drive internal research on asset & application interoperability, ZKs, and scalability",
    ],
  },
  {
    name: "Bonfire",
    pic: require("./images/Bonfire.png"),
    timeline: "Nov. 2021 - Sept. 2023",
    title: "Software Engineer",
    category: Category.Software,
    bullets: [
      "Developed and shipped various key features (NFT Showcase, Block Interface) that enabled artists such as Daniel Allan to launch NFT on platform",
      "Engineered MetaMask/WalletConnect integration on platform using Next.Js, GraphQL, web3-token, Rally API, Prisma",
      "Used customer feedback and collaborated with design teams to prioritize implementation solutions",
      "Developed and shipped various features & projects into production for creators such as Daniel Allan, Odesza, DAOs, etc.",
      "Architected embed block tool template to enable creators to surface custom content with low friction/error rate",
    ],
  },
  {
    name: "Kleiner Perkins",
    pic: require("./images/KP.png"),
    description: "Summer 2022",
    timeline: "April. 2022 - Current",
    title: "Kleiner Perkins Engineering Fellow 2022",
    category: Category.VentureCapital,
    bullets: ["KP Fellow through Bonfire"],
  },
  {
    name: "Amazon",
    pic: require("./images/Amazon.png"),
    description: "Feature Migration on Music Mobile Platform",
    timeline: "Aug. 2021 - Nov. 2021",
    title: "Software Development Engineering Intern",
    category: Category.Software,
    bullets: [
      "Migrated Amazon Music user settings interface from Objective-C/Swift to SwiftUI with MVVM, improving usability",
      "Updated and implemented settings navigation architecture and simplified adding new pages to nodes on a tree",
      "Boosted engagement by integrating Bauhaus components onto new settings page, exceeding Q4 goals",
    ],
  },
  {
    name: "GSV Ventures",
    pic: require("./images/GSV.png"),
    description:
      "GSV Ventures is a female-led, multi-stage venture capital firm investing in the $7+ trillion education technology sector.",
    timeline: "June. 2021 - Aug. 2021",
    title: "Venture Fellow",
    category: Category.VentureCapital,
    bullets: [
      "Building relationships between Berkeley Student organizations and the Venture fund for summer bootcamp",
      "Sourcing industry agnostic early-stage start-ups and founders",
    ],
  },
  {
    name: "Zighra",
    pic: require("./images/Zighra.png"),
    description:
      "Zighra is a leading provider of On-Device AI solutions for continuous authentication and fraud detection on mobile and web applications.",
    timeline: "May. 2021 - Aug. 2021",
    title: "Software Engineering Intern",
    category: Category.Software,
    bullets: [
      "Developed & deployed Spur, a mobile cross-platform (iOS, Android) marketplace for users to view & purchase online classes.",
      "Prototyped, designed, & developed end-to-end user flow from login (authentication, OTP, and storage), to payment, to upcoming events notification & zoom re-direct on app. (React Native, Stripe, Postman, React Navigation, Node.Js, AdobeXD)",
      "Integrated 4 payment flows via Stripe, handling $25k+ transactions per month & allowing users to view & purchase packages.",
      "Created a product roadmap for integration of NFT/FT’s onto platform and reduce payment barriers for users.",
      "Optimized API caching for payment flow reducing the number of HTTP requests by over 33% per transaction.",
      "Analyzed market trends and shifted company focus from entertainment creators to small businesses and Edtech to drive revenue",
    ],
  },
  {
    name: "Savitude",
    pic: require("./images/Savitude.png"),
    description:
      "Savitude provides an inclusive fashion technology solution for brands who want to serve a broader audience.",
    timeline: "Feb. 2021 - May 2021",
    title: "Software Engineering Intern",
    category: Category.Software,
    bullets: [
      "Optimized bottlenecks in design workflow & reduced sketching analytics time by 75% by developing a modal tutorial system",
      "Improved user experience by revamping the frontend interface for rollout using ReactJs, Chakra-UI, & Material UI.",
      "Converted user feedback into user stories, & process flows wireframes for development.",
    ],
  },
  {
    name: "Avance Venture Labs",
    pic: require("./images/Avance.jfif"),
    description:
      "Avance is a start-up lab geared towards creating sustainably profitable software ideas, quickly, and systematically.",
    timeline: "Dec. 2020 - Feb. 2021",
    title: "Product Manager",
    category: Category.Product,
    bullets: [
      "Led industry deep dive & competitor analysis on online financial institutions to develop product proposals & requirements",
      "Defined key product features in Figma with cross-functional team of marketers & software engineers using Agile methodologies",
    ],
  },
  {
    name: "1910 Genetics",
    pic: require("./images/1910.png"),
    description:
      "1910 Genetics is a startup focused on AI-driven small molecule and protein design.",
    timeline: "June, 2020 - August,2020",
    category: Category.Software,
    title:
      "Machine Learning Infrastructure Engineering Intern (Y Combinator W2018)",
    bullets: [
      "Created architecture overviews for ML pipelines, conglomerating reusable components (data base, data transformation, data validation, model training, model evaluation, and serving infrastructure) for the machine learning platform Noelle.",
      "Developed intranet using ReactJS/HTML/CSS for documented architecture/product demo for LBDD/SBDD ML models and researched hyperparameter tuning methods employed for the hit-optimization generative neural network at 1910.",
    ],
  },
  {
    name: "Los Angeles County Department of Public Health",
    pic: require("./images/LA.gif"),
    description:
      "LA County Department of Public Health is currently performing research regarding the proximity of cell towers to schools and hospitals.",
    timeline: "April. 2020 – May 2020",
    title: "Data Analyst",
    category: Category.Software,
    bullets: [
      "Documented procedures and processed raw data to create an interactive tableau dashboard for a research paper",
      "Performed statistical analyses in RStudio to determine the density of cell towers in proximity to schools & hospitals.",
      "Utilized sqldf, readxl, and lubricate packages, and generated SQL queries for statistical analysis.",
    ],
  },
  {
    name: "Blendoor",
    pic: require("./images/blendoor.PNG"),
    description:
      "Company: Blendoor evaluates companies based on factors such as equity metrics, diversity, recruiting practices, leadership, among others to generate a 'BlendScore' for each company.",
    timeline: "Jan. 2020 - May 2020",
    title: "Software Developer",
    category: Category.Software,
    bullets: [
      "BlendScore Automation Project: In a team of 5 engineers on the M.E.T Bulletin Board (Technical Consulting Organization), our goal was to automate the BlendScore calculation through a web interface where admin users can edit certain qualitative and quantitative variables related to a company in order to produce an updated BlendScore. After updating Blendoor's score calculation algorithms, we built a RESTful API with python and Flask to run backend python scripts that would execute SQL queries to communicate with Blendoor's internal database and used AngularJS, TypeScript, and HTML/CSS to build the frontend UI",
    ],
  },
  {
    name: "Ginger Analytics, LoopChat/LoopPay",
    pic: require("./images/Loop.png"),
    description:
      "LoopChat is a Berkeley based fintech focused on convenience, inclusion and efficiency in the financial system.",
    timeline: "Aug. 2019 - Feb. 2020",
    title: "Product Management Intern",
    category: Category.Product,
    bullets: [
      "Assisted creation of the architecture for various mini-apps available on LoopChat such as club and class database.",
      "Streamlined business strategies focused on increasing user downloads and retention through gamifying the platform.",
      "Implemented procedures that increased downloads by 232% and marketed to various departments at UC Berkeley.",
      "Proposed simplification plan of UI/UX of the app and presented to internal and external stakeholders.",
    ],
  },
  {
    name: "Our Lunch Lady",
    pic: require("./images/oll.PNG"),
    description:
      "Our Lunch Lady allows students to purchase food from nearby restaurants and boosts the local economy while providing better food options to students in schools",
    timeline: "Aug, 2017 - Aug, 2018",
    title: "Co-Founder",
    category: Category.VentureCapital,
    bullets: [
      "Scheduled meetings at Capitol factory to develop a web-app and pitched to investors and mentors.",
      "Developed financial models based different market penetration predictions and COGS and developed a marketing plan.",
      "Executed a proof of concept trial for a 2-week period at Westlake High School that generated $800 in profit.",
      "Analyzed the feedback from consumers about the service and quality to make future improvements",
    ],
  },
  {
    name: "Berkeley Venture Capital",
    pic: require("./images/bvc.png"),
    description:
      "BVS is an undergraduate community empowered to learn and work with leading venture capitalists and entrepreneurs.",
    timeline: "Jan. 2020 - Dec 2022",
    title: "Venture Capital Intern",
    category: Category.VentureCapital,
    bullets: [
      "Underwent six-week venture capital curriculum with an emphasis on due diligence, and investment summary.",
      "Collaborating with local venture capital firms/industry leaders to organize events/speaker series throughout campus",
    ],
  },
];
