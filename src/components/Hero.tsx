import { links, mailtoLink } from '../data/links'
import { profile } from '../data/profile'

const secondaryLinks = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Resume', href: links.resume },
].filter((link) => link.href)

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1 id="hero-heading" className="hero-heading">
            {profile.headline[0]}
            <br />
            {profile.headline[1]}
          </h1>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>

          {secondaryLinks.length > 0 && (
            <div className="hero-links">
              {secondaryLinks.map((link, index) => (
                <span key={link.label} className="hero-link-item">
                  {index > 0 && <span className="hero-link-sep" aria-hidden="true">·</span>}
                  <a
                    href={link.href}
                    target={link.label === 'Resume' ? '_blank' : undefined}
                    rel={link.label === 'Resume' ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          )}

          {!links.github && !links.linkedin && !links.resume && (
            <p className="hero-meta mono">
              Chennai, India ·{' '}
              <a href={mailtoLink(links.email)}>{links.email}</a>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
