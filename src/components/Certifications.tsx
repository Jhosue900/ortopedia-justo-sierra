import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import LogoCarousel from './LogoCarousel';

const certLogos = [
  { name: 'AAOS', abbr: 'AAOS', color: '#003366' },
  { name: 'AMCOT', abbr: 'AMCOT', color: '#1a5276' },
  { name: 'SMCC', abbr: 'SMCC', color: '#154360' },
  { name: 'SOMI', abbr: 'SOMI', color: '#1b4f72' },
  { name: 'AOFAS', abbr: 'AOFAS', color: '#003366' },
  { name: 'COA', abbr: 'COA', color: '#21618c' },
  { name: 'IMSS', abbr: 'IMSS', color: '#006341' },
  { name: 'CONAMED', abbr: 'CNM', color: '#922b21' },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="especialidades" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-3">Reconocimientos</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Certificados por{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#0066cc]">
              Excelencia
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            Avalados por las principales organizaciones médicas nacionales e internacionales del sector ortopédico.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <LogoCarousel logos={certLogos} speed={28} />
      </motion.div>
    </section>
  );
}
