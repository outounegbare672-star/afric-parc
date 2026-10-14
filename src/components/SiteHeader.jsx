import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, CircleUserRound } from 'lucide-react'

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-brand" to="/" aria-label="Afric-Parc, accueil">
        <span className="site-brand-mark">A</span>
        <span className="site-brand-name">afric<span>parc</span></span>
      </Link>

      <nav className="site-nav" aria-label="Navigation principale">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/machines">Nos engins</NavLink>
        <a href="#fonctionnement">Comment ça marche</a>
      </nav>

      <div className="site-actions">
        <Link className="header-login" to="/login">
          <CircleUserRound size={17} aria-hidden="true" />
          Connexion
        </Link>
        <Link className="header-cta" to="/register">
          Rejoindre Afric-Parc
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </header>
  )
}

export default SiteHeader
