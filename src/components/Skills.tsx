import { currentlyExploring, skillCategories } from '../data/skills'
import Section from './Section'

export default function Skills() {
  return (
    <>
      <Section id="skills" title="Technical Skills">
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-group">
              <h3 className="skill-group-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="learning" title="Currently Exploring" compact>
        <ul className="exploring-list">
          {currentlyExploring.map((item) => (
            <li key={item}>
              <span className="exploring-item mono">{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
