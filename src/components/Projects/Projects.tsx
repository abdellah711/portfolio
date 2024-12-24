import { useState } from "react";
import { ProjectItem, type IProject } from "./ProjectItem";
import ProjectModal from "./ProjectModal";

const projects: IProject[] = [
  {
    title: "Scraper",
    shortDescription: "This is project 1.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi corrupti maxime architecto consequuntur maiores nesciunt labore rerum necessitatibus quam?`,
    technologies: [
      "React",
      "Express",
      "TailwindCSS",
      "MongoDB",
      "Redis",
      "TypeScript",
      "NodeJS",
      "Docker",
    ],
    image: "https://picsum.photos/200/300",
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    github: "https://github.com/username/project1",
    live: "https://project1.com",
  },
  {
    title: "Shadcn UI Theme generator",
    shortDescription: "A tool to generate themes for Shadcn UI projects",
    description: `I've often struggled with creating themes for my shadcn projects because shadcn use HSL (Hue, Saturation, Lightness) values for CSS theme variables, without utilizing the CSS hsl() function. This made it difficult for my IDE to recognize the variables as colors, and adjusting them became a hassle.\nTo solve this issue, I developed a tool to simplify the process of creating themes for Shadcn UI projects by allowing users to adjust the HSL values using a user-friendly interface and visualize how the theme will look in real-time.`,
    technologies: ["React", "NextJS", "TailwindCSS"],
    image: "/shadcn-theme-generator.png",
    images: ["/shadcn-theme-generator.png"],
    github: "https://github.com/abdellah711/shadcn-ui-theme",
    live: "https://shadcn-ui-theme.vercel.app/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  return (
    <>
      <p className="-mt-5 mb-7">Click on a project to see more.</p>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </ul>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
