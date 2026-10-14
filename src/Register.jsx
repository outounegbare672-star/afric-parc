import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const initialState = {
  fullName: '',
  company: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialState)

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
            <h1>Créer un compte</h1>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            <span>Nom complet</span>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Nom et prénom"
              required
            />
          </label>

          <label>
            <span>Entreprise</span>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Parc Auto"
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="prenom@entreprise.com"
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
              placeholder="Créez un mot de passe"
              required
            />
          </label>

          <label>
            <span>Confirmer le mot de passe</span>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Réécrivez le mot de passe"
              required
            />
          </label>

          <button type="submit" className="primary-button">
            S'inscrire
          </button>
        </form>

        <p className="auth-footer">
          Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
