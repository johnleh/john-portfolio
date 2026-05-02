import Image from "next/image";

export default function ProjectCard({ project }) {
    return(
        <article className="port-project-card" key={project.title}>
            <div className="port-proj-images">
                {project.imgSrc.map((src, i) => (
                    <div className="port-proj-image" key={src}>
                        <Image
                            src={`/projects/${src}`}
                            alt={`${project.title} screenshot ${i + 1}`}
                            fill
                            style={{ objectFit: "contain", padding: "1rem" }}
                            sizes="(max-width: 720px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>
            <div className="port-proj-body">
                <div className="port-proj-meta">{project.meta}</div>
                <h2 className="port-proj-title">{project.title}</h2>
                <p className="port-proj-desc">{project.description}</p>
                <div className="port-highlights">
                    {project.highlights.map((highlight) => (
                        <p className="port-highlight" key={highlight}>
                            <span className="port-highlight-mark">-&gt;</span>
                            {highlight}
                        </p>
                    ))}
                </div>
                <div className="port-proj-tags">
                    {project.tags.map((tag) => (
                        <span className="port-tag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="port-proj-links">
                    <a
                        href={project.github}
                        className="port-proj-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GITHUB -&gt;
                    </a>
                    <a href={project.learnMoreLink} className="port-proj-link" target="_blank" rel="noreferrer">
                        LEARN MORE -&gt;
                    </a>
                </div>
            </div>
        </article>
    )
}