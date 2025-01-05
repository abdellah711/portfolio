import { useState } from "react";
import { ProjectItem, type IProject } from "./ProjectItem";
import ProjectModal from "./ProjectModal";

type Props = {
  projects: IProject[];
};

export default function Projects({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const handleProjectClick = (project: IProject) => () => {
    setSelectedProject(project);
    gtag("event", "project_view", {
      event_category: "project",
      event_label: project.title,
    });
  };
  return (
    <>
      <p className="-mt-5 mb-7">Click on a project to see its details</p>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            onClick={handleProjectClick(project)}
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
