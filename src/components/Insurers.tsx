import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import LogoCarousel from './LogoCarousel';

const insurerLogos = [
  { name: 'MAPFRE', abbr: 'MAPFRE', color: '#cc0000' },
  { name: 'MetLife', abbr: 'MET', color: '#005487' },
  { name: 'Seguros Atlas', abbr: 'ATLAS', color: '#1b5e20' },
  { name: 'Seguros Monterrey', abbr: 'SMN', color: '#003580' },
  { name: 'GNP', abbr: 'GNP', color: '#e65100' },
  { name: 'AXA', abbr: 'AXA', color: '#00008f' },
  { name: 'Latino Seguros', abbr: 'LTNO', color: '#6a1b9a' },
  { name: 'BUPA', abbr: 'BUPA', color: '#004f9f' },
  { name: 'Zurich', abbr: 'ZURICH', color: '#0d47a1' },
  { name: 'HDI', abbr: 'HDI', color: '#c62828' },
];

export default function Insurers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-3">Cobertura Amplia</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Convenio con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#0066cc]">
              Aseguradoras
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            Trabajamos con las principales aseguradoras del país para que tu atención esté siempre cubierta.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <LogoCarousel logos={insurerLogos} reverse grayscale speed={22} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="bg-gradient-to-br from-[#002855] to-[#004080] rounded-3xl p-10 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">¿Listo para recuperar tu movilidad?</h3>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">
            Agenda tu consulta hoy y da el primer paso hacia una vida sin dolor. Nuestros especialistas están listos para atenderte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+525500000000"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#003366] font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/525500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all shadow-lg hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
