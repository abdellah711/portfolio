import type { IProject } from "./ProjectItem";
import { GlobeIcon, GithubIcon } from "lucide-react";
import Technologies from "./Technologies";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

type Props = {
  project: IProject | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <dialog open={!!project} onClose={onClose} className="modal">
      <div className="modal-box grid w-11/12 max-w-screen-lg grid-cols-1 gap-5 lg:grid-cols-2">
        {!!project && (
          <>
            <h3 className="text-2xl font-bold lg:col-span-2">
              {project?.title}
            </h3>
            <div className="h-full max-w-full">
              <Swiper
                className="h-full overflow-hidden rounded-lg"
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ enabled: true, clickable: true }}
              >
                {project?.images?.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="size-full bg-cover bg-center supports-[backdrop-filter]:bg-[image:var(--img)]"
                    style={{
                      //@ts-expect-error
                      "--img": `url(${image})`,
                    }}
                  >
                    <img
                      src={image}
                      alt={project?.title}
                      className="size-full rounded-xl object-contain supports-[backdrop-filter]:backdrop-blur-xl md:h-[60vh]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="space-y-5">
              <div className="flex flex-wrap gap-3">
                {project?.live && (
                  <a
                    href={project?.live}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Live <GlobeIcon className="size-5" />
                  </a>
                )}
                {project?.github && (
                  <a href={project?.github} target="_blank" className="btn">
                    View Source <GithubIcon className="size-5" />
                  </a>
                )}
              </div>
              <Technologies technologies={project?.technologies ?? []} />
              <p className="max-w-prose whitespace-pre-wrap py-2">
                {project?.description}
              </p>
            </div>
          </>
        )}
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop bg-black/50">
        <button>close</button>
      </form>
    </dialog>
  );
}
