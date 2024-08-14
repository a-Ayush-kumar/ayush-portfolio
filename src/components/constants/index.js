import { uas } from "../../assets/images";
import {
  car,
  contact,
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
  tailwindcss,
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
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
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
];

export const socialLinks = [
  // {
  //   name: "Contact",
  //   iconUrl: contact,
  //   link: "https://github.com/UASDTU/DARPA-2024-Challenge-1/tree/ayush",

  // },
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
];

export const projects = [
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Comparision App",
    description:
      "Designed and built a web app for comparing some cars in the market, streamlining the car-buying process.",
    link: "https://github.com/a-Ayush-kumar/Zero-One-solution",
  },
];
