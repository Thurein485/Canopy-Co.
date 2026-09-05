import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import SavePageButton from "../components/SavePageButton";
import SectionIntro from "../components/SectionIntro";
import SupportForm from "../components/SupportForm";
import { useAuth } from "../context/AuthContext";
import { campaignPhotoSet, eventItems, involvementBenefits, supportTracks } from "../data/siteData";

function GetInvolvedPage() {
  const { addSupportRequest, currentUser, isAuthenticated, toggleEventRsvp } = useAuth();
  const [supporters, setSupporters] = useState(428);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    priority: ""
  });

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    setForm((current) => ({
      ...current,
      name: current.name || currentUser.name,
      email: current.email || currentUser.email
    }));
  }, [currentUser]);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => setToast(""), 3200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }

    setSupporters((current) => current + 1);

    if (isAuthenticated) {
      addSupportRequest({
        interest: form.interest,
        priority: form.priority
      });
    }

    setToast(
      isAuthenticated
        ? `${form.name.trim()} joined the community learning activity and it was added to the dashboard.`
        : `${form.name.trim()} joined the community activity. Create an account to track future activity.`
    );
    setForm({
      name: currentUser?.name ?? "",
      email: currentUser?.email ?? "",
      interest: "",
      priority: ""
    });
  };

  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-people"></i> Community</>}
        title="Join the educational side of the project."
        text="Residents, volunteers, schools, and local partners can all help turn park learning into real community activity."
        actions={<SavePageButton page="/get-involved" label="Get Involved" />}
      >
        <div className="support-counter-card hover-raise">
          <small>Community participants</small>
          <strong>{supporters}</strong>
          <span>Residents, schools, and volunteers already showing interest.</span>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container">
          <div className="community-banner reveal">
            <img src={campaignPhotoSet[1].image} alt={campaignPhotoSet[1].title} />
            <div className="community-banner-copy">
              <small>Learning together</small>
              <h3>Educational projects work better when people can connect the lessons to real places.</h3>
              <p>Real-life visuals help the site feel local, human, and easier to understand.</p>
            </div>
          </div>
          <div className="row g-4">
            {supportTracks.map((item) => (
              <div className="col-lg-4" key={item.title}>
                <article className="content-card reveal hover-raise">
                  <div className="icon-orb"><i className={`bi ${item.icon}`}></i></div>
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
            eyebrow={<><i className="bi bi-heart"></i> Why community learning matters</>}
            title="The lessons become more useful when people take part early."
          />
          <div className="row g-4">
            {involvementBenefits.map((item) => (
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
              <small>What happens next</small>
              <h3>Joining the site should lead to a real activity, not just a saved form.</h3>
            </div>
            <div className="learning-workshop-list">
              <span>Receive workshop updates</span>
              <span>Join local observation walks</span>
              <span>Take part in planting days</span>
              <span>Track activity in your dashboard</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space alt-panel">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <SectionIntro
                eyebrow={<><i className="bi bi-calendar2-week"></i> Upcoming learning events</>}
                title="Local learning moments should be easy to join."
                text="These events help people learn, join in, and talk about better park design with others."
              />
              <div className="event-stack">
                {eventItems.map((item) => (
                  <article className="event-card reveal zoom-card" key={item.title}>
                    <span>{item.date}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <button
                        className="btn btn-outline-canopy btn-sm mt-2"
                        onClick={() => {
                          const result = toggleEventRsvp(item);
                          setToast(result.ok ? `${item.title} was added to your dashboard.` : result.message);
                        }}
                        type="button"
                      >
                        {isAuthenticated ? "RSVP event" : "Login to RSVP"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="support-form-card reveal">
                <small>Join the community</small>
                <h3>Register interest in workshops, volunteering, or local learning activities.</h3>
                <p>
                  {isAuthenticated
                    ? "Your registration will be saved to your dashboard automatically."
                    : "You can submit the form now, and signing in later will let you track your activity from the dashboard."}
                </p>
                <SupportForm form={form} onChange={onChange} onSubmit={onSubmit} />
                {!isAuthenticated ? (
                  <div className="auth-inline-note">
                    <span>Want a personal dashboard?</span>
                    <NavLink to="/signup">Create an account</NavLink>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {toast ? (
        <div className="toast-note show" role="status" aria-live="polite">
          <strong className="d-block mb-1">Support registered</strong>
          <span>{toast}</span>
        </div>
      ) : null}
    </>
  );
}

export default GetInvolvedPage;
