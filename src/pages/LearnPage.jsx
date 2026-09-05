import PageHero from "../components/PageHero";
import SavePageButton from "../components/SavePageButton";
import SectionIntro from "../components/SectionIntro";
import { useAuth } from "../context/AuthContext";
import { campaignPhotoSet, learnTopics, learningFacts, observationPrompts, workshopTypes } from "../data/siteData";

function LearnPage() {
  const { currentUser, isAuthenticated, toggleTopicProgress } = useAuth();

  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-book"></i> Learn</>}
        title="Short lessons about what makes a park work well."
        text="Explore the main ideas behind better local parks, including safety, shade, access, and ecology."
        tone="emerald"
        actions={<SavePageButton page="/learn" label="Learn" />}
      >
        <div className="hero-side-card-stack">
          <article className="glass-card hover-raise">
            <small>Learning format</small>
            <strong>Simple topic cards, clear takeaways, and practical prompts.</strong>
          </article>
          <article className="glass-card hover-raise">
            <small>Your progress</small>
            <strong>{currentUser?.completedTopics.length ?? 0} of {learnTopics.length} topics marked complete</strong>
          </article>
        </div>
      </PageHero>

      <section className="section-space pt-0">
        <div className="container">
          <SectionIntro
            eyebrow={<><i className="bi bi-lightbulb"></i> Learning topics</>}
            title="Four simple topics explain the main park issues."
            text="Each lesson focuses on one clear idea, so the page feels easier to read and remember."
          />
          <div className="lesson-banner reveal">
            <img src={campaignPhotoSet[0].image} alt={campaignPhotoSet[0].title} />
            <div className="lesson-banner-copy">
              <small>How to use this page</small>
              <h3>Read one topic at a time and connect it to a real park you know.</h3>
              <p>The goal is not to learn technical planning terms. It is to notice simple things that shape everyday public space.</p>
            </div>
          </div>
          <div className="fact-strip reveal">
            {learningFacts.map((item) => (
              <article className="fact-strip-card" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <div className="row g-4">
            {learnTopics.map((topic) => {
              const completed = currentUser?.completedTopics.includes(topic.id);

              return (
                <div className="col-lg-6" key={topic.id}>
                  <article className="lesson-card reveal hover-raise">
                    <div className="lesson-card-head">
                      <div className="icon-orb"><i className={`bi ${topic.icon}`}></i></div>
                      <div>
                        <h3>{topic.title}</h3>
                        <p>{topic.summary}</p>
                      </div>
                    </div>

                    <div className="lesson-why-box">
                      <small>Why it matters</small>
                      <p>{topic.whyItMatters}</p>
                    </div>

                    <div className="lesson-notice-box">
                      <small>What to look for</small>
                      <div className="lesson-chip-list">
                        {topic.lookFor.map((point) => (
                          <span className="lesson-chip" key={point}>{point}</span>
                        ))}
                      </div>
                    </div>

                    <div className="lesson-action-box">
                      <small>Quick question</small>
                      <strong>{topic.action}</strong>
                    </div>

                    <button
                      className={`btn ${completed ? "btn-canopy" : "btn-outline-canopy"} mt-3`}
                      onClick={() => toggleTopicProgress(topic.id)}
                      type="button"
                    >
                      {isAuthenticated ? (completed ? "Completed" : "Mark complete") : "Login to track progress"}
                    </button>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={<><i className="bi bi-search"></i> Try this in real life</>}
            title="Three simple observation prompts make the lessons feel more practical."
            text="These are the kinds of things a visitor, parent, student, or resident can notice in under a minute."
          />
          <div className="row g-4">
            {observationPrompts.map((item) => (
              <div className="col-lg-4" key={item.title}>
                <article className="feature-panel reveal hover-raise">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))}
          </div>
          <div className="learning-workshop-band reveal">
            <div>
              <small>Used in workshops</small>
              <h3>These lessons can also support real group activities.</h3>
            </div>
            <div className="learning-workshop-list">
              {workshopTypes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LearnPage;
