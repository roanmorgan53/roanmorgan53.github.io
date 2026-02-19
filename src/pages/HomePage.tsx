import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function HomePage() {
  return (
    <section className="stack">
      <div className="card heroCard">
        <h2>At a Glance</h2>
        <p>{siteData.quickIntro}</p>
        <ul className="bulletList">
          <li>Building production-style mobile and web systems for real stakeholders.</li>
          <li>Focused on dependable software delivery, testing, and clean interfaces.</li>
          <li>Interested in computer vision and real-world computer interaction.</li>
        </ul>
        <div className="metricGrid" style={{ marginBottom: "0.72rem" }}>
          <article className="metricCard">
            <p className="metricValue">{siteData.graduation}</p>
            <p className="metricLabel">Expected Graduation</p>
          </article>
          <article className="metricCard">
            <p className="metricValue">{siteData.gpa}</p>
            <p className="metricLabel">Current GPA</p>
          </article>
          <article className="metricCard">
            <p className="metricValue">2+</p>
            <p className="metricLabel">Production-Style Roles</p>
          </article>
        </div>
      </div>

      <div className="card">
        <h3>Core Skills</h3>
        <ul className="chipList">
          {siteData.coreSkills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Featured Experience</h3>
        {siteData.experiences.slice(0, 2).map((exp, index) => (
          <article
            key={exp.title}
            className="listCard"
            style={index === 0 ? { marginTop: "0.62rem" } : undefined}
          >
            <h4>{exp.title}</h4>
            <p className="mutedLine">
              {exp.role} • {exp.organization} • {exp.timeframe}
            </p>
            <p>{exp.summary}</p>
          </article>
        ))}
        <Link className="inlineCta" to="/experience">
          See full experience details
        </Link>
      </div>

      <div className="card">
        <h3>Featured Projects</h3>
        {siteData.projects.slice(0, 3).map((project, index) => (
          <article
            key={project.title}
            className="listCard"
            style={index === 0 ? { marginTop: "0.62rem" } : undefined}
          >
            <h4>{project.title}</h4>
            <p className="mutedLine">{project.timeframe}</p>
            <p>{project.summary}</p>
          </article>
        ))}
        <Link className="inlineCta" to="/projects">
          Explore project portfolio
        </Link>
      </div>
    </section>
  );
}
