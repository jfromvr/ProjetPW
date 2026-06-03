export default function Footer() {
  return (
    <footer className="text-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="fw-bold">CR<span className="text-criot">IOT</span></h5>
            <p className="text-secondary mb-0">
              Club de Robotique et Internet des Objets — FSBM, Université Hassan II de Casablanca.
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Contact</h6>
            <ul className="list-unstyled text-secondary small mb-0">
              <li><i className="bi bi-envelope me-2"></i>criot.fsbm@uh2c.ma</li>
              <li><i className="bi bi-geo-alt me-2"></i>FSBM, Casablanca</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Suivez-nous</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-light" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-light" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-light" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary mt-4" />
        <p className="text-center text-secondary small mb-0">
          © {new Date().getFullYear()} CRIOT-FSBM — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
