function IntroLoader({ visible }) {
  return (
    <div className={`intro-loader ${visible ? "is-visible" : "is-hidden"}`} aria-hidden={!visible}>
      <div className="intro-loader-inner">
        <img src="/brand-mark.svg" alt="" className="intro-loader-mark" />
        <div className="intro-loader-copy">
          <strong>Canopy Co.</strong>
          <span>Loading the learning experience</span>
        </div>
      </div>
    </div>
  );
}

export default IntroLoader;
