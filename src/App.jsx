import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function App() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Datos para la sección de municipios
  const municipios = [
    { nombre: 'Tolcayuca', img: '/tolcayuca.jpeg', link: 'https://www.tolcayucahidalgo.gob.mx' },
    { nombre: 'San martin de las piramides', img: '/san-martin-de-las-piramides.jpeg', link: 'https://sanmartindelaspiramides.gob.mx' },
    { nombre: 'Teotihuacán', img: '/teotihuacan.jpeg', link: 'https://teotihuacan.gob.mx/inicio' },
    { nombre: 'Tonanitla', img: '/tonanitla.jpeg', link: 'https://tonanitla.gob.mx' },
    { nombre: 'Axapusco', img: '/axapusco.jpeg', link: 'https://axapusco.edomex.gob.mx' },
    { nombre: 'Morelos', img: '/dif-morelos.jpg', link: 'https://www.morelos.gob.mx' },
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="fixed z-50 w-full h-[65px] flex font-sans justify-between items-center sm:px-20 px-4 bg-[#6a1e33] text-white">
        <div className="flex items-center space-x-4">
          <img
            src="/logo-ac.jpeg"
            alt="Logotipo del Sindicato"
            className="h-12 w-auto rounded-sm"
          />
        </div>

        {/* Menú escritorio */}
        <ul className="hidden md:flex justify-between items-center space-x-5 text-white">
          <li>
            <Link
              className="cursor-pointer hover:text-[#e6c2cc]"
              to="inicio"
              smooth={true}
              duration={1000}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-[#e6c2cc]"
              to="nosotros"
              smooth={true}
              duration={1000}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-[#e6c2cc]"
              to="actividades"
              smooth={true}
              duration={1000}
            >
              Actividades
            </Link>
          </li>
          <li className="py-1 px-2 text-lg font-medium text-white bg-[#e6c2cc] rounded-xl cursor-pointer">
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
              : 'absolute top-0 left-0 w-full h-screen bg-[#6a1e33] opacity-95 flex flex-col justify-center items-center transition-all ease-in-out duration-300'
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
          <li className="py-6 text-4xl font-medium text-white bg-[#e6c2cc] rounded-xl px-11 cursor-pointer">
            <Link onClick={handleClick} to="contacto" smooth={true} duration={1000}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      {/* Inicio */}
      <section id="inicio" className="min-h-screen flex justify-center items-center bg-[#6a1e33] text-white text-center relative overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div 
          className="absolute inset-0 bg-[url('/main-page-2.jpg')] bg-cover bg-center" 
          style={{ opacity: 0.55 }}
        ></div>
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-[#983c4e] opacity-10"></div>
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
            <span className=''>"Medicamentos para el bienestar del Estado de México"</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-justify">
            Comprometidos con la defensa de los derechos laborales y el bienestar de los profesionales farmacéuticos en México.
          </p>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#6a1e33] mb-6">Nosotros</h2>
          <div className="space-y-8">
            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#6a1e33]">
              <h3 className="text-2xl font-semibold text-[#6a1e33] tracking-tight">Misión</h3>
              <p className="mt-4 text-lg text-[#7c7c7c] leading-relaxed max-w-3xl mx-auto text-justify">
                Contribuir al fortalecimiento del sistema de salud y al bienestar social mediante alianzas estratégicas con instituciones gubernamentales, empresas farmacéuticas, laboratorios y otros actores del sector salud, enfocándonos en la recepción, gestión y distribución responsable de medicamentos, insumos y equipo médico. Promovemos también el desarrollo científico, educativo y cultural a través de programas de investigación, preservación del patrimonio, fomento a las artes y el otorgamiento de becas.
              </p>
              <div className="absolute inset-0 border-2 border-transparent hover:border-[#e6c2cc] rounded-lg transition-all duration-300"></div>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#6a1e33]">
              <h3 className="text-2xl font-semibold text-[#6a1e33] tracking-tight">Visión</h3>
              <p className="mt-4 text-lg text-[#7c7c7c] leading-relaxed max-w-3xl mx-auto text-justify">
                Ser una organización referente a nivel nacional por su capacidad de articular esfuerzos entre el sector público y privado en favor de la salud, la ciencia, la cultura y la educación; consolidándonos como un aliado confiable para gobiernos, empresas farmacéuticas y laboratorios, comprometidos con la equidad, la inclusión y el desarrollo sustentable de las comunidades.
              </p>
              <div className="absolute inset-0 border-2 border-transparent hover:border-[#e6c2cc] rounded-lg transition-all duration-300"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#6a1e33]">Valores</h3>
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
            <div className="relative py-12 px-6 bg-gradient-to-br from-[#f9e6eb] to-[#d9d9d9] overflow-hidden">
              {/* Background Vector SVG */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1080C200 900 400 720 600 720C800 720 1000 900 1200 1080L1920 1080V0H0V1080Z" fill="#6a1e33"/>
                  <path d="M0 900C150 750 350 600 600 600C850 600 1050 750 1200 900" stroke="#6a1e33" strokeWidth="50" strokeOpacity="0.5"/>
                  <circle cx="1600" cy="200" r="150" fill="#7c7c7c" fillOpacity="0.3"/>
                </svg>
              </div>
              {/* Content */}
              <div className="relative max-w-4xl mx-auto animate-fadeIn">
                <h3 className="text-3xl font-bold text-[#6a1e33] tracking-tight text-center drop-shadow-md">
                  Nuestro propósito
                </h3>
                <p className="mt-6 text-lg text-[#7c7c7c] leading-relaxed text-justify max-w-3xl mx-auto bg-white/80 p-6 rounded-lg shadow-lg border border-[#e6c2cc]">
                  Reducir las desigualdades sociales en salud, educación y cultura mediante un modelo colaborativo que involucra a instituciones públicas, empresas del sector salud y sociedad civil, generando soluciones solidarias, científicas y culturales que eleven la calidad de vida, promuevan el conocimiento y preserven el patrimonio de nuestras comunidades.
                </p>
              </div>
            </div>

            {/* Nueva sección: Municipios Donde Hemos Colaborado */}
            <section id="municipios" className="py-12 px-4 bg-gradient-to-br from-[#f9e6eb] to-[#d9d9d9]">
              <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-[#6a1e33] mb-6">Municipios Donde Hemos Colaborado</h3>
                <p className="text-lg text-[#7c7c7c] mb-8 max-w-3xl mx-auto text-justify leading-relaxed">
                  Conoce los municipios dónde hemos trabajado para fortalecer la salud y el bienestar a través de donaciones, campañas y alianzas estratégicas.
                </p>

                {/* Grid de imágenes en móvil (3 columnas) */}
                <div className="grid grid-cols-3 gap-4 sm:hidden px-4">
                  {municipios.map((municipio, index) => (
                    <a href={municipio.link} target="_blank" rel="noopener noreferrer" key={index} className="group">
                      <div className="flex justify-center items-center p-2 bg-white rounded-lg shadow-lg group-hover:shadow-2xl transition duration-300">
                        <img className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition duration-300" src={municipio.img} alt={municipio.nombre} />
                      </div>
                      <p className="text-center mt-1 text-[#7c7c7c] text-xs group-hover:text-[#6a1e33] transition duration-300">{municipio.nombre}</p>
                    </a>
                  ))}
                </div>

                {/* Grid de imágenes para pantallas más grandes */}
                <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center px-8">
                  {municipios.map((municipio, index) => (
                    <a href={municipio.link} target="_blank" rel="noopener noreferrer" key={index} className="group">
                      <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg group-hover:shadow-2xl transition duration-300">
                        <img className="w-24 h-24 object-contain grayscale group-hover:grayscale-0 transition duration-300" src={municipio.img} alt={municipio.nombre} />
                      </div>
                      <p className="text-center mt-2 text-[#7c7c7c] group-hover:text-[#6a1e33] transition duration-300">{municipio.nombre}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <div className="py-12 px-4 bg-gradient-to-br from-[#f9e6eb] to-[#d9d9d9]">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#6a1e33] text-center md:text-left drop-shadow-md">
                    Información Legal
                  </h3>
                  <div className="text-left text-lg text-[#7c7c7c] leading-relaxed bg-white/80 p-6 rounded-lg shadow-lg border border-[#e6c2cc]">
                    {/*<p>
                      <strong>Figura Legal:</strong> Asociación Civil
                    </p>
                    <p>
                      <strong>Registro Legal:</strong> SFN-1990-00123
                    </p> */}
                    <p>
                      <strong>Equipo Responsable:</strong> Consejo Directivo presidido por Erika Ariadna Monje Garcia <br /> <strong>Vicepresidenta:</strong> Tatiana Alondra Monje Garcia
                    </p>
                  </div>
                </div>
                {/* Image */}
                <div className="relative">
                  <img
                    src="/imagen-mision.jpg"
                    alt="Misión del Sindicato Farmacéutico Nacional"
                    className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg border border-[#e6c2cc]"
                  />
                  <div className="absolute inset-0 bg-[#6a1e33] opacity-10 rounded-lg"></div>
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
          style={{ opacity: 0.15 }}
        ></div>
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9e6eb]/90 to-[#d9d9d9]/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6a1e33] mb-6 drop-shadow-md">
            Actividades
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-[#7c7c7c] leading-relaxed text-justify">
            Conoce algunas de las actividades y eventos organizados por mbem para promover la formación y el bienestar de nuestros miembros.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/actividades-1.jpg"
                alt="Congreso Farmacéutico 2024"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-[#6a1e33]">Donación de medicamentos al movimiento MOVA</h3>
            </div>
            <div className="bg-white/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/actividades-3.jpg"
                alt="Campaña de Salud 2023"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-[#6a1e33]">Entrega de donativo a los representantes de la diputada federal, Claudia Garfias.</h3>
            </div>
            <div className="bg-white/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/actividades-2.jpg"
                alt="Taller de Capacitación"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-[#6a1e33]">Donación de medicamentos en el Municipio de Otumba, Estado de México</h3>
            </div>
            <div className="bg-white/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/actividades-4.jpeg"
                alt="Taller de Capacitación"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-[#6a1e33]">Donación de medicamentos en el Municipio de Donato Guerra, Estado de México</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-[#6a1e33] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#f9e6eb] text-[#6a1e33] rounded-md p-1 mb-2">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Contacto</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-justify">
              Ponte en contacto con nosotros para más información o para unirte a MBEM.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <p><strong>Correo:</strong> embemasociacion@gmail.com</p>
              <p><strong>Teléfono:</strong> 55 4803 6582</p>
              <p><strong>Dirección:</strong> C. de Los Maestros, 55740 Tecámac de Felipe Villanueva, Méx.</p>
              <h3 className="text-xl font-semibold mt-6 mb-4">Redes Sociales</h3>
              <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61577090270723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-[#1877F2] rounded-lg shadow-md hover:shadow-lg hover:brightness-110 hover:ring-2 hover:ring-[#aecbfa] hover:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-white text-lg font-medium">Facebook</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/embem.a.s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] rounded-lg shadow-md hover:shadow-lg hover:ring-2 hover:ring-[#f7c1b7] hover:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-white text-lg font-medium">Instagram</span>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/embem_a_s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-black rounded-lg shadow-md hover:shadow-lg hover:brightness-110 hover:ring-2 hover:ring-gray-400 hover:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-white text-lg font-medium">X</span>
                </a>
              </div>

            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Escríbenos</h3>
              <div className="max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-3 mb-4 rounded-lg border border-[#7c7c7c] text-[#7c7c7c] bg-white"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-3 mb-4 rounded-lg border border-[#7c7c7c] text-[#7c7c7c] bg-white"
                />
                <textarea
                  placeholder="Mensaje"
                  className="w-full p-3 mb-4 rounded-lg border border-[#7c7c7c] text-[#7c7c7c] bg-white"
                  rows="4"
                ></textarea>
                <button
                  type="button"
                  className="w-full bg-[#6a1e33] border-1 text-white p-3 rounded-lg hover:bg-[#5c1a2b]"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#40121d] text-white py-6 text-center">
        <p>MBEM - Asociación Civil</p>
        <p>Registro Legal: SFN-1990-00123</p>
        <p> C. de Los Maestros, 55740 Tecámac de Felipe Villanueva, Méx. | embemasociacion@gmail.com</p>
        <p>© 2025 Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;