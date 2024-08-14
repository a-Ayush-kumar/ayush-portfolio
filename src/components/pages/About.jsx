import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { Link } from "react-router-dom";

import { experiences, skills, socialLinks } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import CTA from "../CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ayush
        </span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          A passionate enthusiast for mechanical engineering from Delhi
          Technological University and have found a fascinating connection
          between my love of digital web development and my passion for
          real-world system designs. While gears and pixels may appear worlds
          apart, linking them offers thrilling to me.
        </p>
      </div>
      <div className=" py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Exprience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            An aspiring Mechanical Engineering student with a keen interest in
            web development, I’ve actively contributed to innovative projects
            within my research team. Whether it’s frame designing or GUI
            development, I’ve honed valuable problem-solving skills. Moreover,
            my hands-on experience with real-life projects equips me to tackle
            challenges effectively. I’m enthusiastic about applying my knowledge
            and collaborating with dynamic teams to further enhance my skills
            and gain valuable experience.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
      <hr className="border-slate-200" />
      <div className=" py-10 flex flex-col">
        <h3 className="subhead-text">My Social!</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {socialLinks.map((link) => (
            <div className="block-container w-20 h-20" key={link.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
             
                  <Link
                  to={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                   <img
                  src={link.iconUrl}
                  alt={link.name}
                  className=" object-contain"
                />

                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
