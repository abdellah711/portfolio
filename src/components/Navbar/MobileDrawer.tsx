import { Bars3Icon } from "@heroicons/react/24/outline";
import { links } from "./Navbar";

export default function MobileDrawer() {
  return (
    <div className="drawer md:hidden">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-end">
        <label
          htmlFor="main-drawer"
          className="btn btn-square btn-ghost drawer-button"
        >
          <Bars3Icon className="size-8" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="main-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <nav className="relative flex min-h-full w-80 flex-col gap-5 bg-base-200 p-4 text-base-content">
          <a href="/" className="mb-10 text-3xl font-bold">
            Alaoui<span className="text-primary">.</span>
          </a>
          <label
            htmlFor="main-drawer"
            className="btn btn-square btn-ghost drawer-button absolute right-4 top-4"
          >
            ✕
          </label>
          <ul className="menu contents">
            {links.map((link) => (
              <li>
                <a href={link.path} className="btn btn-ghost h-auto w-full">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary mt-auto">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
