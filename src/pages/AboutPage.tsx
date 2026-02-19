import aboutPhoto from "../assets/about-personal.jpg";
import { siteData } from "../data/siteData";

export default function AboutPage() {
  return (
    <section className="stack">
      <h2>About</h2>
      <article className="card aboutCard">
        <img src={aboutPhoto} alt="Roan outdoors" className="aboutPhoto" loading="lazy" />
        <div>
          <p>{siteData.aboutMessage}</p>
          <p>
            I care about building software that is reliable, practical, and useful in
            day-to-day life, and I enjoy teams that move quickly while keeping quality high.
          </p>
        </div>
      </article>
    </section>
  );
}
