import type { ReactNode } from "react";
import profileAvatar from "../../assets/roan.png";
import { siteData } from "../../data/siteData";
import NavBar from "./NavBar";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="pageFrame">
      <header className="siteHeader steamPanel">
        <div className="profileHero">
          <img className="profileHeroImage" src={profileAvatar} alt={`${siteData.name} avatar`} />
          <div>
            <p className="eyebrow">Software Engineer Profile</p>
            <h1>{siteData.name}</h1>
            <p className="subhead">{siteData.headline}</p>
            <p className="subheadMuted">{siteData.location}</p>
          </div>
        </div>
        <div className="levelBadge">
          <p className="levelLabel">Level</p>
          <p className="levelValue">Senior</p>
          <p className="levelHint">Graduating {siteData.graduation}</p>
        </div>
      </header>

      <NavBar />

      <div className="pageGrid">
        <main className="pageContent">{children}</main>

        <aside className="rightRail">
          <section className="steamPanel railSection">
            <h2 className="railTitle">Recruiter Snapshot</h2>
            <p className="statusLine">Currently Open to SWE roles</p>
            <ul className="railFacts">
              <li>GPA: {siteData.gpa}</li>
              <li>B.S. Computer Science, {siteData.graduation}</li>
              <li>Mobile + Full-stack + Computer Vision</li>
            </ul>
          </section>

          <section className="steamPanel railSection">
            <h2 className="railTitle">Top Skills</h2>
            <ul className="chipList railChips">
              {siteData.coreSkills.slice(0, 8).map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section className="steamPanel railSection">
            <h2 className="railTitle">Contact</h2>
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
          </section>
        </aside>
      </div>
    </div>
  );
}
