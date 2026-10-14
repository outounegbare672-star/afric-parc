import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="brand-block">
          <div className="brand-mark">AP</div>
          <div>
            <p className="eyebrow">Afric-Parc</p>
            <h1>Connexion</h1>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="prenom@afric-parc.com"
              required
            />
          </label>

          <label>
            <span>Mot de passe</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </label>

          <div className="form-meta">
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>Se souvenir de moi</span>
            </label>
            <a href="#">Mot de passe oublié ?</a>
          </div>

          <button type="submit" className="primary-button">
            Se connecter
          </button>
        </form>

        <p className="auth-footer">
          Vous n'avez pas de compte ? <Link to="/register">Créer un compte</Link>
        </p>

        <button type="button" className="secondary-button" onClick={() => navigate('/dashboard')}>
          Accès rapide
        </button>
      </div>
    </div>
  )
}

export default LoginPage
