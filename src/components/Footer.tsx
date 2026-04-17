import { Stethoscope, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const specialties = [
  'Cirugía de Columna',
  'Reemplazo de Rodilla',
  'Reemplazo de Cadera',
  'Cirugía de Hombro',
  'Cirugía de Pie y Tobillo',
  'Artroscopia',
];

export default function Footer() {
  return (
    <footer className="bg-[#001a3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-[#003366]" />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">ORTOPEDIA</p>
                <p className="text-blue-400 text-xs leading-tight font-medium tracking-widest">JUSTO SIERRA</p>
              </div>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
              Clínica líder en ortopedia y traumatología con más de 25 años de experiencia y más de 10,000 procedimientos exitosos.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-5">Especialidades</h4>
            <ul className="space-y-2.5">
              {specialties.map((s) => (
                <li key={s}>
                  <a href="#especialidades" className="text-blue-200/70 hover:text-white text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-5">Clínica</h4>
            <ul className="space-y-2.5">
              {['Nuestro Equipo', 'Instalaciones', 'Testimonios', 'Blog', 'Preguntas Frecuentes', 'Trabaja con Nosotros'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-blue-200/70 hover:text-white text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200/70 text-sm">Av. Justo Sierra 1234, Col. Centro, CDMX, México</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+525500000000" className="text-blue-200/70 hover:text-white text-sm transition-colors">
                  +52 55 0000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@ortopediajustusierra.mx" className="text-blue-200/70 hover:text-white text-sm transition-colors">
                  info@ortopediajustusierra.mx
                </a>
              </li>
            </ul>
            <div className="mt-6 p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-blue-300 font-semibold mb-0.5">Horario de Atención</p>
              <p className="text-blue-200/70 text-xs">Lun – Vie: 8:00 – 20:00</p>
              <p className="text-blue-200/70 text-xs">Sáb: 9:00 – 14:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-blue-300/60 text-xs">
            © {new Date().getFullYear()} Ortopedia Justo Sierra. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {['Aviso de Privacidad', 'Términos de Uso', 'Cookies'].map((l) => (
              <a key={l} href="#" className="text-blue-300/60 hover:text-white text-xs transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
