import { NavLink, Link } from "react-router-dom";
import logo from "../assets/criot-logo.jpeg";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/apropos", label: "À Propos" },
  { to: "/evenements", label: "Événements" },
  { to: "/equipe", label: "Équipe" },
  { to: "/rejoindre", label: "Rejoindre" },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-criot sticky-top border-bottom border-secondary-subtle">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img src={logo} alt="Logo CRIOT" width="36" height="36" className="rounded bg-white p-1" />
          <span className="fw-bold">CR<span className="text-criot">IOT</span></span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {links.map((l) => (
              <li key={l.to} className="nav-item">
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active text-criot" : "")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
