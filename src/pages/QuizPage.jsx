import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import SavePageButton from "../components/SavePageButton";
import { useAuth } from "../context/AuthContext";
import { quizQuestions } from "../data/siteData";

function QuizPage() {
  const { addQuizAttempt, currentUser, isAuthenticated } = useAuth();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState("");

  const score = useMemo(() => (
    quizQuestions.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0)
  ), [answers]);

  const onSelect = (questionId, optionIndex) => {
    setAnswers((current) => ({ ...current, [questionId]: optionIndex }));
  };

  const onSubmit = () => {
    if (Object.keys(answers).length !== quizQuestions.length) {
      setToast("Please answer every question before submitting the quiz.");
      window.setTimeout(() => setToast(""), 2600);
      return;
    }

    setSubmitted(true);

    if (isAuthenticated) {
      addQuizAttempt({
        quizId: "park-learning-quiz",
        title: "Park learning quiz",
        score,
        total: quizQuestions.length
      });
      setToast("Quiz result saved to your dashboard.");
    } else {
      setToast("Quiz completed. Sign in if you want to save your result.");
    }

    window.setTimeout(() => setToast(""), 2800);
  };

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-patch-question"></i> Quiz</>}
        title="Test your understanding of the lessons."
        text="This short quiz reinforces the key ideas behind park safety, access, ecology, and community use."
        tone="warm"
        actions={(
          <>
            <SavePageButton page="/quiz" label="Quiz" />
            {!isAuthenticated ? <NavLink className="btn btn-outline-canopy" to="/login">Login for progress</NavLink> : null}
          </>
        )}
      >
        <div className="hero-side-card-stack">
          <article className="glass-card hover-raise">
            <small>Questions</small>
            <strong>{quizQuestions.length} multiple-choice prompts</strong>
          </article>
          <article className="glass-card hover-raise">
            <small>Latest result</small>
            <strong>{currentUser?.quizAttempts[0] ? `${currentUser.quizAttempts[0].score}/${currentUser.quizAttempts[0].total}` : "No saved attempts yet"}</strong>
          </article>
        </div>
      </PageHero>

      <section className="section-space pt-0">
        <div className="container">
          <div className="quiz-intro-band reveal">
            <article className="quiz-intro-card">
              <small>Why quiz?</small>
              <strong>People remember more when they actively check what they understand.</strong>
              <p>The goal is not to make the site feel academic. It is to help the key ideas stay with people after they leave the page.</p>
            </article>
          </div>
          <div className="fact-strip reveal">
            <article className="fact-strip-card">
              <strong>Safety</strong>
              <span>Questions about lighting, visibility, and confidence in everyday use.</span>
            </article>
            <article className="fact-strip-card">
              <strong>Access</strong>
              <span>Questions about clear routes, smooth movement, and inclusive park design.</span>
            </article>
            <article className="fact-strip-card">
              <strong>Ecology</strong>
              <span>Questions about shade, planting, and rainwater-friendly landscapes.</span>
            </article>
          </div>
          <div className="quiz-shell reveal">
            {quizQuestions.map((question, questionIndex) => (
              <article className="quiz-card" key={question.id}>
                <small>{`Question ${questionIndex + 1}`}</small>
                <h3>{question.question}</h3>
                <div className="quiz-options">
                  {question.options.map((option, optionIndex) => {
                    const selected = answers[question.id] === optionIndex;
                    const correct = question.answer === optionIndex;
                    const showState = submitted && (selected || correct);

                    return (
                      <button
                        className={`quiz-option ${selected ? "is-selected" : ""} ${showState ? (correct ? "is-correct" : "is-wrong") : ""}`}
                        key={option}
                        onClick={() => onSelect(question.id, optionIndex)}
                        type="button"
                      >
                        <span>{String.fromCharCode(65 + optionIndex)}</span>
                        <strong>{option}</strong>
                      </button>
                    );
                  })}
                </div>
                {submitted ? <p className="quiz-explanation">{question.explanation}</p> : null}
              </article>
            ))}

            <div className="quiz-results-card">
              <small>Quiz controls</small>
              <h3>Ready when you are</h3>
              <p>{submitted ? `You scored ${score} out of ${quizQuestions.length}.` : "Answer each question, then submit to see your result and explanations."}</p>
              <div className="hero-actions">
                <button className="btn btn-canopy" onClick={onSubmit} type="button">Submit quiz</button>
                <button className="btn btn-outline-canopy" onClick={resetQuiz} type="button">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {toast ? (
        <div className="toast-note show" role="status" aria-live="polite">
          <strong className="d-block mb-1">Quiz update</strong>
          <span>{toast}</span>
        </div>
      ) : null}
    </>
  );
}

export default QuizPage;
