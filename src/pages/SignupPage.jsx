import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useAuth } from "../context/AuthContext";

function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = signup(form);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-person-plus"></i> Create account</>}
        title="Create an account for learning and progress."
        text="Track quiz results, save useful pages, and keep your learning activity in one place."
        tone="emerald"
      >
        <div className="glass-card hover-raise">
          <small>Fast setup</small>
          <strong>Start using the dashboard in under a minute.</strong>
        </div>
      </PageHero>

      <section className="section-space pt-0">
        <div className="container">
          <div className="auth-shell reveal">
            <div className="auth-card">
              <small>Sign up</small>
              <h2>Create your account</h2>
              <p>Save your learning activity, follow updates, and take part in workshops and community events more easily.</p>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="signupName">Full name</label>
                  <input className="form-control" id="signupName" name="name" onChange={onChange} required type="text" value={form.name} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="signupEmail">Email address</label>
                  <input className="form-control" id="signupEmail" name="email" onChange={onChange} required type="email" value={form.email} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="signupPassword">Password</label>
                  <input className="form-control" id="signupPassword" minLength="6" name="password" onChange={onChange} required type="password" value={form.password} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="signupConfirmPassword">Confirm password</label>
                  <input className="form-control" id="signupConfirmPassword" minLength="6" name="confirmPassword" onChange={onChange} required type="password" value={form.confirmPassword} />
                </div>
                {error ? <div className="auth-alert">{error}</div> : null}
                <button className="btn btn-canopy w-100" type="submit">Create account</button>
              </form>
              <div className="auth-meta">
                <span>Already have an account?</span>
                <NavLink to="/login">Sign in</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignupPage;
