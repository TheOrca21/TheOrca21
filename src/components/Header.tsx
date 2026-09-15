import { useState } from 'react'
import { links } from '../data/links'
import { navSections, externalNavLinks } from '../data/navigation'
import { profile } from '../data/profile'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const externalLinks = externalNavLinks
    .map((item) => ({ ...item, href: links[item.key] }))
    .filter((item) => item.href)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={closeMenu}>
          {profile.name.split(' ')[0]}
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-nav"
          className={`nav ${menuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav-sections">
            {navSections.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {externalLinks.length > 0 && (
            <ul className="nav-external">
              {externalLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target={link.key === 'resume' ? '_blank' : undefined}
                    rel={link.key === 'resume' ? 'noopener noreferrer' : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
}
