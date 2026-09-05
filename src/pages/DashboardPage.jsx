import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useAuth } from "../context/AuthContext";

const pageLabels = {
  "/learn": "Learn",
  "/quiz": "Quiz",
  "/impact": "Impact",
  "/get-involved": "Community",
  "/contact": "Contact"
};

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function DashboardPage() {
  const { currentUser, updateProfile, logout } = useAuth();
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({
    name: currentUser?.name ?? "",
    neighborhood: currentUser?.neighborhood ?? "",
    role: currentUser?.role ?? "",
    bio: currentUser?.bio ?? ""
  });

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    setForm({
      name: currentUser?.name ?? "",
      neighborhood: currentUser?.neighborhood ?? "",
      role: currentUser?.role ?? "",
      bio: currentUser?.bio ?? ""
    });
  }, [currentUser]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    updateProfile(form);
    setToast("Profile updated successfully.");
  };

  if (!currentUser) {
    return null;
  }

  const completionRate = Math.round((currentUser.completedTopics.length / 4) * 100);
  const latestQuiz = currentUser.quizAttempts[0];

  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-person-badge"></i> Profile dashboard</>}
        title="Your profile and learning dashboard."
        text="Track your progress, quiz activity, saved pages, and community participation in one place."
        tone="emerald"
      >
        <div className="dashboard-hero-card hover-raise">
          <small>Account summary</small>
          <strong>{currentUser.role}</strong>
          <p>{currentUser.neighborhood}</p>
          <div className="dashboard-hero-metrics">
            <span>{completionRate}% learning complete</span>
            <span>{latestQuiz ? `Latest quiz: ${latestQuiz.score}/${latestQuiz.total}` : "No quiz saved yet"}</span>
          </div>
          <button className="btn btn-outline-canopy btn-sm mt-3" onClick={logout} type="button">
            Sign out
          </button>
        </div>
      </PageHero>

      <section className="section-space pt-0">
        <div className="container dashboard-grid">
          <article className="dashboard-panel dashboard-overview reveal">
            <small>Overview</small>
            <h3>Your activity at a glance</h3>
            <div className="dashboard-summary-grid">
              <div className="dashboard-summary-card">
                <strong>{currentUser.savedPages.length}</strong>
                <span>saved pages</span>
              </div>
              <div className="dashboard-summary-card">
                <strong>{currentUser.completedTopics.length}</strong>
                <span>topics completed</span>
              </div>
              <div className="dashboard-summary-card">
                <strong>{currentUser.quizAttempts.length}</strong>
                <span>quiz attempts</span>
              </div>
              <div className="dashboard-summary-card">
                <strong>{currentUser.eventRsvps.length}</strong>
                <span>event RSVPs</span>
              </div>
            </div>
            <div className="dashboard-progress-strip">
              <div>
                <small>Recommended next step</small>
                <strong>
                  {currentUser.completedTopics.length === 0
                    ? "Start with the Learn page"
                    : currentUser.quizAttempts.length === 0
                      ? "Take the quiz next"
                      : currentUser.eventRsvps.length === 0
                        ? "Join a community event"
                        : "Keep exploring saved pages"}
                </strong>
              </div>
              <NavLink className="btn btn-canopy btn-sm" to={
                currentUser.completedTopics.length === 0
                  ? "/learn"
                  : currentUser.quizAttempts.length === 0
                    ? "/quiz"
                    : "/get-involved"
              }>
                Continue
              </NavLink>
            </div>
          </article>

          <article className="dashboard-panel reveal">
            <small>Profile</small>
            <h3>Update your account</h3>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="profileName">Full name</label>
                <input className="form-control" id="profileName" name="name" onChange={onChange} type="text" value={form.name} />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="profileNeighborhood">Neighborhood</label>
                <input className="form-control" id="profileNeighborhood" name="neighborhood" onChange={onChange} type="text" value={form.neighborhood} />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="profileRole">Role</label>
                <input className="form-control" id="profileRole" name="role" onChange={onChange} type="text" value={form.role} />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="profileBio">Bio</label>
                <textarea className="form-control" id="profileBio" name="bio" onChange={onChange} rows="4" value={form.bio}></textarea>
              </div>
              <button className="btn btn-canopy" type="submit">Save profile</button>
            </form>
          </article>

          <article className="dashboard-panel reveal">
            <small>Learning progress</small>
            <h3>Topics you have completed</h3>
            <div className="dashboard-list">
              {currentUser.completedTopics.length ? currentUser.completedTopics.map((topicId) => (
                <div className="dashboard-list-item static" key={topicId}>
                  <div>
                    <strong>{topicId.replace(/^\w/, (letter) => letter.toUpperCase())}</strong>
                    <span>Marked complete from the learning hub</span>
                  </div>
                </div>
              )) : <p className="dashboard-empty">No learning topics completed yet. Start with the Learn page.</p>}
            </div>
          </article>

          <article className="dashboard-panel reveal">
            <small>Quiz results</small>
            <h3>Your latest quiz attempts</h3>
            <div className="dashboard-list">
              {currentUser.quizAttempts.length ? currentUser.quizAttempts.map((attempt) => (
                <div className="dashboard-list-item static" key={attempt.id}>
                  <div>
                    <strong>{attempt.title}</strong>
                    <span>{attempt.score}/{attempt.total} correct</span>
                  </div>
                  <small>{formatDate(attempt.completedAt)}</small>
                </div>
              )) : <p className="dashboard-empty">No quiz attempts yet. Take the learning quiz to store your result.</p>}
            </div>
          </article>

          <article className="dashboard-panel reveal">
            <small>Saved pages</small>
            <h3>Pages you bookmarked</h3>
            <div className="dashboard-list">
              {currentUser.savedPages.length ? currentUser.savedPages.map((page) => (
                <NavLink className="dashboard-list-item" key={page} to={page}>
                  <span>{pageLabels[page] ?? page}</span>
                  <i className="bi bi-arrow-up-right"></i>
                </NavLink>
              )) : <p className="dashboard-empty">You have not saved any pages yet.</p>}
            </div>
          </article>

          <article className="dashboard-panel reveal">
            <small>Quick actions</small>
            <h3>Useful places to continue</h3>
            <div className="dashboard-actions">
              <NavLink className="dashboard-action-link" to="/learn">
                <strong>Continue learning</strong>
                <span>Go back to the lessons and complete more topics.</span>
              </NavLink>
              <NavLink className="dashboard-action-link" to="/quiz">
                <strong>Take the quiz again</strong>
                <span>Check how well you remember the key lesson ideas.</span>
              </NavLink>
              <NavLink className="dashboard-action-link" to="/get-involved">
                <strong>Join an event</strong>
                <span>RSVP to a workshop or community moment and keep it in your profile.</span>
              </NavLink>
            </div>
          </article>

          <article className="dashboard-panel reveal">
            <small>Upcoming events</small>
            <h3>Your event RSVPs</h3>
            <div className="dashboard-list">
              {currentUser.eventRsvps.length ? currentUser.eventRsvps.map((event) => (
                <div className="dashboard-list-item static" key={event.id}>
                  <div>
                    <strong>{event.title}</strong>
                    <span>{event.date}</span>
                  </div>
                  <small>{formatDate(event.savedAt)}</small>
                </div>
              )) : <p className="dashboard-empty">No event RSVPs yet. Join one from the Get Involved page.</p>}
            </div>
          </article>

          <article className="dashboard-panel reveal">
            <small>Community activity</small>
            <h3>Your registered interests</h3>
            <div className="dashboard-list">
              {currentUser.supportRequests.length ? currentUser.supportRequests.map((item) => (
                <div className="dashboard-list-item static" key={item.id}>
                  <div>
                    <strong>{item.interest}</strong>
                    <span>{item.priority}</span>
                  </div>
                  <small>{formatDate(item.submittedAt)}</small>
                </div>
              )) : <p className="dashboard-empty">No support activity yet. Register your interest on the Get Involved page.</p>}
            </div>
          </article>

          <article className="dashboard-panel reveal">
            <small>Messages</small>
            <h3>Contact history</h3>
            <div className="dashboard-list">
              {currentUser.contactMessages.length ? currentUser.contactMessages.map((item) => (
                <div className="dashboard-list-item static" key={item.id}>
                  <div>
                    <strong>{item.subject}</strong>
                    <span>{item.message}</span>
                  </div>
                  <small>{formatDate(item.submittedAt)}</small>
                </div>
              )) : <p className="dashboard-empty">No contact messages yet. Send one from the Contact page.</p>}
            </div>
          </article>

          <article className="dashboard-panel reveal">
            <small>Learning explorer</small>
            <h3>Saved improvement snapshots</h3>
            <div className="dashboard-list">
              {currentUser.savedScenarios.length ? currentUser.savedScenarios.map((item) => (
                <div className="dashboard-list-item static" key={item.id}>
                  <div>
                    <strong>${item.budget.toLocaleString()}</strong>
                    <span>{item.trees} trees, {item.seats} seating clusters</span>
                  </div>
                  <small>{formatDate(item.savedAt)}</small>
                </div>
              )) : <p className="dashboard-empty">No saved impact scenarios yet. Use the Impact page to store one.</p>}
            </div>
          </article>
        </div>
      </section>

      {toast ? (
        <div className="toast-note show" role="status" aria-live="polite">
          <strong className="d-block mb-1">Dashboard updated</strong>
          <span>{toast}</span>
        </div>
      ) : null}
    </>
  );
}

export default DashboardPage;
