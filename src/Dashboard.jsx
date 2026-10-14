import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const stats = [
  { label: 'Places libres', value: '42', accent: '#22c55e' },
  { label: 'Entrées aujourd’hui', value: '128', accent: '#3b82f6' },
  { label: 'Véhicules surveillés', value: '96', accent: '#f59e0b' },
  { label: 'Taux d’occupation', value: '68%', accent: '#8b5cf6' },
]

const occupancyData = [
  { day: 'Lun', count: 58 },
  { day: 'Mar', count: 64 },
  { day: 'Mer', count: 60 },
  { day: 'Jeu', count: 72 },
  { day: 'Ven', count: 77 },
  { day: 'Sam', count: 82 },
  { day: 'Dim', count: 69 },
]

const recentEntries = [
  { plate: 'AB-204-TS', time: '08:14', status: 'Entrée', tone: 'success' },
  { plate: 'CE-870-QM', time: '09:02', status: 'Sortie', tone: 'warning' },
  { plate: 'GH-456-KL', time: '09:36', status: 'Entrée', tone: 'success' },
  { plate: 'IJ-122-BR', time: '10:11', status: 'Réservation', tone: 'info' },
]

const shadedBars = ['#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6', '#14b8a6', '#ef4444', '#a855f7']

function DashboardPage() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">AP</div>
          <div>
            <p className="eyebrow">Afric-Parc</p>
            <h2>Dashboard</h2>
          </div>
        </div>

        <nav className="nav">
          <a href="#" className="active">Vue d’ensemble</a>
          <a href="#">Entrées & sorties</a>
          <a href="#">Réservations</a>
          <a href="#">Abonnés</a>
          <a href="#">Paramètres</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="topbar">
          <div>
            <p className="eyebrow muted">Aujourd’hui</p>
            <h1>Suivi du parking</h1>
          </div>
          <button type="button" className="primary-button small-button">
            + Nouvelle réservation
          </button>
        </header>

        <section className="stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <span className="stat-dot" style={{ background: item.accent }} />
              <p>{item.label}</p>
              <strong>{item.value}</strong>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel chart-panel">
            <div className="panel-header">
              <h3>Occupation hebdomadaire</h3>
              <span>+12% vs. semaine dernière</span>
            </div>

            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={occupancyData} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                    {occupancyData.map((entry, index) => (
                      <Cell key={`${entry.day}-${index}`} fill={shadedBars[index % shadedBars.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel list-panel">
            <div className="panel-header">
              <h3>Activités récentes</h3>
              <span>Dernières 4 heures</span>
            </div>

            <ul className="entry-list">
              {recentEntries.map((entry) => (
                <li key={entry.plate} className="entry-item">
                  <div>
                    <strong>{entry.plate}</strong>
                    <span>{entry.time}</span>
                  </div>
                  <span className={`status-badge ${entry.tone}`}>{entry.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DashboardPage
