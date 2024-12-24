import {
  ChevronDoubleDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <header className="bg-hero relative flex min-h-screen overflow-hidden">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-center gap-9 p-6 max-md:flex-col-reverse md:justify-evenly">
        <div className="space-y-9">
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-6xl font-bold text-transparent md:text-7xl">
            Hey, I'm Alaoui<span className="text-primary">.</span>
          </h1>
          <p className="max-w-prose text-lg">
            a Software Engineer passionate about JavaScript, TypeScript, and
            React. With experience since 2018, I specialize in building dynamic,
            user-focused frontend applications.
          </p>
          <div className="flex gap-5">
            <a href="#contact" className="btn btn-primary">
              Contact me
            </a>
            <button className="group btn btn-ghost">
              Download CV
              <ChevronRightIcon className="mt-0.5 size-5 -translate-x-1 transition group-hover:translate-x-0" />
            </button>
          </div>
        </div>
        <div className="-z-10 origin-bottom-right animate-[wiggle_5s_infinite] select-none text-7xl md:text-[10rem]">
          👋
        </div>
      </div>
      <div className="bg-glow"></div>
      <a
        href="#about"
        className="absolute bottom-8 right-1/2 translate-x-1/2 animate-bounce rounded-full p-1.5 pt-2.5 text-primary/70 transition hover:bg-primary/10 hover:text-primary"
        aria-label="Scroll down"
      >
        <ChevronDoubleDownIcon className="size-9" />
      </a>
    </header>
  );
}
