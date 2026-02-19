import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="siteNav" aria-label="Primary navigation">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? "siteNavLink siteNavLinkActive" : "siteNavLink"
          }
          end={link.to === "/"}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
