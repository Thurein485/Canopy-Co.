import { useState } from "react";

function ProjectPillars({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className="pillars-shell reveal">
      <div className="pillar-tabs" role="tablist" aria-label="Project pillars">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`pillar-tab ${item.id === activeItem.id ? "is-active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="pillar-panel zoom-card">
        <small>{activeItem.label}</small>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.text}</p>
        <ul>
          {activeItem.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectPillars;
