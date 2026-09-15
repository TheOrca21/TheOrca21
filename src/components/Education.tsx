import { certifications } from '../data/certifications'
import { education } from '../data/education'
import { awards } from '../data/awards'
import Section from './Section'

export default function Education() {
  return (
    <>
      <Section id="education" title="Education" compact>
        <article className="education-block">
          <h3 className="education-institution">{education.institution}</h3>
          <p className="education-degree">{education.degree}</p>
          <dl className="education-meta">
            <div>
              <dt>Specialization</dt>
              <dd>{education.specialization}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd className="mono">{education.period}</dd>
            </div>
            <div>
              <dt>CGPA</dt>
              <dd className="mono">{education.cgpa}</dd>
            </div>
          </dl>
        </article>
      </Section>

      <Section id="certifications" title="Certification" compact>
        <ul className="compact-list">
          {certifications.map((cert) => (
            <li key={cert.title} className="compact-item">
              <span className="compact-item-title">{cert.title}</span>
              <span className="compact-item-sub mono">{cert.issuer}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="recognition" title="Recognition" compact>
        <ul className="compact-list">
          {awards.map((award, index) => (
            <li key={`${award.title}-${index}`} className="compact-item">
              <span className="compact-item-title">{award.title}</span>
              <span className="compact-item-sub mono">{award.organization}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
