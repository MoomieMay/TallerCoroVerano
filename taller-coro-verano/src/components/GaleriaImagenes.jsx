import React from 'react';
import { Box } from 'lucide-react';

export default function GaleriaImagenes() {
  return (
    <div className="card border-0 shadow-sm p-3">
      <h6 className="fw-bold border-bottom pb-2 d-flex align-items-center gap-2">
        <Box className="text-warning" /> Recursos Didácticos y Apoyos DUA
      </h6>
      <div className="row g-3 mt-1">
        <div className="col-md-4">
          <div className="p-3 bg-light rounded border text-center">
            <h6 className="fw-bold text-dark mb-1">Modelos Anatómicos 3D</h6>
            <small className="text-muted">Donación de LabTEM. Modelos desarmables de laringe para exploración táctil.</small>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-light rounded border text-center">
            <h6 className="fw-bold text-dark mb-1">Teclado de 5 Octavas</h6>
            <small className="text-muted">Soporte armónico y melódico para ejercicios de vocalización y empaste.</small>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-light rounded border text-center">
            <h6 className="fw-bold text-dark mb-1">SUM Unión Vecinal</h6>
            <small className="text-muted">Espacio acondicionado para ensayos grupales y simulación de concierto.</small>
          </div>
        </div>
      </div>
    </div>
  );
}
