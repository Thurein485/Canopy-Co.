function SectionIntro({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-intro section-intro-${align} reveal`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default SectionIntro;
