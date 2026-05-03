import NavBar from "../components/NavBar";
import {LinkedInUrl, GitUrl} from "../data/Constants";
import { projects } from "../data/Projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="port-page" id="about">
      <div className="port-wrap">
        <NavBar activePage="about" />
        <section className="port-hero port-page-hero">
          <h1>
            Full-stack engineer
            <br />
            who ships <em>impactful products</em>
          </h1>
          <p className="port-hero-sub">
            I build web applications from UI to database. My work has reached
            real students - helping ESL students build math confidence.
          </p>
          <div className="port-cta-row">
            <a
              href={LinkedInUrl}
              className="port-btn social"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
            <a
              href={GitUrl}
              className="port-btn social"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </div>
        </section>

        <section className="port-section">
          <div className="port-section-label">Stack</div>
          <div className="port-skills">
            <span className="port-skill">Next.js</span>
            <span className="port-skill">React</span>
            <span className="port-skill">JavaScript</span>
            <span className="port-skill">Node.js</span>
            <span className="port-skill">MongoDB</span>
            <span className="port-skill">SQL</span>
            <span className="port-skill">REST APIs</span>
          </div>
        </section>

        <section className="port-section" id="projects">
          <div className="port-section-label">Featured project</div>
          <div className="port-project-grid">
                      {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                      ))}
          </div>
        </section>
      </div>
    </main>
  );
}
