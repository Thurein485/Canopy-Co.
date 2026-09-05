function PageHero({ eyebrow, title, text, actions, tone = "default", children }) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="container position-relative">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="eyebrow reveal">{eyebrow}</span>
            <h1 className="page-hero-title reveal">{title}</h1>
            <p className="page-hero-copy reveal">{text}</p>
            {actions ? <div className="hero-actions reveal">{actions}</div> : null}
          </div>
          <div className="col-lg-6">
            <div className="hero-side-panel reveal">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
