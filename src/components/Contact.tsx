import { links, mailtoLink } from '../data/links'
import Section from './Section'

const contactLinks = [
  { label: 'Email', href: mailtoLink(links.email), external: false },
  { label: 'LinkedIn', href: links.linkedin, external: true },
  { label: 'GitHub', href: links.github, external: true },
  { label: 'Resume', href: links.resume, external: true },
].filter((link) => link.href)

export default function Contact() {
  return (
    <Section id="contact" title="Let's build something useful.">
      <p className="contact-lead">
        I'm always interested in interesting problems in AI, ML, software
        engineering, and systems.
      </p>
      <ul className="contact-links">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="contact-link"
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
