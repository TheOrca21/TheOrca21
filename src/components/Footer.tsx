import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{profile.copyright}</p>
      </div>
    </footer>
  )
}
