import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import MachineCard from '../components/MachineCard'
import SiteHeader from '../components/SiteHeader'
import { machines } from '../data/machines'

const categories = ['Tout le matériel', 'Terrassement', 'Transport', 'Manutention']

function MachinesPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const filteredMachines = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('fr')
    return machines.filter((machine) => {
      const matchesCategory =
        activeCategory === categories[0] || machine.category === activeCategory
      const searchableText = `${machine.name} ${machine.category} ${machine.location} ${machine.owner}`
        .toLocaleLowerCase('fr')
      return matchesCategory && searchableText.includes(normalizedQuery)
    })
  }, [activeCategory, query])

  return (
    <div className="catalogue-page">
      <SiteHeader />
      <main className="catalogue-main">
        <div className="catalogue-intro">
          <p className="section-kicker">Le catalogue Afric-Parc</p>
          <h1>Trouvez l’engin<br /><span>qui fait avancer vos projets.</span></h1>
          <p>Découvrez du matériel professionnel proposé par des loueurs de confiance, partout près de chez vous.</p>
        </div>

        <section className="catalogue-tools" aria-label="Recherche dans le catalogue">
          <label className="catalogue-search">
            <Search size={19} aria-hidden="true" />
            <span className="sr-only">Rechercher un engin, une ville ou un loueur</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Un engin, une ville, un loueur..."
            />
          </label>
          <span className="catalogue-tools-label"><SlidersHorizontal size={17} aria-hidden="true" /> Filtrer par catégorie</span>
          <div className="category-filters" role="group" aria-label="Catégories d’engins">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? 'category-chip active' : 'category-chip'}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="catalogue-results" aria-live="polite">
          <div className="catalogue-results-heading">
            <div>
              <h2>Engins disponibles</h2>
              <p>{filteredMachines.length} résultat{filteredMachines.length === 1 ? '' : 's'} pour votre recherche</p>
            </div>
            <span className="catalogue-location">Côte d’Ivoire <span aria-hidden="true">⌄</span></span>
          </div>
          {filteredMachines.length > 0 ? (
            <div className="catalogue-grid">
              {filteredMachines.map((machine) => (
                <MachineCard key={machine.id} machine={machine} />
              ))}
            </div>
          ) : (
            <div className="catalogue-empty">
              <Search size={28} aria-hidden="true" />
              <h3>Aucun engin trouvé</h3>
              <p>Essayez une autre recherche ou choisissez une autre catégorie.</p>
              <button type="button" className="text-button" onClick={() => { setQuery(''); setActiveCategory(categories[0]) }}>
                Effacer les filtres
              </button>
            </div>
          )}
        </section>

        <section className="catalogue-partner">
          <div><p className="section-kicker">Vous êtes loueur ?</p><h2>Faites travailler votre matériel.</h2><p>Publiez vos engins et trouvez de nouveaux clients simplement.</p></div>
          <Link className="button button-green" to="/register">Devenir partenaire <span aria-hidden="true">→</span></Link>
        </section>
      </main>
      <footer className="site-footer">
        <span className="site-brand-name">afric<span>parc</span></span>
        <p>© 2025 Afric-Parc. Construisons l’avenir ensemble.</p>
        <Link to="/login">Espace professionnel</Link>
      </footer>
    </div>
  )
}

export default MachinesPage
