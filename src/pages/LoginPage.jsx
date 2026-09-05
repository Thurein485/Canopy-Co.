import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const result = login(form);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    navigate(location.state?.from || "/dashboard");
  };

  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-person-check"></i> Account access</>}
        title="Sign in to continue your learning."
        text="Access your saved pages, quiz activity, workshop history, and learning dashboard in one place."
        tone="slate"
      >
        <div className="glass-card hover-raise">
          <small>Member benefits</small>
          <strong>Saved lessons, event RSVPs, learning activity, and a personal profile.</strong>
        </div>
      </PageHero>

      <section className="section-space pt-0">
        <div className="container">
          <div className="auth-shell reveal">
            <div className="auth-card">
              <small>Login</small>
              <h2>Welcome back</h2>
              <p>Use your account to continue learning, save progress, and stay involved with the site.</p>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="loginEmail">Email address</label>
                  <input className="form-control" id="loginEmail" name="email" onChange={onChange} required type="email" value={form.email} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="loginPassword">Password</label>
                  <input className="form-control" id="loginPassword" name="password" onChange={onChange} required type="password" value={form.password} />
                </div>
                {error ? <div className="auth-alert">{error}</div> : null}
                <button className="btn btn-canopy w-100" type="submit">Sign in</button>
              </form>
              <div className="auth-meta">
                <span>New here?</span>
                <NavLink to="/signup">Create an account</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
