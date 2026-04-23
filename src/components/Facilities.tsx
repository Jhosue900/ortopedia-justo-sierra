import { motion } from 'framer-motion';

// Importa tus recursos aquí
import img1 from '../images/instalaciones/IMG_4451.jpeg';
import img2 from '../images/instalaciones/IMG_8649.jpeg';
import img3 from '../images/instalaciones/IMG_8656.jpeg';
import img4 from '../images/instalaciones/IMG_8660.jpeg';
import img5 from '../images/instalaciones/IMG_8654.jpeg';
import img6 from '../images/instalaciones/IMG_8658.jpeg';
import vid1 from '../images/instalaciones/IMG_7443.mp4';

const media = [
  { type: 'image', src: img1 },
  { type: 'image', src: img2 },
  { type: 'image', src: img3 },
  { type: 'video', src: vid1 },
  { type: 'image', src: img4 },
  { type: 'image', src: img5 },
  { type: 'image', src: img6 },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-slate-50" id="instalaciones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Conoce Nuestras <span className="text-blue-700">Instalaciones</span>
          </h2>
        </div>

        {/* Grid de Instalaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[300px] md:h-[350px] rounded-[1rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={`Instalación ${index}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              ) : (
                <video 
                  src={item.src} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              )}
              {/* Overlay sutil al hacer hover */}
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.026413726584!2d-89.632924!3d20.991583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5671607f0f6f0f%3A0x0!2zMjDCsDU5JzI5LjciTiA4OcKwMzcnNTguNSJX!5e0!3m2!1ses-419!2smx!4v1713830000000!5m2!1ses-419!2smx"
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
              Av. Justo Sierra, García Ginerés, 97070 Mérida, Yuc., México
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
}