import { motion } from 'framer-motion';

// Importa tus recursos aquí
// --- NUEVAS IMPORTACIONES DE INSTALACIONES ---
import img0296 from '../images/instalaciones/new/IMG_0296.jpg';
import img0297 from '../images/instalaciones/new/IMG_0297 (1).jpg';
import img0300 from '../images/instalaciones/new/IMG_0300.jpg';
import img0303 from '../images/instalaciones/new/IMG_0303.jpg';
import img0305 from '../images/instalaciones/new/IMG_0305.jpg';
import img0306 from '../images/instalaciones/new/IMG_0306.jpg';
import img0308 from '../images/instalaciones/new/IMG_0308.jpg';
import img0309 from '../images/instalaciones/new/IMG_0309.jpg';
import img0313 from '../images/instalaciones/new/IMG_0313.jpg';
import img0319 from '../images/instalaciones/new/IMG_0319.jpg';
import img0321 from '../images/instalaciones/new/IMG_0321.jpg';
import img0324 from '../images/instalaciones/new/IMG_0324.jpg';


const media = [
  /*{ type: 'image', src: img0296 },
  { type: 'image', src: img0297 },*/
  { type: 'image', src: img0300 },
  { type: 'image', src: img0303 },
  { type: 'image', src: img0305 },
  { type: 'image', src: img0306 },
  { type: 'image', src: img0308 },
  { type: 'image', src: img0309 },
  { type: 'image', src: img0313 },
  { type: 'image', src: img0319 },
  { type: 'image', src: img0321 },
  { type: 'image', src: img0324 },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-slate-50" id="instalaciones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Conoce Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001529] from-1% to-[#0066cc]">Instalaciones</span>
          </h2>
        </div>

        {/* Grid de Instalaciones */}
        {/* Grid de Instalaciones - Ajustado para 13 elementos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut"
              }}
              // Hacemos que algunas imágenes (como el video o la primera) resalten ocupando más espacio
              className={`group relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 h-[200px] md:h-[280px]
                ${item.type === 'video' ? 'col-span-2 row-span-1 md:col-span-2' : 'col-span-1'}
              `}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={`Instalación ${index}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
              ) : (
                <video 
                  src={item.src} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              )}
              
              {/* Overlay de diseño moderno */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001529]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Indicador visual para Video si fuera necesario */}
              
            </motion.div>
          ))}
        </div>
        
        
        {/* Mapa Interactivo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[1rem] overflow-hidden shadow-2xl border-4 border-white h-[450px] relative group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8228514120387!2d-103.3857502!3d20.6767858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae097063459d%3A0xc682976c6b290b2e!2sC.%20Justo%20Sierra%202420%2C%20Ladr%C3%B3n%20de%20Guevara%2C%20Americana%2C%2044600%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1715456000000!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Ortopedia Justo Sierra"
            className="grayscale-[20%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          {/* Badge de Dirección Flotante */}
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-200 max-w-sm">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Nuestra Ubicación</p>

            <p className="text-slate-800 font-semibold text-sm">
              Calle Justo Sierra 2420, Ladrón De Guevara, C.P. 44130 Guadalajara, Jal. México
            </p>

          </div>
        </motion.div>


      </div>
    </section>
  );
}