import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import CountUp from "../components/CountUp";
import PageHero from "../components/PageHero";
import SavePageButton from "../components/SavePageButton";
import { useAuth } from "../context/AuthContext";
import { impactMetrics, impactOutcomes, impactPhotoSet, localImpactNotes } from "../data/siteData";

function ImpactPage() {
  const { isAuthenticated, saveScenario } = useAuth();
  const [budget, setBudget] = useState(65000);
  const [toast, setToast] = useState("");

  const planner = useMemo(() => ({
    trees: Math.round(budget / 900),
    volunteerDays: Math.round(budget / 5500),
    seats: Math.round(budget / 3200)
  }), [budget]);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const onSaveScenario = () => {
    const result = saveScenario({
      budget,
      trees: planner.trees,
      volunteerDays: planner.volunteerDays,
      seats: planner.seats
    });

    setToast(result.ok ? "Funding scenario saved to your dashboard." : result.message);
  };

  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-graph-up-arrow"></i> Why it matters</>}
        title="Why better park design matters in everyday life."
        text="These examples show how simple improvements can affect comfort, safety, climate resilience, and community use."
        tone="warm"
        actions={<SavePageButton page="/impact" label="Impact" />}
      >
        <div className="impact-side-stack">
          {impactMetrics.slice(0, 2).map((item) => (
            <article className="metric-tile hover-raise" key={item.label}>
              <strong><CountUp target={item.value} suffix={item.suffix} /></strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container">
          <div className="metrics-grid">
            {impactMetrics.map((item) => (
              <article className="metric-panel reveal hover-raise" key={item.label}>
                <strong><CountUp target={item.value} suffix={item.suffix} /></strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <div className="photo-story-grid reveal">
            {impactPhotoSet.map((item) => (
              <article className="photo-story-card hover-raise" key={item.title}>
                <img className="photo-story-image" src={item.image} alt={item.title} />
                <div className="photo-story-copy">
                  <small>Real-life example</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><i className="bi bi-check-circle"></i> What success looks like</span>
            <h2>Good park improvements help daily life, the environment, and the wider community at the same time.</h2>
          </div>
          <div className="row g-4">
            {impactOutcomes.map((item) => (
              <div className="col-lg-4" key={item.title}>
                <article className="feature-panel reveal hover-raise">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))}
          </div>
          <div className="local-notes-band reveal">
            {localImpactNotes.map((item) => (
              <article className="local-note-card" key={item}>
                <i className="bi bi-check2-circle"></i>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space alt-panel">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="section-header reveal">
                <span className="eyebrow"><i className="bi bi-sliders"></i> Learning explorer</span>
                <h2>Simple interactive tools make the lessons easier to understand.</h2>
              </div>
              <p className="section-copy reveal">Move the range to explore how a stronger park can translate into visible improvements and public benefits.</p>
              <div className="range-card reveal">
                <label className="range-label" htmlFor="budgetRange">Improvement scale</label>
                <div className="range-value">${budget.toLocaleString()}</div>
                <input id="budgetRange" className="form-range" max="120000" min="15000" onChange={(event) => setBudget(Number(event.target.value))} step="5000" type="range" value={budget} />
                <div className="range-actions">
                  <button className="btn btn-canopy" onClick={onSaveScenario} type="button">
                    {isAuthenticated ? "Save scenario" : "Login to save"}
                  </button>
                  {!isAuthenticated ? <NavLink className="btn btn-outline-canopy" to="/login">Sign in</NavLink> : null}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="planner-grid reveal">
                <article className="planner-card zoom-card">
                  <small>Trees and habitat plantings</small>
                  <strong>{planner.trees}</strong>
                  <p>Approximate canopy and understory additions across arrival, lawn, and ecological zones.</p>
                </article>
                <article className="planner-card zoom-card">
                  <small>Volunteer and stewardship days</small>
                  <strong>{planner.volunteerDays}</strong>
                  <p>Potential community workdays that keep the project visible and participatory.</p>
                </article>
                <article className="planner-card zoom-card">
                  <small>Seating and pause points</small>
                  <strong>{planner.seats}</strong>
                  <p>Comfort infrastructure that increases dwell time for families, seniors, and everyday visitors.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {toast ? (
        <div className="toast-note show" role="status" aria-live="polite">
          <strong className="d-block mb-1">Impact planner</strong>
          <span>{toast}</span>
        </div>
      ) : null}
    </>
  );
}

export default ImpactPage;
