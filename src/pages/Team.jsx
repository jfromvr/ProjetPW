import { useEffect } from "react";
import ayman from "../assets/ayman.jpeg";
import walid from "../assets/walid.jpeg";
import mellali from "../assets/mellali.jpeg";

const team = [
  { name: "Ayman El Hansali", role: "Président", icon: "bi-trophy", photo: ayman },
  { name: "Walid Meski", role: "Vice-Président", icon: "bi-shield-check", photo: walid },
  { name: "Mellali Abdelilah", role: "Responsable RH", icon: "bi-people-fill", photo: mellali },
];

export default function Team() {
  useEffect(() => {
    document.title = "Équipe — CRIOT";
    return () => { document.title = "CRIOT"; };
  }, []);

  return (
    <section className="container py-5">
      <p className="text-criot text-uppercase small fw-semibold mb-2">Équipe</p>
      <h1 className="display-5 fw-bold mb-3">
        Les membres du <span className="text-criot">bureau</span>
      </h1>
      <p className="text-secondary mb-5">
        Une équipe dévouée qui porte la vision du club au quotidien.
      </p>

      <div className="row g-4 justify-content-center">
        {team.map((m) => (
          <div className="col-sm-6 col-lg-4" key={m.name + m.role}>
            <div className="card card-criot text-center p-4 text-light h-100">
              {m.photo ? (
                <img src={m.photo} alt={`Portrait de ${m.name}`} className="team-photo mx-auto" />
              ) : (
                <div
                  className="team-photo mx-auto d-flex align-items-center justify-content-center"
                  style={{ background: "rgba(13,158,255,0.12)" }}
                >
                  <i className="bi bi-person-fill fs-1 text-criot"></i>
                </div>
              )}
              <h5 className="fw-bold mt-3 mb-1">{m.name}</h5>
              <p className="text-criot mb-0">
                <i className={`bi ${m.icon} me-1`}></i>{m.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
