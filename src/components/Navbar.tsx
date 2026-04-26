import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Stethoscope } from 'lucide-react';
import LOGO  from '../images/LOGO.png'

const navLinks = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#002855]/95 pt-0 backdrop-blur-md shadow-lg' : 'bg-transparent pt-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8  sm:px-10 lg:px-10 py-2">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <img src={LOGO} alt="Ortopedia Justo Sierra" className="w-[9rem] h-14 sm:w-50 sm:h-[3.2rem] max-[500px]:w-[6.7rem] max-[500px]:h-[2.8rem]" />
          </a>

          <ul className="hidden lg:flex items-center gap-8 border border-gray-200/50 px-[30px] py-[6px] rounded-[30px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white hover:text-white text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="https://wa.me/5213340974859?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20un%20especialista%20ortop%C3%A9dico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-2.5 bg-white text-black text-sm font-normal rounded-full hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Agenda Ahora  →
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10 max-[500px]:h-8" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#002855]/98 backdrop-blur-md border-t border-white/10"
        >
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://wa.me/5213340974859?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20un%20especialista%20ortop%C3%A9dico."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 bg-white text-[#003366] rounded-full text-sm font-semibold text-center hover:bg-blue-50 transition-colors"
              >
                Agenda Ahora
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
