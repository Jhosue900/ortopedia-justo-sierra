import { Facebook, Instagram, Calendar } from 'lucide-react';
import logo from '../images/LOGO.png';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sección Superior: CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
          <h3 className="text-3xl md:text-4xl font-bold max-w-3xl leading-tight tracking-tight text-center md:text-left">
            El siguiente paso hacia una vida sin dolor comienza con la asesoría médica correcta.
          </h3>
          <a 
            href="https://wa.me/5213340974859?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20un%20especialista%20ortop%C3%A9dico."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0a1628] px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex-shrink-0"
          >
            Agenda Cita <Calendar className="w-5 h-5" />
          </a>
        </div>

        {/* Línea Divisora */}
        <div className="h-[2.5px] bg-white/30 w-full mb-16" />

        {/* Sección Media: Info y Logo */}
        <div className="grid md:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Columna Izquierda: Datos */}
          <div className="md:col-span-7 space-y-8 tracking-tight">
            <p className="text-blue-100/70 text-xl leading-relaxed tracking-tight">
              Somos un equipo de médicos cirujanos especialistas en Traumatología y Ortopedia con sede en la ciudad de Guadalajara Jal. México
            </p>
            
            <div className="space-y-4">
              <a 
                href="tel:+523335596152" 
                className="block text-xl font-semibold hover:text-blue-300 transition-colors"
              >
                (+52) 33 3559 6152
              </a>
              <p className="text-blue-100/70 max-w-xs">
                Calle Justo Sierra 2420, Ladrón De Guevara, <br />
                C.P. 44130 Guadalajara, Jal. México
              </p>
            </div>

            <a href="#" className="inline-block text-lg text-blue-100/60 hover:text-white underline underline-offset-4 transition-colors">
              Aviso de Privacidad
            </a>
          </div>

          {/* Columna Derecha: Logo y Social */}
          <div className="md:col-span-5 flex flex-col items-center md:items-center gap-10">
            <img 
              src={logo} 
              alt="Grupo Ortopedia Justo Sierra" 
              className="h-24 md:h-28 object-contain"
            />
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Sección Inferior: Copyright */}
        <div className="text-center pt-10 border-t border-white/5">
          <p className="text-sm text-gray-300/80 font-medium tracking-tight">
            Copyright © {new Date().getFullYear()} Grupo Ortopedia | Designed by weprom
          </p>
        </div>

      </div>
    </footer>
  );
}