import Technologies from "./Technologies";

export type IProject = {
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  images?: string[];
  github?: string;
  live?: string;
};

type Props = {
  project: IProject;
  onClick?: () => void;
};

export const ProjectItem = ({ project, onClick }: Props) => {
  return (
    <li
      className="card card-compact cursor-pointer overflow-hidden border border-white/10 bg-base-200 transition hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
      onClick={onClick}
    >
      <figure>
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="grow-0">{project.shortDescription}</p>
        <Technologies
          technologies={project.technologies}
          className="my-2"
          max={6}
        />
        <div className="card-actions mt-auto justify-end">
          <button className="btn">View Details</button>
        </div>
      </div>
    </li>
  );
};
