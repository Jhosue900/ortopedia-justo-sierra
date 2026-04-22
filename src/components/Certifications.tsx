import { motion, useInView } from 'framer-motion'; // Simplificado en una sola línea
import { useRef } from 'react';
import LogoCarousel from './LogoCarousel';

// --- NUEVAS IMPORTACIONES DE IMÁGENES ---
import logoAmcico from '../images/certificaciones/AMCICO LOGO PNG.png';
import logoCmot from '../images/certificaciones/CC_Logos_0__CMOT.png';
import logoFemecot from '../images/certificaciones/CC_Logos_0__Femecot.png';
import logoImss from '../images/certificaciones/IMSS-Logo-700x394.png';
import logoCertificado from '../images/certificaciones/Logo-Certificado_700x500px.png';
import logoHospitales from '../images/certificaciones/Logo-Hospitales-Guadalajara.png';
import logoMembership from '../images/certificaciones/Membership-Badge.png';
import logoUag from '../images/certificaciones/UAG-Universidad-Autonoma-de-Guadalajara-Logo-Vector.svg-.png';
import logoAmecra from '../images/certificaciones/amecra-MR__.png';
import logoCemtro from '../images/certificaciones/clinica-cemtro-logo.png';
import logoExtra from '../images/certificaciones/idn9Kpw4Vh_1776207160742.png';

const certLogos = [
  { name: 'AMCICO', src: logoAmcico },
  { name: 'CMOT', src: logoCmot },
  { name: 'FEMECOT', src: logoFemecot },
  { name: 'IMSS', src: logoImss },
  { name: 'Consejo Mexicano Ortopedia', src: logoCertificado },
  { name: 'Hospitales Guadalajara', src: logoHospitales },
  { name: 'Membership Badge', src: logoMembership },
  { name: 'UAG', src: logoUag },
  { name: 'AMECRA', src: logoAmecra },
  { name: 'Clínica CEMTRO', src: logoCemtro },
  { name: 'Certificación Profesional', src: logoExtra },
  // Mantenemos AAOS como texto si no tienes el logo aún:
  { name: 'AAOS', abbr: 'AAOS', color: '#003366' },
];

// El resto del componente Certifications() se queda exactamente igual...

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="especialidades" className="py-12 bg-white" ref={ref}>
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
