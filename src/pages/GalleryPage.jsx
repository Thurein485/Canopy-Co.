import GalleryFilter from "../components/GalleryFilter";
import PageHero from "../components/PageHero";
import SavePageButton from "../components/SavePageButton";
import SectionIntro from "../components/SectionIntro";
import { galleryCategories, galleryItems } from "../data/siteData";

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow={<><i className="bi bi-images"></i> Visual gallery</>}
        title="A visual layer that helps the revitalisation feel vivid, social, and easy to imagine."
        text="The gallery supports presentations by translating the strategy into recognizable moments: arrival, gathering, planting, stewardship, and event life."
        tone="emerald"
        actions={<SavePageButton page="/gallery" label="Gallery" />}
      >
        <div className="gallery-hero-card zoom-card">
          <small>Gallery focus</small>
          <strong>Concept views across identity, community life, landscape repair, and activation</strong>
          <p>These cards are organized to help clients and stakeholders picture how the park will feel, not just how it will be described.</p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={<><i className="bi bi-grid-3x3-gap"></i> Curated views</>}
            title="Use the gallery to present the project through different lenses instead of one flat visual stream."
            text="Even without photography, a structured visual story helps the revitalisation feel more complete and more believable."
          />
          <GalleryFilter categories={galleryCategories} items={galleryItems} />
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
