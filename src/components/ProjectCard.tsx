import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLinks = project.githubUrl || project.demoUrl

  return (
    <article className="project-card">
      <header className="project-header">
        <span className="project-index mono">
          {String(index + 1).padStart(2, '0')}
        </span>
        {project.type === 'professional' && !hasLinks && (
          <span className="project-label mono">Professional Project</span>
        )}
      </header>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <ul className="tech-tags" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <span className="tech-tag mono">{tech}</span>
          </li>
        ))}
      </ul>

      {hasLinks && (
        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  )
}
