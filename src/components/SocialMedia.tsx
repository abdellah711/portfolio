import { GithubIcon, LinkedinIcon } from "lucide-react";
import { SOCIAL_MEDIA } from "../utils/constants";

export default function SocialMedia() {
  const icons = [
    <GithubIcon className="size-7 transition duration-300 ease-out group-hover:scale-125" />,
    <i className="devicon-twitter-original inline-block size-7 text-xl transition duration-300 ease-out group-hover:scale-125" />,
    <LinkedinIcon className="size-7 fill-current stroke-none transition duration-300 ease-out group-hover:scale-125" />,
  ];
  return (
    <aside className="fixed right-8 top-1/3 z-40 max-lg:hidden">
      <ul className="flex flex-col gap-4">
        {SOCIAL_MEDIA.map(({ name, url }, i) => (
          <li
            key={name}
            className="group btn relative aspect-square rounded-2xl p-2.5 transition duration-150 hover:scale-105 hover:rounded-[20px] hover:text-primary"
          >
            <p className="sr-only end-[120%] z-0 group-hover:not-sr-only group-hover:absolute group-hover:animate-[fade-left_0.3s]">
              {name}
            </p>
            <a href={url} target="_blank" aria-label={name}>
              {icons[i]}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
