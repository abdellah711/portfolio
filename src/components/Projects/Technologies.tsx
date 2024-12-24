import { getTechnologyColor } from "./utils";

type Props = { technologies: string[]; className?: string; max?: number };

export default function Technologies({
  technologies,
  className = "",
  max,
}: Props) {
  if (max && technologies.length > max) {
    technologies = [...technologies.slice(0, max - 1), "and more..."];
  }
  return (
    <div className={"flex flex-wrap gap-2 " + className}>
      {technologies.map((tech, index) => (
        <span
          key={index}
          className={
            "badge h-auto border-none px-3 py-1 " + getTechnologyColor(tech)
          }
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
