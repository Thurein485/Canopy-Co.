import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function SavePageButton({ page, label }) {
  const { currentUser, isAuthenticated, toggleSavedPage } = useAuth();
  const [toast, setToast] = useState("");
  const isSaved = currentUser?.savedPages.includes(page);

  const onClick = () => {
    const result = toggleSavedPage(page);

    if (!result.ok) {
      setToast(result.message);
      window.setTimeout(() => setToast(""), 2400);
      return;
    }

    setToast(isSaved ? `${label} removed from your saved pages.` : `${label} added to your dashboard.`);
    window.setTimeout(() => setToast(""), 2400);
  };

  return (
    <>
      <button className={`btn ${isSaved ? "btn-canopy" : "btn-outline-canopy"}`} onClick={onClick} type="button">
        <i className={`bi ${isSaved ? "bi-bookmark-check" : "bi-bookmark-plus"} me-2`}></i>
        {isAuthenticated ? (isSaved ? "Saved" : "Save page") : "Login to save"}
      </button>

      {toast ? (
        <div className="toast-note toast-note-inline show" role="status" aria-live="polite">
          <strong className="d-block mb-1">Saved pages</strong>
          <span>{toast}</span>
        </div>
      ) : null}
    </>
  );
}

export default SavePageButton;
