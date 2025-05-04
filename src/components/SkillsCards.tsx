import clsx from "clsx";
import { MoreHorizontalIcon } from "lucide-react";
import type { ReactNode } from "react";

const skills: SkillCardProps[] = [
  {
    title: "TypeScript",
    description: "Language",
    icon: "devicon-typescript-plain colored",
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "React",
    description: "UI Framework",
    icon: "devicon-react-original colored",
    href: "https://react.dev/",
  },
  {
    title: "Next.js",
    description: "Framework",
    icon: "devicon-nextjs-plain",
    href: "https://nextjs.org/",
  },
  {
    title: "Node.js",
    description: "JS Runtime",
    icon: "devicon-nodejs-plain colored",
    href: "https://nodejs.org/",
  },
  {
    title: "TailwindCSS",
    description: "CSS Framework",
    icon: "devicon-tailwindcss-plain colored",
    href: "https://tailwindcss.com/",
  },
  {
    title: "Express.js",
    description: "JS Framework",
    icon: "devicon-express-original",
    href: "https://expressjs.com/",
  },
  {
    title: "Expo (RN)",
    description: "Mobile Framework",
    icon: "devicon-react-original colored",
    href: "https://expo.dev/",
  },
  {
    title: "Git",
    description: "Version Control",
    icon: "devicon-git-plain colored",
    href: "https://git-scm.com/",
  },
  {
    title: "GitHub",
    description: "Version Control",
    icon: "devicon-github-original",
    href: "https://github.com/",
  },
  {
    title: "MongoDB",
    description: "Database",
    icon: "devicon-mongodb-plain colored",
    href: "https://www.mongodb.com/",
  },
  {
    title: "PostgreSQL",
    description: "Database",
    icon: "devicon-postgresql-plain colored",
    href: "https://www.postgresql.org/",
  },
];

export default function SkillsCards() {
  return (
    <ul className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {skills.map((skill) => (
        <SkillCard {...skill} />
      ))}
      <SkillCard
        title="and more"
        icon={<MoreHorizontalIcon className="size-12 text-gray-400" />}
        description="..."
      />
    </ul>
  );
}

type SkillCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
};

const SkillCard = ({ title, description, icon, href }: SkillCardProps) => {
  const As = href ? "a" : "div";
  return (
    <li className="group relative cursor-pointer overflow-hidden rounded-[9px] text-center transition duration-200 hover:scale-105">
      <As
        href={href}
        target="_blank"
        className="card m-px items-center rounded-lg border border-white/15 bg-base-100 px-2 py-5"
      >
        {typeof icon === "string" ? (
          <span className="text-5xl text-white transition duration-300 group-hover:scale-125">
            <i className={clsx("aspect-square w-12", icon)}></i>
          </span>
        ) : (
          icon
        )}
        <p className="mt-3 text-lg font-semibold">{title}</p>
        <p className="line-clamp-1 text-base-content/70">{description}</p>
      </As>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[200%] w-16 origin-top animate-[rotate-fade_4s_linear_backwards_infinite] rounded-[7px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </li>
  );
};
