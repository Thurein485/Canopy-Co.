import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import SavePageButton from "../components/SavePageButton";
import { useAuth } from "../context/AuthContext";
import { contactCards, contactPhoto, faqItems } from "../data/siteData";

function ContactPage() {
  const { addContactMessage, currentUser, isAuthenticated } = useAuth();
  const [meetingDate, setMeetingDate] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    const nextMeeting = new Date();
    nextMeeting.setDate(nextMeeting.getDate() + 8);
    nextMeeting.setHours(10, 0, 0, 0);

    setMeetingDate(
      nextMeeting.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
      })
    );
  }, []);

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

    if (isAuthenticated) {
      addContactMessage({
        subject: form.subject,
        message: form.message
      });
    }

    setShowSuccess(true);
    setForm({
      name: currentUser?.name ?? "",
      email: currentUser?.email ?? "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-envelope-open"></i> Contact</>}
        title="Questions, partnerships, and education contact."
        text="Use this page to connect with the learning team, ask questions, or follow up after exploring the lessons."
        tone="slate"
        actions={<SavePageButton page="/contact" label="Contact" />}
      >
        <div className="map-card hover-raise">
          <div className="map-grid"></div>
          <div className="map-pin"></div>
          <strong>Community learning hub</strong>
          <p>Workshops, local meetups, and education sessions are coordinated from here.</p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <div className="contact-form-card reveal">
                <small>Send a message</small>
                <h3>Tell the team how you would like to connect.</h3>
                <p>
                  {isAuthenticated
                    ? "Your message history will also be stored in your dashboard for easy follow-up."
                    : "Use this demo form to simulate a question, workshop inquiry, or community follow-up. Sign in if you want your message history saved to your profile dashboard."}
                </p>
                <form onSubmit={onSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contactName">Full name</label>
                    <input className="form-control" id="contactName" name="name" onChange={onChange} placeholder="Your full name" required type="text" value={form.name} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contactEmail">Email address</label>
                    <input className="form-control" id="contactEmail" name="email" onChange={onChange} placeholder="name@example.com" required type="email" value={form.email} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contactSubject">Subject</label>
                    <input className="form-control" id="contactSubject" name="subject" onChange={onChange} placeholder="Workshop question, partnership, resident note..." required type="text" value={form.subject} />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="contactMessage">Message</label>
                    <textarea className="form-control contact-textarea" id="contactMessage" name="message" onChange={onChange} placeholder="Share your question, idea, or local observation..." required rows="5" value={form.message}></textarea>
                  </div>
                  <button className="btn btn-canopy w-100" type="submit">Send message</button>
                </form>
                {!isAuthenticated ? (
                  <div className="auth-inline-note">
                    <span>Need message history?</span>
                    <NavLink to="/login">Sign in</NavLink>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                {contactCards.map((item) => (
                  <div className="col-md-6" key={item.title}>
                    <article className="content-card reveal hover-raise contact-info-card">
                      <div className="icon-orb"><i className={`bi ${item.icon}`}></i></div>
                      <h3>{item.title}</h3>
                      <p>{item.title === "Next workshop" ? meetingDate : item.text}</p>
                    </article>
                  </div>
                ))}
                <div className="col-12">
                  <article className="photo-story-card hover-raise reveal">
                    <img className="photo-story-image" src={contactPhoto.image} alt={contactPhoto.title} />
                    <div className="photo-story-copy">
                      <small>Real-life connection</small>
                      <h3>{contactPhoto.title}</h3>
                      <p>{contactPhoto.text}</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space alt-panel">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="section-header reveal">
                <span className="eyebrow"><i className="bi bi-question-circle"></i> FAQ</span>
                <h2>Short answers help visitors, families, and schools understand the site more quickly.</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-stack">
                {faqItems.map((item) => (
                  <details className="faq-card reveal" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`success-overlay ${showSuccess ? "is-visible" : ""}`} aria-hidden={!showSuccess}>
        <div className={`success-dialog ${showSuccess ? "is-visible" : ""}`}>
          <div className="success-badge">
            <i className="bi bi-check2"></i>
          </div>
          <small>Message sent successfully</small>
          <h3>Thanks, your message has been logged for the learning team.</h3>
          <p>
            {isAuthenticated
              ? "Your message was also added to your dashboard activity so you can keep track of the conversation."
              : "No real email was sent, but the interaction behaves like a polished live contact flow for presentation purposes."}
          </p>
          <button type="button" className="btn btn-canopy" onClick={() => setShowSuccess(false)}>
            Close message
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
