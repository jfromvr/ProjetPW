import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/criot-logo.jpeg";
import ayman from "../assets/ayman.jpeg";
import walid from "../assets/walid.jpeg";
import mellali from "../assets/mellali.jpeg";

const stats = [
  { v: "2021", l: "Fondé en" },
  { v: "150+", l: "Membres" },
  { v: "5", l: "Filières" },
];

const team = [
  { name: "Ayman El Hansali", role: "Président", icon: "bi-trophy", photo: ayman },
  { name: "Walid Meski", role: "Vice-Président", icon: "bi-shield-check", photo: walid },
  { name: "Mellali Abdelilah", role: "Responsable RH", icon: "bi-people-fill", photo: mellali },
];

const upcomingEvents = [
  {
    title: "Atelier d'initiation Arduino",
    date: "15 oct. 2025",
    icon: "bi-cpu",
  },
  {
    title: "Hackathon IoT",
    date: "22 nov. 2025",
    icon: "bi-lightning-charge",
  },
  {
    title: "Formation Raspberry Pi",
    date: "10 déc. 2025",
    icon: "bi-motherboard",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Accueil — CRIOT";
    return () => { document.title = "CRIOT"; };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="hero text-center">
        <div className="container">
          <img
            src={logo}
            alt="Logo CRIOT"
            className="rounded-3 bg-white p-2 mb-4 shadow"
            width="110"
            height="110"
          />
          <p className="text-secondary small text-uppercase mb-2">
            <i className="bi bi-stars text-criot me-1"></i>
            FSBM · Université Hassan II de Casablanca
          </p>
          <h1 className="display-3 fw-bold text-criot">CRIOT</h1>
          <h2 className="h4 fw-normal mb-4">Club Robotique &amp; IoT FSBM</h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 640 }}>
            Une communauté étudiante passionnée par l'innovation, la robotique
            et l'Internet des Objets. Construisons ensemble la technologie de demain.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <Link to="/rejoindre" className="btn btn-criot btn-lg px-4">
              Rejoindre le club <i className="bi bi-arrow-right ms-1"></i>
            </Link>
            <Link to="/apropos" className="btn btn-outline-light btn-lg px-4">
              En savoir plus
            </Link>
          </div>

          <div className="row g-3 mt-5 justify-content-center">
            {stats.map((s) => (
              <div key={s.l} className="col-4 col-md-3">
                <div className="card card-criot text-center p-3">
                  <div className="h3 fw-bold text-criot mb-0">{s.v}</div>
                  <small className="text-secondary">{s.l}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membres principaux */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <p className="text-criot text-uppercase small fw-semibold mb-1">Bureau</p>
            <h2 className="h3 fw-bold mb-0">Membres <span className="text-criot">principaux</span></h2>
          </div>
          <Link to="/equipe" className="btn btn-outline-secondary btn-sm">
            Voir tout <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
        <div className="row g-4 justify-content-center">
          {team.map((m) => (
            <div className="col-sm-6 col-lg-4" key={m.name}>
              <div className="card card-criot text-center p-4 text-light h-100">
                <img src={m.photo} alt={`Portrait de ${m.name}`} className="team-photo mx-auto" />
                <h5 className="fw-bold mt-3 mb-1">{m.name}</h5>
                <p className="text-criot mb-0">
                  <i className={`bi ${m.icon} me-1`}></i>{m.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Événements à venir */}
      <section className="container pb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <p className="text-criot text-uppercase small fw-semibold mb-1">Agenda</p>
            <h2 className="h3 fw-bold mb-0">Prochains <span className="text-criot">événements</span></h2>
          </div>
          <Link to="/evenements" className="btn btn-outline-secondary btn-sm">
            Voir tout <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
        <ul className="list-group list-group-flush">
          {upcomingEvents.map((e) => (
            <li
              key={e.title}
              className="list-group-item bg-transparent text-light border-secondary py-3"
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center text-white flex-shrink-0"
                  style={{
                    width: 48,
                    height: 48,
                    background: "linear-gradient(135deg, #0d9eff, #4f46e5)",
                  }}
                >
                  <i className={`bi ${e.icon} fs-5`}></i>
                </div>
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-0">{e.title}</h6>
                </div>
                <span className="badge bg-criot text-white fw-semibold">
                  <i className="bi bi-calendar3 me-1"></i>{e.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
