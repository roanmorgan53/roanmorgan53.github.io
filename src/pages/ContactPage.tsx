import { siteData } from "../data/siteData";

export default function ContactPage() {
  return (
    <section className="stack">
      <h2>Contact</h2>
      <article className="card">
        <p>
          Here is my contact information to contact me! Feel free to email,
          connect on LinkedIn, and check out my projects on GitHub
        </p>
        <p className="contactLine">
          <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
        </p>
        <p className="linkRow">
          <a href={siteData.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </article>
    </section>
  );
}
