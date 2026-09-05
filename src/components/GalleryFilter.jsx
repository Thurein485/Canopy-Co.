import { useMemo, useState } from "react";

function GalleryFilter({ categories, items }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <div className="gallery-shell reveal">
      <div className="filter-row" role="tablist" aria-label="Gallery categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-chip ${activeCategory === category ? "is-active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <article className={`gallery-card gallery-card-${(index % 3) + 1} zoom-card`} key={`${item.category}-${item.title}`}>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default GalleryFilter;
