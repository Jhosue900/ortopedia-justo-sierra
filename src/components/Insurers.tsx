import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import LogoCarousel from './LogoCarousel';

// Al principio de Insurers.tsx, importa los assets
import allianz from '../images/aseguradoras/Allianz-logo.png';
import bbva from '../images/aseguradoras/BBVA seguros PNG.png';
import vepormas from '../images/aseguradoras/Logo_del_Banco_Ve_por_Mas.svg.png';
import mapfre from '../images/aseguradoras/Mapfre_logo.svg.png';
import planSeguro from '../images/aseguradoras/Plan seguro logo.png';
import axa from '../images/aseguradoras/axa-logo-0.png';
import gnp from '../images/aseguradoras/gnp-seguros.png';
import metlife from '../images/aseguradoras/metlife-logo-0.png';
import sura from '../images/aseguradoras/png-clipart-grupo-sura.png';
import banorte from '../images/aseguradoras/png-clipart-insurance-banorte-valladolid-insurer-axa-others-text-logo.png';
import zurich from '../images/aseguradoras/png-clipart-zurich-insurance-group-logo-zurich.png';
import monterrey from '../images/aseguradoras/seguros-monterrey-logo-png.png';

const insurerLogos = [
  { name: 'GNP', src: gnp },
  { name: 'Sura', src: sura },
  { name: 'Mapfre', src: mapfre },
  { name: 'Allianz', src: allianz },
  { name: 'MetLife', src: metlife },
  { name: 'BBVA', src: bbva },
  { name: 'Seguros Monterrey', src: monterrey },
  { name: 'Plan Seguro', src: planSeguro },
  { name: 'Zurich', src: zurich },
  { name: 'Banorte', src: banorte },  
  { name: 'Ve por Más', src: vepormas },
  { name: 'AXA', src: axa },
];




export default function Insurers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" className="py-12 bg-gray-50" ref={ref}>
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
        <LogoCarousel logos={insurerLogos} reverse speed={22} />
      </motion.div>

      
    </section>
  );
}
