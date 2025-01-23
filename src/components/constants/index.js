import { uas, zipfile } from "../../assets/images";
import {
  bootstrapicon,
  car,
  contact,
  cpp,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nodejs,
  react,
  three,
  excel,
  ansys,
  tailwindcss,
  mongodb,
  xflr,
  eg,
  ppt,
  solidworks,
  mapbox,
  printtd,
  ecalc,
  twitter,
  hero,
  mediad,
  gui,
  charizard,
  eft,
  nextjs,
  nx,
  resume,
} from "../../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: bootstrapicon,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: three,
    name: "React-three-fiber",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: mapbox,
    name: "mapbox",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "next js",
    type: "Full stack",
  },
];
export const nontechskills = [
  {
    imageUrl: solidworks,
    name: "SolidWorks",
    type: "CAD development",
  },
  {
    imageUrl: nx,
    name: "nx",
    type: "CAD development",
  },
  {
    imageUrl: excel,
    name: "Ms Excel",
    type: "Database management",
  },
  {
    imageUrl: ansys,
    name: "Ansys workbench",
    type: "CFD analysis",
  },
  {
    imageUrl: xflr,
    name: "xflr5",
    type: "Fixed wing analysis",
  },
  {
    imageUrl: eg,
    name: "Engineering Drawing",
    type: "Engineering Drawing",
  },
  {
    imageUrl: ppt,
    name: "ppt",
    type: "project development",
  },
  {
    imageUrl: ecalc,
    name: "Maths",
    type: "Drone requirement analysis",
  },
  {
    imageUrl: printtd,
    name: "3d print",
    type: "3d print",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "UAS-DTU",
    icon: uas,
    iconBg: "#ffffff",
    date: "August 2023 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "As the visionary behind frontend development, I meticulously designed an elegant user interface, seamlessly integrating Mapbox API. The result? A pristine and intuitive UI that captivates users and beckons them to explore maps effortlessly.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Airframes Technician",
    company_name: "UAS-DTU",
    icon: uas,
    iconBg: "#ffffff",
    date: "August 2023 - June 2024",
    points: [
      "Developed and maintained CAD requirements using SolidWorks, ensuring high-quality designs and precise engineering specifications. Efficiently managed project timelines and collaborated with cross-functional teams to deliver accurate and innovative CAD models, significantly enhancing product development and performance.",
      "Mastered airfoil analysis using XFLR5 and conducted initial plane simulations on drone software. This hands-on experience allowed me to optimize aerodynamic performance, ensuring effective and accurate design implementations.",
      "Designed and prepared the drone for flight readiness, ensuring all systems were optimal. Additionally, contributed to the development and integration of Vertical Takeoff and Landing (VTOL) technology, significantly enhancing the drone's versatility and performance in varied operational environments.",
      "Actively engaged in design reviews and research, offering constructive feedback to peers. This collaboration helped refine project outcomes, fostered innovative solutions, and strengthened team synergy and project quality.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/a-Ayush-kumar",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ayush-kumar-b75713286",
  },
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://x.com/ayushkumar102",
  },
];

export const projects = [
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Comparision App",
    description:
      "Designed and built a web app for comparing some cars in the market, streamlining the car-buying process !!  Apology the website have not been hosted So live link will direct you to the github page.",
    link: "https://github.com/a-Ayush-kumar/Zero-One-solution",
    github: "https://github.com/a-Ayush-kumar/Zero-One-solution",
  },

  {
    iconUrl: hero,
    theme: "btn-back-black",
    name: "Text app",
    description:
      "A project born out of curiosity and a passion for learning! As a student developer, I embarked on this journey to create my first project, blending creativity with coding. Text Analyzer is designed to be a fun and practical tool that lets you play with words and explore various text manipulations.",
    link: "https://react-text-app.netlify.app",
    github: "https://github.com/a-Ayush-kumar/aritesh",
  },
  {
    iconUrl: mediad,
    theme: "btn-back-red",
    name: "Media Downloader",
    description:
      "A versatile media downloader app that allows you to download and import files directly to your system. Currently, it features a Spotify song downloader and a YouTube video downloader.",
    link: "https://musical-sunflower.netlify.app/",
    github: "https://github.com/a-Ayush-kumar/media-downloader",
  },
  {
    iconUrl: gui,
    theme: "btn-back-green",
    name: "Darpa Triage Challenge Phase-I || My Contribution",
    description:
      "Developed a user-friendly frontend GUI for a research team using React.js, enhancing their data visualization and interaction capabilities, and significantly improving their workflow efficiency and user experience.",
    link: "https://github.com/UASDTU/DARPA-2024-Challenge-1/tree/ayush",
    github: "https://github.com/UASDTU/DARPA-2024-Challenge-1/tree/ayush",
  },
  {
    iconUrl: nextjs,
    theme: "btn-back-blue",
    name: "Next JS innovoice app",
    description:
      "Created an invoice page using Next.js, responsive design, user-friendly interface, dynamic data handling, real-time updates, seamless navigation, efficient and performant, integrated payment gateway.",
    link: "https://nextjs-invoice-ayush.vercel.app/",
    github: "https://github.com/a-Ayush-kumar/nextjs-invoice",
  },
];
export const mechanicalprojects = [
  {
    iconUrl: charizard,
    theme: "btn-back-black",
    name: "Fixed wing deployment",
    description:
      "Successfully developed a fixed wing aircraft, starting with detailed wing analysis using XFLR5. I then progressed to creating its CAD model and performed performance analysis using ANSYS Workbench. After adjusting the design requirements under specific conditions, I implemented the project in the real world, achieving a positive outcome on the second attempt.",
    link: "https://photos.app.goo.gl/F5A1L8NAmRoH9FHA8",
  },
  {
    iconUrl: eft,
    theme: "btn-back-blue",
    name: "Assembly and design of CAD - EFT 616",
    description:
      "successfully designed and integrated a payload drop mechanism into the drone, effectively assisting the team in achieving our goal of illustrating this critical feature used by the team UAS-DTU in SUAS 2024. This accomplishment enhanced our project's capabilities and demonstrated practical application in real-world scenarios",
    link: zipfile,
  },
];
export const resumepage = [
  {
    iconUrl: resume,
    theme: "btn-back-black",
    name: "Resume",
    description: ".",
    link: "https://drive.google.com/file/d/1OpVju344ShPJdZQd7BZ1h2ogJ46eb4eR/view?usp=sharing",
  },
];
