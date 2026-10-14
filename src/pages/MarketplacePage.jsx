import { ArrowRight, BadgeCheck, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import MachineCard from '../components/MachineCard'
import SiteHeader from '../components/SiteHeader'
import { machines } from '../data/machines'

function MarketplacePage() {
  return (
    <div className="marketplace-page">
      <SiteHeader />

      <main>
        <section className="market-hero">
          <div className="hero-content">
            <p className="hero-kicker"><span /> La plateforme BTP en Afrique</p>
            <h1>Le bon matériel.<br /><span>Au bon endroit.</span></h1>
            <p className="hero-description">
              Trouvez et louez les engins qu’il vous faut auprès de professionnels
              vérifiés, près de votre chantier.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" to="/machines">
                Explorer les engins <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="hero-text-link" to="/register">Proposer mon matériel</Link>
            </div>
            <div className="hero-trust">
              <span><ShieldCheck size={17} aria-hidden="true" /> Loueurs vérifiés</span>
              <span><BadgeCheck size={17} aria-hidden="true" /> Paiement sécurisé</span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-sun" />
            <div className="hero-machine">
              <Truck size={230} strokeWidth={0.85} />
            </div>
            <div className="hero-location-card">
              <span className="location-pin"><Truck size={17} /></span>
              <span><strong>Engins disponibles</strong><small>Partout en Côte d’Ivoire</small></span>
              <span className="location-count">+240</span>
            </div>
          </div>
          <div className="hero-bottom-note">Construisons plus loin, ensemble.</div>
        </section>

        <section className="trust-strip" aria-label="Afric-Parc en chiffres">
          <div><strong>1 200<span>+</span></strong><span>engins référencés</span></div>
          <div><strong>8</strong><span>villes couvertes</span></div>
          <div><strong>4,9<span>/5</span></strong><span>note moyenne des loueurs</span></div>
          <div className="trust-strip-message"><span className="trust-icon"><ShieldCheck size={19} /></span><span>La confiance au cœur<br />de chaque location</span></div>
        </section>

        <section className="featured-section" id="catalogue">
          <div className="section-heading">
            <div>
              <p className="section-kicker">À découvrir</p>
              <h2>Les engins du moment</h2>
              <p>Du matériel fiable, disponible près de vos chantiers.</p>
            </div>
            <Link className="section-link" to="/machines">
              Voir tout le catalogue <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="featured-grid">
            {machines.slice(0, 3).map((machine) => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </div>
        </section>

        <section className="how-section" id="fonctionnement">
          <div className="how-copy">
            <p className="section-kicker">Simple comme un chantier bien préparé</p>
            <h2>Votre prochain projet<br />commence ici.</h2>
            <p>Gagnez du temps et avancez sereinement : Afric-Parc vous accompagne de la recherche à la réservation.</p>
            <Link className="button button-green" to="/machines">
              Trouver un engin <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="how-steps">
            <article><span>01</span><div><h3>Recherchez</h3><p>Choisissez votre engin, votre ville et vos dates.</p></div></article>
            <article><span>02</span><div><h3>Échangez</h3><p>Contactez un loueur professionnel vérifié.</p></div></article>
            <article><span>03</span><div><h3>Construisez</h3><p>Réservez en toute confiance et démarrez votre chantier.</p></div></article>
          </div>
        </section>

        <section className="market-cta">
          <div className="cta-icon"><Truck size={26} aria-hidden="true" /></div>
          <div><h2>Vous avez du matériel à louer ?</h2><p>Rejoignez les professionnels qui développent leur activité avec Afric-Parc.</p></div>
          <Link to="/register">Devenir partenaire <ArrowRight size={17} aria-hidden="true" /></Link>
        </section>
      </main>

      <footer className="site-footer">
        <Link className="site-brand" to="/">
          <span className="site-brand-mark">A</span>
          <span className="site-brand-name">afric<span>parc</span></span>
        </Link>
        <p>© 2025 Afric-Parc. Construisons l’avenir ensemble.</p>
        <Link to="/login">Espace professionnel</Link>
      </footer>
    </div>
  )
}

export default MarketplacePage
