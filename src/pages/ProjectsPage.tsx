import { siteData } from "../data/siteData";

export default function ProjectsPage() {
  return (
    <section className="stack">
      <h2>Projects</h2>
      {siteData.projects.map((project) => (
        <article key={project.title} className="card">
          <h3>{project.title}</h3>
          <p className="mutedLine">{project.timeframe}</p>
          <p>{project.summary}</p>
          <h4 style={{ paddingLeft: "0.72rem", marginTop: "0.62rem" }}>
            Technologies
          </h4>
          <ul className="chipList">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
          {project.imageUrls && project.imageUrls.length > 0 ? (
            <div className="photoGrid">
              {project.imageUrls.map((url) => (
                <img
                  key={url}
                  src={url}
                  alt="experience image"
                  loading="lazy"
                />
              ))}
            </div>
          ) : null}
          {project.links.length > 0 ? (
            <p className="linkRow">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </p>
          ) : null}
        </article>
      ))}
    </section>
  );
}
