import { experience } from '../data/experience'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experience.map((entry) => (
          <article key={entry.id} className="timeline-entry">
            <h3 className="timeline-company">{entry.company}</h3>
            <ol className="timeline-roles">
              {entry.roles.map((role) => (
                <li key={`${entry.id}-${role.title}`} className="timeline-role">
                  <div className="timeline-role-header">
                    <div>
                      <h4 className="timeline-role-title">{role.title}</h4>
                      <time className="timeline-period mono">{role.period}</time>
                    </div>
                    {role.period.includes('Present') && (
                      <span className="timeline-badge mono">Current</span>
                    )}
                  </div>
                  {role.description && (
                    <p className="timeline-description">{role.description}</p>
                  )}
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  )
}
