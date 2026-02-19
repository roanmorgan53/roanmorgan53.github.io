import { siteData } from "../data/siteData";

export default function ExperiencePage() {
  return (
    <section className="stack">
      <h2>Experience</h2>
      {siteData.experiences.map((experience) => (
        <article key={experience.title} className="card">
          <h3>{experience.title}</h3>
          <p className="mutedLine">
            {experience.role} • {experience.organization}
          </p>
          <p className="mutedLine">
            {experience.location} • {experience.timeframe}
          </p>
          <p>{experience.summary}</p>
          <h4 style={{ paddingLeft: "0.72rem", marginTop: "0.62rem" }}>Highlights</h4>
          <ul className="bulletList">
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <h4 style={{ paddingLeft: "0.72rem", marginTop: "0.62rem" }}>Technologies</h4>
          <ul className="chipList">
            {experience.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
          {experience.imageUrls && experience.imageUrls.length > 0 ? (
            <div className="photoGrid">
              {experience.imageUrls.map((url) => (
                <img key={url} src={url} alt="NSF project context" loading="lazy" />
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </section>
  );
}
