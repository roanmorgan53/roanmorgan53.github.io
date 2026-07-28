import aboutPhoto from "../assets/about-personal.jpg";
import { siteData } from "../data/siteData";

export default function AboutPage() {
  return (
    <section className="stack">
      <h2>About</h2>
      <article className="card aboutCard">
        <img
          src={aboutPhoto}
          alt="Roan outdoors"
          className="aboutPhoto"
          loading="lazy"
        />
        <div>
          <p>{siteData.aboutMessage}</p>
          <p>
            I am a strong believer that if something is going to be done, it
            should be done right.
          </p>
        </div>
      </article>
    </section>
  );
}
