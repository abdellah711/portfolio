import { CheckCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import type { ReactNode } from "react";

const timeline: TimelineProps[] = [
  {
    title: "Software Engineering Degree",
    date: "2018 - 2023",
    description:
      "I completed my computer science engineering degree in Computer Science at ENSA (National Schools of Applied Sciences), where I gained foundational knowledge in software development, algorithms and system design",
  },
  {
    title: "Freelancer",
    date: "2020 - 2023",
    description:
      "While studying, I got my hands dirty by building several web and mobile applications for different local clients.",
  },
  {
    title: "Full Stack Developer Intern",
    date: "August 2022 - October 2022",
    description:
      "I joined the Ministry of Finance as an intern, where I worked on developing an internal web application using React, ASP.NET Core, and SQL Server, this role allowed me to contribute to a critical project aimed at improving government services through modern technologies",
  },
  {
    title: "Front End Developer Intern",
    date: "March 2023 - August 2023",
    description:
      "I started my internship at a multi-national company as a front-end developer, where I contributed to developing SDKs for an e-commerce platform using React and TypeScript",
  },
  {
    title: "Winner of the Best-Overall Project - Refine + Dev.to Hackathon",
    date: "July 2023 - August 2023",
    description:
      "I participated in Refine + Dev.to Hackathon, where I developed a solution to integrate Refine (a CRUD library for React) in Expo projects, and I earned the Best-Overall project.",
  },
  {
    title: "Front End Engineer",
    date: "September 2023 - Present",
    description:
      "After my internship, I joined the same multi-national company as a Front End Engineer where I continue to develop SDKs and applications for an E-commerce platform using React and Typescript",
  },
];

export default function ExperienceTimeline() {
  return (
    <>
      <ul className="timeline timeline-vertical timeline-compact">
        {timeline.map((item, index) => (
          <Timeline {...item} isLatest={index === timeline.length - 1} />
        ))}
      </ul>
      <p className="py-6 text-xl text-base-content/90">Be part of my story</p>
    </>
  );
}

type TimelineProps = {
  title: ReactNode;
  date: string;
  description: string;
  isLatest?: boolean;
};

const Timeline = ({
  title,
  date,
  description,
  isLatest = false,
}: TimelineProps) => {
  return (
    <li>
      <hr className="bg-white/50" />
      <div className="timeline-middle">
        <CheckCircleIcon className="size-5 text-green-500" />
      </div>
      <div className="timeline-end my-6">
        <div className="timeline-box max-w-prose space-y-2 border border-white/10 bg-base-200 p-7">
          <p className="text-xl font-medium text-white/80">{title}</p>
          <p className="text-base-content/70">{date}</p>
          <p className="text-base-content/90">{description}</p>
        </div>
      </div>
      <hr className={clsx("bg-white/50", isLatest && "rounded-badge")} />
    </li>
  );
};
