import PageHero from "../components/PageHero";
import SavePageButton from "../components/SavePageButton";
import { masterplanMoves, masterplanZones, roadmapItems } from "../data/siteData";

function MasterplanPage() {
  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-grid-1x2"></i> Masterplan and zoning</>}
        title="A four-zone strategy that upgrades movement, gathering, ecology, and identity as one connected park."
        text="The masterplan is organized so every area has a clear purpose, a clear emotional effect, and a visible role in the bigger revitalisation story."
        tone="emerald"
        actions={<SavePageButton page="/masterplan" label="Masterplan" />}
      >
        <div className="plan-preview">
          <div className="plan-dot dot-one"></div>
          <div className="plan-dot dot-two"></div>
          <div className="plan-dot dot-three"></div>
          <div className="plan-line"></div>
          <strong>Four zones, one readable public experience</strong>
          <p>Arrival, family activity, event life, and ecological restoration are designed to reinforce one another.</p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><i className="bi bi-map"></i> Spatial structure</span>
            <h2>Each zone solves a different problem while strengthening the whole park.</h2>
          </div>
          <div className="row g-4">
            {masterplanZones.map((zone) => (
              <div className="col-md-6" key={zone.title}>
                <article className={`zone-card zone-card-${zone.accent} reveal zoom-card`}>
                  <small>{zone.phase}</small>
                  <h3>{zone.title}</h3>
                  <p>{zone.text}</p>
                  <ul className="zone-highlights">
                    {zone.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><i className="bi bi-arrows-angle-expand"></i> Design moves</span>
            <h2>The plan works because a few strong moves are repeated clearly across the site.</h2>
          </div>
          <div className="row g-4">
            {masterplanMoves.map((item) => (
              <div className="col-lg-4" key={item.title}>
                <article className="content-card reveal hover-raise">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space alt-panel">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow"><i className="bi bi-signpost-split"></i> Delivery roadmap</span>
            <h2>Implementation is paced to build trust quickly and keep momentum visible.</h2>
          </div>
          <div className="timeline-roadmap">
            {roadmapItems.map((item) => (
              <article className="roadmap-card reveal hover-raise" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MasterplanPage;
