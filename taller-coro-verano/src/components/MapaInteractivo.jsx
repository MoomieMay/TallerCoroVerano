import React from 'react';
import { MapPin } from 'lucide-react';

export default function MapaInteractivo() {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-white fw-bold d-flex align-items-center justify-content-between">
        <span className="d-flex align-items-center gap-2">
          <MapPin size={18} className="text-warning" /> Ubicación en Google Maps
        </span>
        <span className="badge bg-warning text-dark">Unión Vecinal</span>
      </div>
      <div className="card-body p-2">
        <div className="ratio ratio-16x9 rounded overflow-hidden">
          <iframe
            title="Ubicacion Union Vecinal Zona de Chacras"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.215!2d-67.545!3d-46.452!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI3JzA3LjIiUyA2N8KwMzInNDIuMCJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="card-footer bg-light text-muted small">
        📍 Sede: SUM Unión Vecinal Zona de Chacras, Caleta Olivia.
      </div>
    </div>
  );
}