import { about } from '../data/about'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose">
        <p>{about.intro}</p>
        <p>
          I have worked across projects involving:
        </p>
        <ul className="inline-list">
          {about.work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{about.philosophy}</p>
        <p>I enjoy working on:</p>
        <ul className="tag-list">
          {about.interests.map((item) => (
            <li key={item}>
              <span className="tag">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
