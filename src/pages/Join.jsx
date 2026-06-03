import { useState, useEffect } from "react";

export default function Join() {
  const [form, setForm] = useState({ name: "", email: "", filiere: "", motivation: "" });
  const [sent, setSent] = useState(false);
  const [candidatures, setCandidatures] = useState([]);

  useEffect(() => {
    document.title = "Rejoindre — CRIOT";
    const saved = localStorage.getItem("criot-candidatures");
    if (saved) setCandidatures(JSON.parse(saved));
    return () => { document.title = "CRIOT"; };
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const updated = [...candidatures, { ...form, date: new Date().toLocaleDateString("fr-FR") }];
    setCandidatures(updated);
    localStorage.setItem("criot-candidatures", JSON.stringify(updated));
    setSent(true);
    setForm({ name: "", email: "", filiere: "", motivation: "" });
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <p className="text-criot text-uppercase small fw-semibold mb-2">Adhésion</p>
          <h1 className="display-5 fw-bold mb-3">
            Rejoignez <span className="text-criot">CRIOT</span>
          </h1>
          <p className="text-secondary mb-4">
            Remplissez le formulaire pour faire partie de notre communauté étudiante.
          </p>

          {candidatures.length > 0 && (
            <div className="card card-criot p-3 mb-4 text-light">
              <p className="text-criot fw-semibold mb-1">
                <i className="bi bi-people me-2"></i>
                {candidatures.length} candidature{candidatures.length > 1 ? "s" : ""} enregistrée{candidatures.length > 1 ? "s" : ""}
              </p>
              <ul className="list-unstyled small text-secondary mb-0">
                {candidatures.map((c, i) => (
                  <li key={i}><i className="bi bi-check-circle text-criot me-1"></i>{c.name} — {c.filiere} ({c.date})</li>
                ))}
              </ul>
            </div>
          )}

          {sent && (
            <div className="alert alert-success" role="alert">
              <i className="bi bi-check-circle me-2"></i>
              Votre demande a bien été enregistrée. Nous vous recontacterons bientôt.
            </div>
          )}

          <form onSubmit={onSubmit} className="card card-criot p-4 text-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom complet</label>
              <input
                id="name" name="name" required type="text"
                value={form.name} onChange={onChange}
                className="form-control bg-dark text-light border-secondary"
                placeholder="Votre nom"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email" name="email" required type="email"
                value={form.email} onChange={onChange}
                className="form-control bg-dark text-light border-secondary"
                placeholder="vous@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="filiere" className="form-label">Filière</label>
              <select
                id="filiere" name="filiere" required
                value={form.filiere} onChange={onChange}
                className="form-select bg-dark text-light border-secondary"
              >
                <option value="">Choisissez…</option>
                <option>Électronique</option>
                <option>Informatique</option>
                <option>Biologie</option>
                <option>Chimie</option>
                <option>Géologie</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="motivation" className="form-label">Motivation</label>
              <textarea
                id="motivation" name="motivation" rows="4"
                value={form.motivation} onChange={onChange}
                className="form-control bg-dark text-light border-secondary"
                placeholder="Pourquoi voulez-vous rejoindre CRIOT ?"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-criot btn-lg">
              Envoyer ma candidature <i className="bi bi-send ms-1"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
