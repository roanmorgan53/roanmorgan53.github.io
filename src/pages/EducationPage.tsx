import { siteData } from "../data/siteData";

export default function EducationPage() {
  return (
    <section className="stack">
      <h2>Education</h2>
      {siteData.education.map((item) => {
        const details = item.details ?? [];
        const hasDetails = details.length > 0;

        return (
          <article
            key={item.school}
            className="card"
            style={!hasDetails ? { paddingBottom: "0.72rem" } : undefined}
          >
            <h3>{item.school}</h3>
            <p className="mutedLine">{item.degree}</p>
            <p className="mutedLine">
              {item.location} • {item.timeframe}
            </p>
            {hasDetails ? (
              <ul className="bulletList">
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
