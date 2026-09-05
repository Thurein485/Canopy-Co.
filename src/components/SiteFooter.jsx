import { NavLink } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Canopy Co.</div>
          <p className="footer-copy">A clean educational website about safer, greener, and more welcoming local parks.</p>
        </div>
        <div>
          <div className="footer-heading">Quick links</div>
          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/learn">Learn</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            <NavLink to="/get-involved">Get Involved</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        <div>
          <div className="footer-heading">Site focus</div>
          <p className="footer-copy">Learning, quizzes, park design basics, accessibility, ecology, and community participation.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Designed for community learning, park education, and public participation.</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
