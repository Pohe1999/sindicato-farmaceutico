import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


function App() {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="font-sans bg-gray-100 text-gray-900">
     {/* Navbar */}
     <nav className="fixed z-50 w-full h-[65px] flex font-sans justify-between items-center sm:px-20 px-4 bg-emerald-800 text-white">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Logotipo del Sindicato"
            className="h-12 w-12"
          />
          <a href="/" className="text-white text-lg sm:text-2xl font-semibold border-b-2">
            Ingresar logo
          </a>
        </div>

        {/* Menú escritorio */}
        <ul className="hidden md:flex justify-between items-center space-x-5 text-white">
          <li>
            <Link
              className="cursor-pointer hover:text-emerald-300"
              to="inicio"
              smooth={true}
              duration={1000}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-emerald-300"
              to="nosotros"
              smooth={true}
              duration={1000}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-emerald-300"
              to="actividades"
              smooth={true}
              duration={1000}
            >
              Actividades
            </Link>
          </li>
          <li className="py-1 px-2 text-lg font-medium text-black bg-emerald-300 rounded-xl cursor-pointer">
            <Link to="contacto" smooth={true} duration={1000}>
              Contacto
            </Link>
          </li>
        </ul>

        {/* Hamburguesa */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>

        {/* Menú móvil */}
        <ul
          className={`${
            !nav
              ? 'hidden opacity-0 transition-opacity duration-300'
              : 'absolute top-0 left-0 w-full h-screen bg-emerald-800 opacity-95 flex flex-col justify-center items-center transition-all ease-in-out duration-300'
          }`}
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="inicio" smooth={true} duration={1000}>
              Inicio
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="nosotros" smooth={true} duration={1000}>
              Nosotros
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="actividades" smooth={true} duration={1000}>
              Actividades
            </Link>
          </li>
          <li className="py-6 text-4xl font-medium text-black bg-emerald-300 rounded-xl px-11 cursor-pointer">
            <Link onClick={handleClick} to="contacto" smooth={true} duration={1000}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

        {/* Inicio */}
        <section id="inicio" className="min-h-screen flex justify-center items-center bg-emerald-600 text-white text-center relative overflow-hidden">
          {/* Background Image with Low Opacity */}
          <div 
            className="absolute inset-0 bg-[url('/main-page-2.jpg')] bg-cover bg-center" 
            style={{ opacity: 0.55 }}
          ></div>
          {/* Semi-transparent Overlay to Maintain Green Dominance */}
          <div className="absolute inset-0 bg-emerald-500 opacity-10"></div>
          
          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-4 z-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
              Bienvenidos al Sindicato Farmacéutico Nacional
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprometidos con la defensa de los derechos laborales y el bienestar de los profesionales farmacéuticos en México.
            </p>
          </div>
        </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-800 mb-6">Nosotros</h2>
          <div className="space-y-8">
            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-emerald-600">
              <h3 className="text-2xl font-semibold text-emerald-600 tracking-tight">Misión</h3>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Promover la unidad, el desarrollo profesional y la defensa de los derechos laborales de los farmacéuticos, garantizando condiciones dignas de trabajo y contribuyendo al bienestar de la sociedad.
              </p>
              <div className="absolute inset-0 border-2 border-transparent hover:border-emerald-300 rounded-lg transition-all duration-300"></div>
            </div>
            <div className='relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-emerald-600'>
              <h3 className="text-2xl font-semibold text-emerald-600 tracking-tight">Visión</h3>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Ser la organización referente en la representación y fortalecimiento de los profesionales farmacéuticos, impulsando la excelencia en el sector salud.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-emerald-600">Valores</h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="relative bg-emerald-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-emerald-600">
                  <h4 className="text-xl font-medium text-emerald-600 tracking-tight">Solidaridad</h4>
                  <div className="absolute inset-0 border-2 border-transparent hover:border-emerald-300 rounded-lg transition-all duration-300"></div>
                </div>
                <div className="relative bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-emerald-600">
                  <h4 className="text-xl font-medium text-emerald-600 tracking-tight">Ética profesional</h4>
                  <div className="absolute inset-0 border-2 border-transparent hover:border-emerald-300 rounded-lg transition-all duration-300"></div>
                </div>
                <div className="relative bg-yellow-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-emerald-600">
                  <h4 className="text-xl font-medium text-emerald-600 tracking-tight">Compromiso</h4>
                  <div className="absolute inset-0 border-2 border-transparent hover:border-emerald-300 rounded-lg transition-all duration-300"></div>
                </div>
                <div className="relative bg-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-emerald-600">
                  <h4 className="text-xl font-medium text-emerald-600 tracking-tight">Respeto</h4>
                  <div className="absolute inset-0 border-2 border-transparent hover:border-emerald-300 rounded-lg transition-all duration-300"></div>
                </div>
                <div className="relative bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-emerald-600">
                  <h4 className="text-xl font-medium text-emerald-600 tracking-tight">Transparencia</h4>
                  <div className="absolute inset-0 border-2 border-transparent hover:border-emerald-300 rounded-lg transition-all duration-300"></div>
                </div>
              </div>
            </div>
            <div className="relative py-12 px-6 bg-gradient-to-br from-emerald-50 to-teal-100 overflow-hidden">
            {/* Background Vector SVG */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1080C200 900 400 720 600 720C800 720 1000 900 1200 1080L1920 1080V0H0V1080Z" fill="#10B981"/>
                <path d="M0 900C150 750 350 600 600 600C850 600 1050 750 1200 900" stroke="#10B981" strokeWidth="50" strokeOpacity="0.5"/>
                <circle cx="1600" cy="200" r="150" fill="#6EE7B7" fillOpacity="0.3"/>
              </svg>
            </div>
  
              {/* Content */}
              <div className="relative max-w-4xl mx-auto animate-fadeIn">
                <h3 className="text-3xl font-bold text-emerald-700 tracking-tight text-center drop-shadow-md">
                  Historia
                </h3>
                <p className="mt-6 text-lg text-gray-800 leading-relaxed text-justify max-w-3xl mx-auto bg-white/80 p-6 rounded-lg shadow-lg border border-emerald-200">
                  Fundado en 1990, el Sindicato Farmacéutico Nacional nace con el propósito de unir a los profesionales del sector farmacéutico en México para enfrentar los desafíos laborales y promover mejoras en sus condiciones de trabajo. A lo largo de los años, hemos luchado por la dignificación de la profesión y el reconocimiento de su importancia en el sistema de salud.
                </p>
              </div>
            </div>

            <div className="py-12 px-4 bg-gradient-to-br from-emerald-50 to-teal-100">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-emerald-700 text-center md:text-left drop-shadow-md">
                  Información Legal
                </h3>
                <div className="text-left text-lg text-gray-800 leading-relaxed bg-white/80 p-6 rounded-lg shadow-lg border border-emerald-200">
                  <p>
                    <strong>Figura Legal:</strong> Asociación Civil
                  </p>
                  <p>
                    <strong>Registro Legal:</strong> SFN-1990-00123
                  </p>
                  <p>
                    <strong>Equipo Responsable:</strong> Consejo Directivo presidido por Dra. María Elena Gómez
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img
                  src="/imagen-mision.jpg"
                  alt="Misión del Sindicato Farmacéutico Nacional"
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg border border-emerald-200"
                />
                <div className="absolute inset-0 bg-emerald-600 opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Actividades */}
      <section id="actividades" className="py-16 relative bg-gray-100 text-center overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div 
          className="absolute inset-0 bg-[url('/fondo-1.jpg')] bg-cover bg-center" 
          style={{ opacity: 1 }}
        ></div>  
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6 drop-shadow-md">
            Actividades
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-800 leading-relaxed">
            Conoce algunas de las actividades y eventos organizados por el sindicato para promover la formación y el bienestar de nuestros miembros.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="Congreso Farmacéutico 2024"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-emerald-700">Congreso Farmacéutico 2024</h3>
              <p className="mt-2 text-gray-600">Evento anual para actualizar conocimientos y fomentar el networking.</p>
            </div>
            <div className="bg-white/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="Campaña de Salud 2023"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-emerald-700">Campaña de Salud 2023</h3>
              <p className="mt-2 text-gray-600">Jornada de atención gratuita en comunidades vulnerables.</p>
            </div>
            <div className="bg-white/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="Taller de Capacitación"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-emerald-700">Taller de Capacitación</h3>
              <p className="mt-2 text-gray-600">Formación en nuevas normativas farmacéuticas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-emerald-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className='bg-emerald-50 text-emerald-800 rounded-md p-1 mb-2'>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Contacto</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Ponte en contacto con nosotros para más información o para unirte al sindicato.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <p><strong>Correo:</strong> contacto@sindicatofarmaceutico.org</p>
              <p><strong>Teléfono:</strong> (55) 1234-5678 / (55) 8765-4321</p>
              <p><strong>Dirección:</strong> Av. Salud 123, Col. Centro, CDMX, México</p>
              <h3 className="text-xl font-semibold mt-6 mb-4">Redes Sociales</h3>
              <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                <a
                  href="https://facebook.com/sindicatofarmaceutico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-blue-600 rounded-lg shadow-md hover:shadow-lg hover:brightness-110 hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-white text-lg font-medium">Facebook</span>
                </a>
                <a
                  href="https://instagram.com/sindicatofarmaceutico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-md hover:shadow-lg hover:ring-2 hover:ring-pink-400 hover:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-white text-lg font-medium">Instagram</span>
                </a>
                <a
                  href="https://twitter.com/sindicato_farma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-sky-500 rounded-lg shadow-md hover:shadow-lg hover:brightness-110 hover:ring-2 hover:ring-sky-400 hover:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-white text-lg font-medium">Twitter</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Escríbenos</h3>
              <div className="max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-white"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-white"
                />
                <textarea
                  placeholder="Mensaje"
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-white"
                  rows="4"
                ></textarea>
                <button
                  type="button"
                  className="w-full bg-emerald-600 text-white p-3 rounded-lg hover:bg-emerald-500"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>Sindicato Farmacéutico Nacional - Asociación Civil</p>
        <p>Registro Legal: SFN-1990-00123</p>
        <p>Av. Salud 123, Col. Centro, CDMX, México | contacto@sindicatofarmaceutico.org</p>
        <p>© 2025 Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;