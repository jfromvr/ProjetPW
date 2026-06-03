const focus = [
  {
    icon: "bi-wifi",
    title: "IoT — Internet des Objets",
    desc: "Objets connectés, échange de données, automatisation intelligente : maison connectée, santé, smart cities.",
    tags: ["Capteurs", "Réseaux", "Cloud", "Big Data", "IA"],
  },
  {
    icon: "bi-robot",
    title: "Robotique",
    desc: "Systèmes mécaniques et embarqués, programmation du mouvement, perception autonome de l'environnement.",
    tags: ["Embarqué", "Algorithmes", "ML", "Capteurs"],
  },
];

const skills = [
  { icon: "bi-compass", title: "Curiosité", desc: "Explorer, expérimenter, ne jamais cesser d'apprendre." },
  { icon: "bi-lightbulb", title: "Autonomie", desc: "Prendre des initiatives et mener ses projets à terme." },
  { icon: "bi-people", title: "Esprit d'équipe", desc: "Collaborer et construire collectivement." },
  { icon: "bi-tools", title: "Compétence tech", desc: "Maîtriser les outils et technologies de pointe." },
];

export default function About() {
  return (
    <section className="container py-5">
      <p className="text-criot text-uppercase small fw-semibold mb-2">À Propos</p>
      <h1 className="display-5 fw-bold">
        Une histoire d'<span className="text-criot">enthousiasme</span> et d'innovation
      </h1>
      <p className="lead text-secondary mt-3">
        Fondé en <strong className="text-light">2021</strong> au sein du Département de Physique
        sous l'initiative du <strong className="text-light">Professeur Mohamed Talea</strong>,
        chef du laboratoire TI, le CRIOT est né de la passion d'étudiants désireux d'explorer
        le monde de la robotique et de l'Internet des Objets.
      </p>

      <div className="row g-4 mt-3">
        {focus.map((f) => (
          <div className="col-md-6" key={f.title}>
            <div className="card card-criot h-100 p-4 text-light">
              <i className={`bi ${f.icon} text-criot fs-1 mb-3`}></i>
              <h4 className="fw-bold">{f.title}</h4>
              <p className="text-secondary">{f.desc}</p>
              <div className="d-flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span key={t} className="badge tag-criot">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="fw-bold text-center mt-5 mb-4">
        Compétences <span className="text-criot">développées</span>
      </h3>
      <div className="row g-3">
        {skills.map((s) => (
          <div className="col-6 col-lg-3" key={s.title}>
            <div className="card card-criot h-100 p-4 text-center text-light">
              <i className={`bi ${s.icon} text-criot fs-2`}></i>
              <h6 className="fw-bold mt-3">{s.title}</h6>
              <p className="text-secondary small mb-0">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
