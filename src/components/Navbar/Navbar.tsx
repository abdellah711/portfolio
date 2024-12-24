import MobileDrawer from "./MobileDrawer";

export const links = [
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Projects",
    path: "#projects",
  },
  {
    label: "Experience",
    path: "#experience",
  },
];

export default function Navbar() {
  return (
    <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between p-6">
      <a
        href="/"
        className="bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-3xl font-bold text-transparent"
      >
        Alaoui<span className="text-primary">.</span>
      </a>
      <nav className="flex items-center gap-5 max-md:hidden">
        <ul className="contents">
          {links.map((link) => (
            <li>
              <a href={link.path} className="btn btn-ghost h-auto">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary">
          Contact
        </a>
      </nav>
      <MobileDrawer />
    </div>
  );
}
