import { ArrowUpRight, MapPin, Star, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

function MachineCard({ machine }) {
  return (
    <article className="machine-card">
      <div className={`machine-visual ${machine.tone}`}>
        <span className="machine-category">{machine.category}</span>
        <span className="machine-art" aria-hidden="true">
          <Truck size={86} strokeWidth={1.1} />
        </span>
        <span className="machine-rating">
          <Star size={14} fill="currentColor" aria-hidden="true" />
          {machine.rating}
        </span>
      </div>
      <div className="machine-details">
        <div className="machine-title-row">
          <h3>{machine.name}</h3>
          <Link className="icon-button" to="/register" aria-label={`Contacter le loueur pour ${machine.name}`}>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <p className="machine-owner">{machine.owner}</p>
        <p className="machine-location">
          <MapPin size={15} aria-hidden="true" />
          {machine.location}
        </p>
        <div className="machine-card-footer">
          <p><strong>{machine.price} FCFA</strong><span> / {machine.unit}</span></p>
          <span className="availability-dot">Disponible</span>
        </div>
      </div>
    </article>
  )
}

export default MachineCard
