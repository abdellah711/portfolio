import { CheckCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { CrownIcon } from "lucide-react";
import type { ReactNode } from "react";

const timeline: TimelineProps[] = [
  {
    title: "State Engineer's Degree in Computer Science",
    date: "2018 - 2023",
    description:
      "Specialized in Software Engineering and Distributed Systems at ENSA. Graduated with honors",
  },
  {
    title: "Freelancer",
    date: "2020 - 2023",
    description:
      "While studying, I got my hands dirty by building several web and mobile applications for different local clients.",
  },
  {
    title: "Full Stack Developer Intern | Ministry of Finance",
    date: "August 2022 - October 2022",
    description:
      "Engineered a React/ASP.NET internal dashboard for the Ministry of Finance, digitizing government services",
  },
  {
    title: "Front End Developer Intern | SQLI",
    date: "March 2023 - August 2023",
    description:
      "Built and deployed core functional modules used directly in production. Refactored monolithic code into reusable, domain-specific packages to improve maintainability and deployment speed.",
  },
  {
    highlight: true,
    title: "Winner of the Best Overall Project - Refine + Dev.to Hackathon",
    date: "July 2023 - August 2023",
    description:
      "Engineered a custom integration layer bridging Refine (CRUD library for React) with Expo, significantly reducing boilerplate code for mobile CRUD applications",
  },
  {
    title: "Software Engineer | SQLI",
    date: "September 2023 - Present",
    description:
      "Core engineer for a large scale e-commerce platform, serving millions of global users. I architect and maintain critical functional SDKs that power the main storefront, ensuring modularity and seamless integration across different markets",
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
  highlight?: boolean;
  isLatest?: boolean;
};

const Timeline = ({
  title,
  date,
  description,
  isLatest = false,
  highlight = false,
}: TimelineProps) => {
  return (
    <li>
      <hr className="bg-white/50" />
      <div className="timeline-middle">
        <CheckCircleIcon className="size-5 text-green-500" />
      </div>
      <div className="timeline-end my-6">
        <div
          className={clsx(
            "timeline-box flex max-w-prose gap-2 border border-white/10 bg-base-200 p-7",
            highlight && "!border-green-500/30 ring-1 ring-green-500/30",
          )}
        >
          {highlight && (
            <CrownIcon className="mt-1 size-5 shrink-0 text-green-500" />
          )}
          <div className="space-y-2">
            <p className="text-xl font-medium text-white/80">{title}</p>
            <p className="text-base-content/70">{date}</p>
            <p className="text-base-content/90">{description}</p>
          </div>
        </div>
      </div>
      <hr className={clsx("bg-white/50", isLatest && "rounded-badge")} />
    </li>
  );
};
