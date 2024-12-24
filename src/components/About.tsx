export default function About() {
  return (
    <div className="flex gap-5 text-base-content/80 max-md:flex-wrap">
      <p className="max-w-prose text-lg">
        I'm Alaoui, a Software Engineer who is passionate about everything
        related to Javascript, I started my learning journey back in 2018 and
        currently I'm working as a Frontend engineer at a multi-national company
        since 2023, over the years I've had the opportunity to explore different
        technologies but my main focus is Typescript and React, I'm always eager
        to learn new things and improve my skills.
      </p>
      <img
        src="/workspace.jpg"
        alt="profile"
        className="max-h-80 flex-1 rounded-xl object-cover"
      />
    </div>
  );
}
