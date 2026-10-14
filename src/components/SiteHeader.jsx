import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ArrowUpRight, CircleUserRound } from 'lucide-react'

function SiteHeader() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToHowItWorks = (event) => {
    event.preventDefault()
    const scroll = () => document.getElementById('fonctionnement')?.scrollIntoView({ behavior: 'smooth' })

    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(scroll, 0)
      return
    }

    scroll()
  }

  return (
    <header className="site-header">
      <Link className="site-brand" to="/" aria-label="Afric-Parc, accueil">
        <span className="site-brand-mark">A</span>
        <span className="site-brand-name">afric<span>parc</span></span>
      </Link>

      <nav className="site-nav" aria-label="Navigation principale">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/machines">Nos engins</NavLink>
        <button type="button" onClick={scrollToHowItWorks}>Comment ça marche</button>
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
