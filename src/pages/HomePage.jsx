import { NavLink } from "react-router-dom";
import CountUp from "../components/CountUp";
import SavePageButton from "../components/SavePageButton";
import SectionIntro from "../components/SectionIntro";
import { useAuth } from "../context/AuthContext";
import {
  audienceGroups,
  educationPartners,
  learningJourney,
  campaignPhotoSet,
  homeHeroPhotos,
  homeFeatureCards,
  homeStats,
  homeUrgencyCards,
  mythFactItems
} from "../data/siteData";

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <section className="home-hero home-hero-clean">
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="eyebrow reveal"><i className="bi bi-book"></i> Park learning</span>
              <h1 className="hero-title reveal">A cleaner, greener park for everyday city life.</h1>
              <p className="hero-copy reveal">A clean educational website about safer paths, better shade, stronger planting, and the simple design choices that make local parks work better.</p>

              <div className="hero-actions reveal">
                <NavLink className="btn btn-canopy" to="/learn">Start learning</NavLink>
                <NavLink className="btn btn-outline-canopy" to={isAuthenticated ? "/dashboard" : "/signup"}>
                  {isAuthenticated ? "Open dashboard" : "Create account"}
                </NavLink>
                <SavePageButton page="/" label="Home" />
              </div>

              <div className="hero-inline-stats reveal">
                {homeStats.map((item) => (
                  <article className="hero-inline-stat" key={item.label}>
                    <strong><CountUp target={item.value} suffix={item.suffix} /></strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-photo-mosaic reveal">
                <article className="hero-photo-card hero-photo-card-large zoom-card">
                  <img src={homeHeroPhotos[0].image} alt={homeHeroPhotos[0].title} />
                </article>
                <article className="hero-photo-card hero-photo-card-small hover-raise">
                  <img src={homeHeroPhotos[1].image} alt={homeHeroPhotos[1].title} />
                </article>
                <article className="hero-photo-card hero-photo-card-small hover-raise">
                  <img src={homeHeroPhotos[2].image} alt={homeHeroPhotos[2].title} />
                </article>

                <div className="hero-tech-panel">
                  <div className="tech-grid"></div>
                  <div className="tech-orb tech-orb-one"></div>
                  <div className="tech-orb tech-orb-two"></div>

                  <div className="hero-tech-card tech-main-card zoom-card">
                    <small>Start here</small>
                    <strong>Learn the basics of safety, shade, access, and planting in one place.</strong>
                    <p>This site is built to help visitors understand what makes a park comfortable, inclusive, and easier to use.</p>
                  </div>

                  <div className="hero-tech-metrics">
                    <article className="hero-tech-card hover-raise">
                      <small>Learn</small>
                      <strong>4 short topics</strong>
                    </article>
                    <article className="hero-tech-card hover-raise">
                      <small>Quiz</small>
                      <strong>6 quick questions</strong>
                    </article>
                    <article className="hero-tech-card hover-raise">
                      <small>Community</small>
                      <strong>Workshops + activities</strong>
                    </article>
                    <article className="hero-tech-card hover-raise accent">
                      <small>Who it helps</small>
                      <strong>Residents, families, schools</strong>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <SectionIntro
            eyebrow={<><i className="bi bi-lightning-charge"></i> What this site helps you do</>}
            title="Understand the park issue quickly and clearly."
            text="The site is built to help visitors understand the problem, remember the key ideas, and feel confident talking about better local parks."
          />
          <div className="photo-story-grid reveal">
            {campaignPhotoSet.slice(0, 2).map((item) => (
              <article className="photo-story-card hover-raise" key={item.title}>
                <img className="photo-story-image" src={item.image} alt={item.title} />
                <div className="photo-story-copy">
                  <small>Real-life reference</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="row g-4">
            {homeFeatureCards.map((item) => (
              <div className="col-lg-4" key={item.title}>
                <article className="feature-panel reveal hover-raise home-clean-card">
                  <div className="icon-orb"><i className={`bi ${item.icon}`}></i></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))}
          </div>
          <div className="trust-strip reveal">
            <small>Learning partners</small>
            <div className="trust-strip-track">
              {educationPartners.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <SectionIntro
                eyebrow={<><i className="bi bi-exclamation-diamond"></i> Current issues</>}
                title="Why people sometimes stop using a park fully."
                text="These are the kinds of issues this educational site is designed to explain clearly."
              />
            </div>
            <div className="col-lg-7">
              <div className="home-clean-list reveal">
                {homeUrgencyCards.map((item, index) => (
                  <article className="home-clean-list-item hover-raise" key={item.title}>
                    <span>{`0${index + 1}`}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={<><i className="bi bi-signpost-2"></i> Learning flow</>}
            title="A simple path from noticing a problem to understanding it."
            text="The site is designed to keep things easy to follow instead of overwhelming."
          />
          <div className="journey-grid">
            {learningJourney.map((item) => (
              <article className="journey-card reveal hover-raise" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={<><i className="bi bi-people"></i> Who this is for</>}
            title="Built for the people who actually use, study, and care about local parks."
            text="The site is meant to be useful for public audiences, not just design professionals."
          />
          <div className="row g-4">
            {audienceGroups.map((item) => (
              <div className="col-lg-4" key={item.title}>
                <article className="feature-panel reveal hover-raise">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={<><i className="bi bi-patch-check"></i> Myth and fact</>}
            title="A few quick facts make the message easier to trust."
            text="These short comparisons help explain what better park design actually means in everyday life."
          />
          <div className="myth-fact-stack">
            {mythFactItems.map((item) => (
              <article className="myth-fact-card reveal" key={item.myth}>
                <div className="myth-block">
                  <small>Myth</small>
                  <strong>{item.myth}</strong>
                </div>
                <div className="fact-block">
                  <small>Fact</small>
                  <p>{item.fact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          {isAuthenticated ? (
            <div className="platform-strip reveal">
              <article className="platform-strip-card">
                <small>Your profile</small>
                <strong>Track lessons, quiz results, saved pages, and workshop activity in one simple dashboard.</strong>
              </article>
              <NavLink className="btn btn-canopy" to="/dashboard">Go to dashboard</NavLink>
            </div>
          ) : null}
          <SectionIntro
            eyebrow={<><i className="bi bi-arrow-right-circle"></i> Next step</>}
            title="Choose one simple next step."
            text="The site is meant to be useful, not complicated. Choose the part that helps you most."
          />
          <div className="home-next-actions reveal">
            <NavLink className="home-next-card hover-raise" to="/learn">
              <small>Learn</small>
              <strong>Read the short lessons</strong>
              <p>Understand the main ideas behind safer, greener, more welcoming parks.</p>
            </NavLink>
            <NavLink className="home-next-card hover-raise" to="/quiz">
              <small>Quiz</small>
              <strong>Check what you remember</strong>
              <p>Use the learning quiz to reinforce the key ideas in a quick and interactive way.</p>
            </NavLink>
            <NavLink className="home-next-card hover-raise" to="/get-involved">
              <small>Community</small>
              <strong>Join the learning activities</strong>
              <p>Take part in events, workshops, and shared activities that bring the lessons into real life.</p>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
