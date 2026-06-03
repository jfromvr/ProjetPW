import { useState, useEffect } from "react";

const events = [
  {
    title: "Atelier d'initiation Arduino",
    date: "15 octobre 2025",
    location: "FSBM — Salle TI",
    desc: "Découverte du prototypage électronique et programmation embarquée pour débutants.",
    icon: "bi-cpu",
    category: "Atelier",
  },
  {
    title: "Hackathon IoT",
    date: "22 novembre 2025",
    location: "Campus UH2C",
    desc: "48h pour concevoir une solution IoT innovante en équipe.",
    icon: "bi-lightning-charge",
    category: "Hackathon",
  },
  {
    title: "Formation Raspberry Pi",
    date: "10 décembre 2025",
    location: "FSBM — Laboratoire TI",
    desc: "Mise en pratique : capteurs, GPIO, et projets connectés.",
    icon: "bi-motherboard",
    category: "Formation",
  },
  {
    title: "Conférence Robotique & IA",
    date: "20 janvier 2026",
    location: "Amphithéâtre FSBM",
    desc: "Intervenants invités du secteur académique et industriel.",
    icon: "bi-mic",
    category: "Conférence",
  },
];

const categories = ["Tous", ...new Set(events.map((e) => e.category))];

export default function Events() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  useEffect(() => {
    document.title = "Événements — CRIOT";
    return () => { document.title = "CRIOT"; };
  }, []);

  const filtered = events.filter((e) => {
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "Tous" || e.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <section className="container py-5">
      <p className="text-criot text-uppercase small fw-semibold mb-2">Activités</p>
      <h1 className="display-5 fw-bold mb-4">
        Événements <span className="text-criot">à venir</span>
      </h1>

      {/* Filtres */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`btn btn-sm ${activeCategory === cat ? "btn-criot" : "btn-outline-secondary"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recherche */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control bg-dark text-light border-secondary"
          placeholder="Rechercher un événement…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-secondary">Aucun événement ne correspond à votre recherche.</p>
      ) : (
        <ul className="list-group list-group-flush">
          {filtered.map((e) => (
            <li
              key={e.title}
              className="list-group-item bg-transparent text-light border-secondary py-4"
            >
              <div className="d-flex gap-3 align-items-start">
                <div className="flex-shrink-0">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center text-white"
                    style={{
                      width: 56,
                      height: 56,
                      background: "linear-gradient(135deg, #0d9eff, #4f46e5)",
                    }}
                  >
                    <i className={`bi ${e.icon} fs-3`}></i>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex flex-wrap justify-content-between gap-2">
                    <h5 className="fw-bold mb-1">{e.title}</h5>
                    <span className="badge bg-criot text-white fw-semibold align-self-start">
                      <i className="bi bi-calendar3 me-1"></i>{e.date}
                    </span>
                  </div>
                  <p className="text-secondary small mb-1">
                    <i className="bi bi-geo-alt me-1"></i>{e.location}
                  </p>
                  <p className="text-secondary mb-0">{e.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
