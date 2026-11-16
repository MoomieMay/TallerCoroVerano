import React, { useState, useEffect } from 'react';
import heroImg from './assets/coroInfantil.jpg';
import modelo3dImg from './assets/modelo3d.jpg';
import instrumentalImg from './assets/instrumental.jpg';
import vecinalImg from './assets/unionVecinal.jpeg';

// Fotos del equipo con extensiones corregidas (.jpeg para foto2, foto3, foto4 y foto5)
import fotoIvonne from './assets/foto1.jpeg';
import fotoDiana from './assets/foto2.jpeg';
import fotoAna from './assets/foto3.jpeg';
import fotoAndrea from './assets/foto4.jpeg';
import fotoHuayra from './assets/foto5.jpeg';
import fotoAriana from './assets/foto6.jpeg';

export default function App() {
  const [activeTab, setActiveTab] = useState('diagnostico');
  const [selectedClase, setSelectedClase] = useState(null);
  const [openRubro, setOpenRubro] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Enlace oficial de inscripción a Google Forms
  const LINK_FORMULARIO = "https://forms.gle/gvrCLfKCF7WJZH59A";

  // Carga de la fuente Imperial Script desde Google Fonts y seteo dinámico del favicon
  useEffect(() => {
    // Conexión previa e importación de la fuente Imperial Script
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect2);

    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Favicon de notita musical
    let linkIcon = document.querySelector("link[rel~='icon']");
    if (!linkIcon) {
      linkIcon = document.createElement('link');
      linkIcon.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(linkIcon);
    }
    const musicIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23f59e0b"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`;
    linkIcon.href = `data:image/svg+xml;utf8,${encodeURIComponent(musicIconSvg)}`;
    document.title = "Al calor de las voces - Taller Coral";
  }, []);

  // Nómina oficial del Equipo de Responsables
  const equipoIntegrantes = [
    { 
      nombre: 'Ivonne Aguilera', 
      rol: 'Profesora de Música', 
      foto: fotoIvonne,
      linkedin: 'https://www.linkedin.com'
    },
    { 
      nombre: 'Diana Pérez', 
      rol: 'Jefa de cuerda e Instrumentista - Tecnóloga Educativa', 
      foto: fotoDiana,
      linkedin: 'https://www.linkedin.com'
    },
    { 
      nombre: 'Ana Salazar', 
      rol: 'Auxiliar docente - Referente Barrial', 
      foto: fotoAna,
      linkedin: 'https://www.linkedin.com'
    },
    { 
      nombre: 'Andrea Carrizo', 
      rol: 'Maestra de apoyo a la inclusión (M.A.I)', 
      foto: fotoAndrea,
      linkedin: 'https://www.linkedin.com'
    },
    { 
      nombre: 'Huayra Martincic', 
      rol: 'Gestión Administrativa', 
      foto: fotoHuayra,
      linkedin: 'https://www.linkedin.com'
    },
    { 
      nombre: 'Ariana Velasco', 
      rol: 'Prensa y difusión', 
      foto: fotoAriana,
      linkedin: 'https://www.linkedin.com'
    }
  ];

  // Datos estructurados del Presupuesto por Rubros
  const presupuestoRubros = [
    {
      id: 'rrhh',
      nombre: 'Recursos Humanos',
      icono: 'ri-user-star-line',
      colorBadge: 'bg-primary',
      items: [
        {
          num: '01',
          detalle: 'Honorarios equipo docente y técnico. Referencia: Pago único sobre cálculo por hora cátedra sueldo docente municipal.',
          estado: 'DISPONIBLE',
          cantidad: '6 (profesionales)',
          precioUnitario: 132000,
          subtotal: 792000
        }
      ]
    },
    {
      id: 'espacio',
      nombre: 'Espacio físico',
      icono: 'ri-building-4-line',
      colorBadge: 'bg-info text-dark',
      items: [
        {
          num: '02',
          detalle: 'Salón de usos múltiples (SUM) Unión Vecinal Zona de Chacras. Alquiler mensual.',
          estado: 'A CONSEGUIR',
          cantidad: '2 (meses)',
          precioUnitario: 150000,
          subtotal: 300000
        }
      ]
    },
    {
      id: 'materiales',
      nombre: 'Recursos materiales',
      icono: 'ri-box-3-line',
      colorBadge: 'bg-warning text-dark',
      items: [
        { num: '03', detalle: 'Fotocopias de cancionero', estado: 'A CONSEGUIR', cantidad: '240', precioUnitario: 300, subtotal: 72000 },
        { num: '04', detalle: 'Instrumento musical (Teclado eléctrico). Referencia: Mercado Libre', estado: 'DISPONIBLE', cantidad: '1', precioUnitario: 318000, subtotal: 318000 },
        { num: '05', detalle: 'Modelos anatómicos impresos en 3D', estado: 'DISPONIBLE: DONACIÓN', cantidad: '6', precioUnitario: 20000, subtotal: 120000 },
        { num: '06', detalle: 'Lavandina', estado: 'A CONSEGUIR. BÚSQUEDA DE DONACIONES', cantidad: '4 botellas de 1L', precioUnitario: 2189, subtotal: 8756 },
        { num: '07', detalle: 'Papel higiénico', estado: 'A CONSEGUIR. BÚSQUEDA DE DONACIONES', cantidad: 'Pack 90 metros x 6 unidades', precioUnitario: 9150, subtotal: 9150 },
        { num: '08', detalle: 'Bidón de agua', estado: 'A CONSEGUIR. BÚSQUEDA DE DONACIONES', cantidad: 'Bidón 20L', precioUnitario: 6500, subtotal: 13000 },
        { num: '09', detalle: 'Vasos - descartable Stendy 500cc Transparente Liviano', estado: 'A CONSEGUIR. BÚSQUEDA DE DONACIONES', cantidad: 'Pack X50 Unidades', precioUnitario: 7989, subtotal: 7989 },
        { num: '10', detalle: 'Guantes Mapa Plisse Satinado Naranja | Virulana Pirelli', estado: 'A CONSEGUIR. BÚSQUEDA DE DONACIONES', cantidad: '2 pares', precioUnitario: 4140, subtotal: 8280 },
        { num: '11', detalle: 'Trapo De Piso Tejido Gris M Reforzado Media Naranja', estado: 'A CONSEGUIR. BÚSQUEDA DE DONACIONES', cantidad: '1', precioUnitario: 3500, subtotal: 3500 },
        { num: '12', detalle: 'Rejilla Doble Reforzada Media Naranja', estado: 'A CONSEGUIR. BÚSQUEDA DE DONACIONES', cantidad: '3', precioUnitario: 2700, subtotal: 8100 }
      ]
    },
    {
      id: 'logistica',
      nombre: 'Logística y transporte',
      icono: 'ri-truck-line',
      colorBadge: 'bg-secondary',
      items: [
        { num: '13', detalle: 'Combustible para traslado del personal (VEHÍCULOS DISPONIBLES, COMBUSTIBLE A CONSEGUIR)', estado: 'A CONSEGUIR', cantidad: '4 (tanques)', precioUnitario: 90000, subtotal: 360000 },
        { num: '14', detalle: 'Transporte teclado', estado: 'A CONSEGUIR', cantidad: '16 (viajes)', precioUnitario: 10000, subtotal: 160000 }
      ]
    }
  ];

  const totalPresupuesto = presupuestoRubros.reduce(
    (accRubro, rubro) => accRubro + rubro.items.reduce((accItem, item) => accItem + item.subtotal, 0),
    0
  );

  // 8 Clases del Cronograma
  const cronograma = [
    { num: 1, fecha: '14 Ene', titulo: 'Bienvenida y Juegos Rítmicos', desc: 'Juegos de presentación, reconocimiento del espacio y primer contacto con el pulso rítmico mediante movimiento (Dalcroze).' },
    { num: 2, fecha: '19 Ene', titulo: 'Exploración Vocal y Anatomía 3D', desc: 'Presentación de modelos 3D de la laringe (LabTEM). Reconocimiento táctil del aparato fonador e higiene vocal.' },
    { num: 3, fecha: '21 Ene', titulo: 'Respiración y Cuerpo en Movimiento', desc: 'Técnicas de respiración costodiagmática asociadas a dinámicas corporales y juegos con globos/burbujas.' },
    { num: 4, fecha: '28 Ene', titulo: 'Ensamblado Rítmico y Lectura DUA', desc: 'Introducción de tarjetas táctiles de ritmos y ensamble a 2 voces rítmicas simples.' },
    { num: 5, fecha: '04 Feb', titulo: 'Construcción del Repertorio Coral', desc: 'Primeras melodías del cancionero popular e infantil. Práctica de afinación e imitación de eco.' },
    { num: 6, fecha: '11 Feb', titulo: 'Canto Grupal y Articulación', desc: 'Trabajo de articulación, empaste vocal y dinámicas de intensidad (piano/forte) aplicadas al repertorio.' },
    { num: 7, fecha: '18 Feb', titulo: 'Ensayos Generales e Expresividad', desc: 'Ensayo integrador en el SUM de la Unión Vecinal. Práctica de postura en escena y expresión gestual.' },
    { num: 8, fecha: '27 Feb', titulo: 'Muestra Final Abierta a la Comunidad', desc: 'Concierto abierto a familias y vecinos de Zona de Chacras. Entrega de certificados y festejo comunitario.' }
  ];

  const navTabs = [
    { id: 'diagnostico', label: 'Diagnóstico & Mapa', icon: 'ri-map-pin-2-line' },
    { id: 'objetivos', label: 'Objetivos', icon: 'ri-lightbulb-line' },
    { id: 'cronograma', label: 'Cronograma (8 Clases)', icon: 'ri-time-line' },
    { id: 'equipo', label: 'Equipo', icon: 'ri-team-line' },
    { id: 'presupuesto', label: 'Presupuesto', icon: 'ri-money-dollar-circle-line' }
  ];

  const toggleRubro = (rubroId) => {
    setOpenRubro(openRubro === rubroId ? null : rubroId);
  };

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-light min-vh-100 font-sans">
      {/* Encabezado Hero */}
      <header
        className="position-relative text-white py-4 py-md-5 shadow-lg overflow-hidden text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.84), rgba(15, 23, 42, 0.92)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '360px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container position-relative z-1 py-2">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center px-3">
              <span className="badge bg-warning text-dark mb-2 px-3 py-1.5 fw-bold text-uppercase tracking-wider text-wrap" style={{ fontSize: '0.7rem' }}>
                <i className="ri-community-line me-1"></i> Gestión Cultural Comunitaria
              </span>
              
              {/* Título en Imperial Script (+40% en escritorio y responsivo perfecto en móvil) */}
              <h1 
                className="mb-2 text-warning" 
                style={{ 
                  fontFamily: "'Imperial Script', cursive", 
                  fontSize: 'clamp(2.8rem, 7vw, 4.8rem)',
                  fontWeight: 'normal',
                  lineHeight: '1.1',
                  maxWidth: '100%',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  textShadow: '2px 2px 6px rgba(0,0,0,0.7)'
                }}
              >
                Al calor de las voces
              </h1>
              
              <p className="text-light mb-3 mx-auto opacity-90" style={{ maxWidth: '580px', fontSize: '0.75rem', lineHeight: '1.4' }}>
                Taller coral de verano e integración artística para infancias de 6 a 12 años en la Zona de Chacras, Caleta Olivia.
              </p>
              
              {/* Badges de fecha y lugar siempre juntos en la misma fila */}
              <div className="d-flex flex-row justify-content-center align-items-center flex-nowrap gap-2 mb-3">
                <span className="d-inline-flex align-items-center gap-1 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-25 px-3 py-1.5 rounded-pill text-white" style={{ fontSize: '0.72rem', whiteSpace: 'nowrap' }}>
                  <i className="ri-calendar-event-line text-warning"></i> Ene – Feb 2027
                </span>
                <span className="d-inline-flex align-items-center gap-1 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-25 px-3 py-1.5 rounded-pill text-white" style={{ fontSize: '0.72rem', whiteSpace: 'nowrap' }}>
                  <i className="ri-map-pin-line text-warning"></i> SUM Unión Vecinal
                </span>
              </div>
              
              {/* Botón amarillo centrado */}
              <div className="d-flex justify-content-center">
                <a
                  href={LINK_FORMULARIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning fw-bold px-4 py-2 rounded-pill shadow-sm d-inline-flex align-items-center gap-2 text-dark"
                  style={{ fontSize: '0.85rem' }}
                >
                  <i className="ri-edit-box-line"></i> ¡Inscribite acá!
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menú de navegación: Botón "Menú" a la izquierda y Nombre de sección a la derecha en Móvil */}
      <nav className="bg-white border-bottom sticky-top shadow-sm">
        <div className="container px-3 py-2">
          {/* Barra Móvil */}
          <div className="d-md-none d-flex justify-content-between align-items-center">
            <button
              className="btn btn-warning fw-bold btn-sm rounded-3 d-inline-flex align-items-center gap-2 text-dark px-3 py-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={isMenuOpen ? "ri-close-line fs-6" : "ri-menu-line fs-6"}></i>
              <span>Menú</span>
            </button>
            <span className="fw-bold text-dark small d-flex align-items-center gap-1">
              <i className="ri-music-2-line text-warning"></i>
              {navTabs.find(t => t.id === activeTab)?.label}
            </span>
          </div>

          {/* Menú colapsable en móvil / Pestañas extendidas en desktop */}
          <div className={`${isMenuOpen ? 'd-block' : 'd-none'} d-md-block mt-2 mt-md-0`}>
            <ul className="nav nav-pills flex-column flex-md-row gap-2">
              {navTabs.map(tab => (
                <li className="nav-item" key={tab.id}>
                  <button
                    className={`nav-link w-100 text-start d-flex align-items-center gap-2 font-semibold ${
                      activeTab === tab.id ? 'active bg-warning text-dark fw-bold' : 'text-dark'
                    }`}
                    onClick={() => handleSelectTab(tab.id)}
                  >
                    <i className={tab.icon}></i> {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="container py-4">
        {/* Pestaña 1: Diagnóstico Territorial & Mapa */}
        {activeTab === 'diagnostico' && (
          <div className="row g-4">
            <div className="col-md-7">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h4 className="fw-bold text-dark border-bottom pb-2 d-flex align-items-center gap-2">
                  <i className="ri-building-4-line text-warning"></i> Diagnóstico Territorial
                </h4>
                <p className="text-secondary mt-2 small">
                  Zona de Chacras es un barrio periférico de Caleta Olivia caracterizado por una marcada distancia física
                  y simbólica del centro urbano, con escasa oferta de talleres culturales gratuitos para las infancias durante el receso estival.
                </p>
                <div className="bg-light p-3 rounded border mb-3">
                  <h6 className="fw-bold text-dark mb-1 d-flex align-items-center gap-2 small">
                    <i className="ri-government-line text-warning"></i> Marco Normativo y Derechos
                  </h6>
                  <small className="text-muted d-block mb-2" style={{ fontSize: '0.8rem' }}>
                    El proyecto se encuadra en las recomendaciones de la UNESCO para la descentralización cultural y los aportes de Víctor Vich sobre la gestión cultural orientada al desarrollo de la comunidad y la democratización del espacio público.
                  </small>
                </div>
                
                <div className="row g-2 mt-auto">
                  <div className="col-12 col-sm-6">
                    <div className="p-3 bg-warning bg-opacity-10 rounded border border-warning text-center text-sm-start">
                      <h4 className="fw-bold text-dark m-0 fs-3">30</h4>
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>Cupo de niños y niñas (6-12 años)</small>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="p-3 bg-warning bg-opacity-10 rounded border border-warning text-center text-sm-start">
                      <h4 className="fw-bold text-dark m-0 fs-4">Gratuito</h4>
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>Actividad gratuita e inclusiva</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-header bg-white fw-bold d-flex align-items-center justify-content-between py-3">
                  <span className="d-flex align-items-center gap-2 small">
                    <i className="ri-map-pin-2-fill text-warning fs-5"></i> Sede del Proyecto
                  </span>
                  <span className="badge bg-warning text-dark">SUM Vecinal</span>
                </div>
                <div className="card-body p-2">
                  <div className="ratio ratio-4x3 rounded overflow-hidden">
                    <iframe
                      title="Ubicacion Union Vecinal Zona De Chacra"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.2364648954153!2d-67.55847162413383!3d-46.463823976024784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde5e17a8cdb3d75%3A0xdfb2f20e23db9fbc!2sUnion%20Vecinal%20Zona%20De%20Chacra!5e0!3m2!1ses-419!2sar!4v1794796096843!5m2!1ses-419!2sar"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                </div>
                <div className="card-footer bg-light text-muted small py-2">
                  📍 Unión Vecinal Zona De Chacra, Caleta Olivia, Santa Cruz.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pestaña 2: Objetivos */}
        {activeTab === 'objetivos' && (
          <div className="d-flex flex-column gap-4">
            <div className="row g-3">
              {[
                { icon: 'ri-volume-up-line', title: 'Salud Vocal', text: 'Uso de modelos 3D desarmables para explorar la anatomía del aparato fonador.' },
                { icon: 'ri-music-2-line', title: 'Expresión & Ritmo', text: 'Exploración rítmica corporal mediante el Método Dalcroze.' },
                { icon: 'ri-group-line', title: 'Masa Coral', text: 'Aprendizaje colaborativo, empatía y sentido de pertenencia sin jerarquías.' },
                { icon: 'ri-heart-3-line', title: 'Muestra Final', text: 'Presentación abierta a las familias el 27 de Febrero.' }
              ].map((obj, i) => (
                <div className="col-sm-6 col-md-3" key={i}>
                  <div className="card border-0 shadow-sm h-100 p-3 text-center">
                    <div className="text-warning mb-2 justify-content-center d-flex fs-3">
                      <i className={obj.icon}></i>
                    </div>
                    <h6 className="fw-bold text-dark">{obj.title}</h6>
                    <small className="text-muted">{obj.text}</small>
                  </div>
                </div>
              ))}
            </div>

            {/* Recursos Didácticos */}
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold text-dark border-bottom pb-3 d-flex align-items-center gap-2 mb-3">
                <i className="ri-box-3-line text-warning"></i> Recursos Didácticos
              </h5>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card border h-100 shadow-sm overflow-hidden">
                    <img src={modelo3dImg} alt="Modelo Anatómico 3D de Laringe" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                    <div className="card-body p-3 text-center">
                      <h6 className="fw-bold text-dark mb-1">Modelos Anatómicos 3D</h6>
                      <small className="text-muted">Aportados por LabTEM. Modelos táctiles desarmables de la laringe para comprensión kinestésica del canto.</small>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border h-100 shadow-sm overflow-hidden">
                    <img src={instrumentalImg} alt="Apoyo Instrumental Musical" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                    <div className="card-body p-3 text-center">
                      <h6 className="fw-bold text-dark mb-1">Apoyo Instrumental</h6>
                      <small className="text-muted">Teclado y recursos sonoros de apoyo melódico, armónico y de afinación para los ejercicios grupales.</small>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border h-100 shadow-sm overflow-hidden">
                    <img src={vecinalImg} alt="Sede SUM Unión Vecinal" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                    <div className="card-body p-3 text-center">
                      <h6 className="fw-bold text-dark mb-1">SUM Unión Vecinal</h6>
                      <small className="text-muted">Infraestructura barrial accesible y libre de barreras arquitectónicas para la comunidad.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pestaña 3: Cronograma */}
        {activeTab === 'cronograma' && (
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold text-dark border-bottom pb-3 d-flex align-items-center gap-2">
              <i className="ri-calendar-todo-line text-warning"></i> Cronograma del Taller (8 Encuentros)
            </h4>
            <div className="row g-3 mt-1">
              {cronograma.map((item) => {
                const isOpen = selectedClase === item.num;
                return (
                  <div className="col-md-6" key={item.num}>
                    <div className={`p-3 rounded border bg-white shadow-sm transition ${isOpen ? 'border-warning' : ''}`}>
                      <div
                        className="d-flex justify-content-between align-items-center cursor-pointer"
                        onClick={() => setSelectedClase(isOpen ? null : item.num)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="badge bg-warning text-dark fw-bold">Clase {item.num} · {item.fecha}</span>
                        <i className={`ri-arrow-down-s-line fs-5 transition ${isOpen ? 'ri-arrow-up-s-line text-warning' : ''}`}></i>
                      </div>
                      <h6
                        className="fw-bold text-dark mt-2 mb-1 cursor-pointer"
                        onClick={() => setSelectedClase(isOpen ? null : item.num)}
                        style={{ cursor: 'pointer' }}
                      >
                        {item.titulo}
                      </h6>
                      
                      {isOpen && (
                        <div className="mt-2 pt-2 border-top text-secondary small">
                          <p className="mb-0">{item.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Pestaña 4: Equipo */}
        {activeTab === 'equipo' && (
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold text-dark border-bottom pb-3 d-flex align-items-center gap-2 mb-4">
              <i className="ri-team-line text-warning"></i> Equipo de Trabajo
            </h4>
            
            <div className="row g-4 justify-content-center">
              {equipoIntegrantes.map((member, idx) => (
                <div className="col-12 col-sm-6 col-md-4" key={idx}>
                  <div className="card border-0 shadow-sm h-100 p-4 text-center d-flex flex-column align-items-center bg-white rounded-3">
                    <div className="mb-3 overflow-hidden rounded-circle shadow-sm" style={{ width: '150px', height: '150px' }}>
                      <img src={member.foto} alt={member.nombre} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    </div>
                    <h5 className="fw-bold text-dark mb-1 fs-6">{member.nombre}</h5>
                    <p className="text-muted small mb-3">{member.rol}</p>
                    
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm rounded-pill mt-auto d-inline-flex align-items-center gap-2 px-3"
                    >
                      <i className="ri-linkedin-fill"></i> LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña 5: Presupuesto */}
        {activeTab === 'presupuesto' && (
          <div className="card border-0 shadow-sm p-3 p-md-4">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4 flex-wrap gap-2">
              <div>
                <h4 className="fw-bold text-dark m-0 d-flex align-items-center gap-2 fs-5 fs-md-4">
                  <i className="ri-wallet-3-line text-warning"></i> Presupuesto
                </h4>
                <small className="text-muted d-none d-sm-block">Desglose de recursos y costos estimados por rubros (hacé clic para desplegar cada rubro)</small>
              </div>
              <div className="text-start text-md-end w-100 w-md-auto mt-1 mt-md-0">
                <span className="text-muted d-block small" style={{ fontSize: '0.8rem' }}>Subtotal Consolidado:</span>
                <h3 className="fw-extrabold text-success m-0 fs-4 fs-md-3">
                  ${totalPresupuesto.toLocaleString('es-AR')} ARS
                </h3>
              </div>
            </div>

            <div className="d-flex flex-column gap-3">
              {presupuestoRubros.map((rubro) => {
                const isRubroOpen = openRubro === rubro.id;
                const subtotalRubro = rubro.items.reduce((acc, item) => acc + item.subtotal, 0);

                return (
                  <div key={rubro.id} className="border rounded overflow-hidden bg-white shadow-sm">
                    <div
                      className="p-2 p-md-3 bg-light d-flex align-items-center justify-content-between cursor-pointer user-select-none"
                      onClick={() => toggleRubro(rubro.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center gap-2 gap-sm-3">
                        <span className={`badge ${rubro.colorBadge} p-2 rounded-circle fs-6 d-flex align-items-center justify-content-center`} style={{ width: '38px', height: '38px' }}>
                          <i className={rubro.icono}></i>
                        </span>
                        <div>
                          <h6 className="fw-extrabold text-dark m-0 fs-6 d-flex flex-wrap align-items-center gap-1.5" style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>
                            {rubro.nombre}
                          </h6>
                          <span className="badge bg-secondary rounded-pill fs-7 fw-normal mt-0.5" style={{ fontSize: '0.7rem' }}>
                            {rubro.items.length} {rubro.items.length === 1 ? 'ítem' : 'ítems'}
                          </span>
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-1.5 gap-md-3 ms-2">
                        <div className="text-end">
                          <span className="text-muted d-block" style={{ fontSize: '0.65rem', lineHeight: '1' }}>SUBTOTAL:</span>
                          <span className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
                            ${subtotalRubro.toLocaleString('es-AR')}
                          </span>
                        </div>
                        <button className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', padding: 0 }}>
                          <i className={isRubroOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}></i>
                        </button>
                      </div>
                    </div>

                    {isRubroOpen && (
                      <div className="border-top">
                        {/* Tabla en Escritorio */}
                        <div className="table-responsive d-none d-md-block">
                          <table className="table table-hover align-middle m-0">
                            <thead className="table-light">
                              <tr className="small text-uppercase text-secondary">
                                <th style={{ width: '60px' }}>Nº</th>
                                <th>Detalle / Especificación</th>
                                <th style={{ width: '180px' }}>Cantidad</th>
                                <th className="text-end" style={{ width: '150px' }}>Precio Unit. (ARS)</th>
                                <th className="text-end" style={{ width: '160px' }}>Subtotal (ARS)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rubro.items.map((item) => (
                                <tr key={item.num}>
                                  <td className="fw-bold text-muted">{item.num}</td>
                                  <td>
                                    <div className="fw-semibold text-dark mb-1 small">{item.detalle}</div>
                                    <span
                                      className={`badge ${
                                        item.estado.includes('DISPONIBLE')
                                          ? 'bg-success bg-opacity-10 text-success border border-success'
                                          : 'bg-warning bg-opacity-10 text-dark border border-warning'
                                      }`}
                                      style={{ fontSize: '0.7rem' }}
                                    >
                                      {item.estado}
                                    </span>
                                  </td>
                                  <td className="text-secondary small">{item.cantidad}</td>
                                  <td className="text-end text-muted small">${item.precioUnitario.toLocaleString('es-AR')}</td>
                                  <td className="text-end fw-bold text-dark">${item.subtotal.toLocaleString('es-AR')}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Tarjetas en Móvil */}
                        <div className="d-block d-md-none p-2 bg-light">
                          <div className="d-flex flex-column gap-2">
                            {rubro.items.map((item) => (
                              <div key={item.num} className="card border-0 shadow-sm p-2.5 rounded-3 bg-white">
                                <div className="d-flex justify-content-between align-items-center mb-1.5">
                                  <span className="badge bg-secondary" style={{ fontSize: '0.65rem' }}>Nº {item.num}</span>
                                  <span
                                    className={`badge ${
                                      item.estado.includes('DISPONIBLE')
                                        ? 'bg-success bg-opacity-10 text-success border border-success'
                                        : 'bg-warning bg-opacity-10 text-dark border border-warning'
                                    }`}
                                    style={{ fontSize: '0.62rem', whiteSpace: 'normal', textAlign: 'right' }}
                                  >
                                    {item.estado}
                                  </span>
                                </div>
                                <p className="fw-semibold text-dark mb-2" style={{ fontSize: '0.78rem', lineHeight: '1.3' }}>{item.detalle}</p>
                                <div className="bg-light p-2 rounded" style={{ fontSize: '0.7rem' }}>
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="text-secondary">Cantidad:</span>
                                    <span className="fw-bold text-dark">{item.cantidad}</span>
                                  </div>
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="text-secondary">Precio Unitario:</span>
                                    <span className="text-dark">${item.precioUnitario.toLocaleString('es-AR')}</span>
                                  </div>
                                  <div className="d-flex justify-content-between border-top pt-1 mt-1 fw-bold text-dark">
                                    <span>Subtotal:</span>
                                    <span className="text-success">${item.subtotal.toLocaleString('es-AR')}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-3 bg-dark text-white rounded d-flex justify-content-between align-items-center flex-wrap gap-2">
              <span className="fw-bold fs-6 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }}>
                <i className="ri-calculator-line text-warning"></i> TOTAL GENERAL
              </span>
              <span className="fw-extrabold text-warning" style={{ fontSize: '1.15rem' }}>
                ${totalPresupuesto.toLocaleString('es-AR')} ARS
              </span>
            </div>
          </div>
        )}
      </main>

      {/* Pie de página (Footer) */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-1 text-light opacity-75" style={{ fontSize: '0.75rem' }}>
            Taller Coral de Verano "Al calor de las voces"
          </p>
          <p className="mb-3 text-light opacity-75" style={{ fontSize: '0.75rem' }}>
            Zona de Chacras, Caleta Olivia
          </p>
          <a
            href={LINK_FORMULARIO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning fw-bold px-4 py-2 rounded-pill text-dark shadow-sm d-inline-flex align-items-center gap-2"
            style={{ fontSize: '0.85rem' }}
          >
            <i className="ri-music-2-line"></i> ¡Inscribite acá!
          </a>
        </div>
      </footer>
    </div>
  );
}