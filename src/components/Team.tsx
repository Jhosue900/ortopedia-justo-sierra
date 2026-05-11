import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Calendar } from 'lucide-react';

// --- IMPORTACIONES DE IMÁGENES DEL EQUIPO ---
import imgChavez from '../images/team/johnatan-german-main.jpg';
import imgRodriguez from '../images/team/oscar-rodriguez-main.jpg';
import imgSchiavon from '../images/team/miguel-angel-main.jpg';
import imgFajardo from '../images/team/miguel-fajardo-main.jpg';
import imgGaribaldi from '../images/team/garibaldi-corral-main.jpg';


import imgChavez2 from '../images/team/johnatan-german-2.jpg';
import imgRodriguez2 from '../images/team/oscar-rodriguez-2.jpg';
import imgSchiavon2 from '../images/team/miguel-angel-2.jpg';
import imgFajardo2 from '../images/team/miguel-fajardo-2.jpg';
import imgGaribaldi2 from '../images/team/garibaldi-corral-2.jpg';


const team = [
  {
    name: "Dr. Johnatan Chávez Padilla",
    role: "Traumatólogo Ortopedista",
    image: imgChavez,
    imageHover: imgChavez2,
    bio: "Especialista en Ortopedia y Traumatología (UAG) con 14 años de experiencia. Cuenta con un Máster en Cirugía Avanzada de Rodilla por la Clínica CEMTRO (España). Certificado por el CMOT. Miembro activo de CMOJAL, FEMECOT, AMJ, AMECRA e ISAKOS."
  },
  {
    name: "Dr. Óscar Rodríguez Gutiérrez",
    role: "Traumatólogo Ortopedista",
    image: imgRodriguez,
    imageHover: imgRodriguez2,
    bio: "Especialista en Ortopedia y Traumatología (UdeG) con 13 años de experiencia y adiestramiento enfocado en Cirugía de Columna (IMSS CMNO). Certificado por el CMOT. Es miembro de destacadas asociaciones: CMOJAL, FEMECOT, AMJ y AMCICO."
  },
  {
    name: "Dr. Miguel Ángel Schiavon Legorreta",
    role: "Traumatólogo Ortopedista",
    image: imgSchiavon,
    imageHover: imgSchiavon2,
    bio: "Médico especialista en Ortopedia y Traumatología (Univ. Cuauhtémoc) con 4 años de experiencia clínica. Avalado por su certificación vigente del CMOT. Forma parte activa de importantes colegios y asociaciones: CYOT, FEMECOT y AMECRA."
  },
  {
    name: "Dr. Alan Miguel Fajardo Mejía",
    role: "Traumatólogo Ortopedista",
    image: imgFajardo,
    imageHover: imgFajardo2,
    bio: "Especialista en Ortopedia y Traumatología (UdeG) con 2 años de experiencia. Destaca por su subespecialidad en Artroscopia y Lesiones Deportivas avalada por el Hospital Civil de Guadalajara. Médico altamente capacitado y certificado por el CMOT."
  },
  {
    name: "Dr. Luis Francisco Garibaldi Corral",
    role: "Traumatólogo Ortopedista",
    image: imgGaribaldi,
    imageHover: imgGaribaldi2,
    bio: "Médico especialista en Ortopedia y Traumatología (UdeG) con 2 años de experiencia brindando atención de calidad. Cuenta con la certificación oficial del CMOT y es miembro activo de asociaciones de gran prestigio como CMOJAL, FEMECOT y AMJ."
  }
];


// Componente invisible para precargar imágenes de hover
const ImagePreloader = () => (
  <div className="fixed opacity-0 pointer-events-none h-0 w-0 overflow-hidden" aria-hidden="true">
    {team.map((doc, i) => (
      <img key={i} src={doc.imageHover} alt="preload" />
    ))}
  </div>
);


export default function Team() {
  const [selectedDoctor, setSelectedDoctor] = useState<typeof team[0] | null>(null);

  return (
    <section className="py-24 bg-white" id="equipo">

      <ImagePreloader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Header de la sección (Ocupa el primer lugar) */}
          <div className="flex flex-col justify-center pr-8 mb-8 lg:mb-0">
            <span className="w-fit px-8 py-1.5 bg-[#a4d1ff] text-[#003e7c] text-xs font-bold tracking-tight uppercase rounded-full mb-6">
              Equipo
            </span>
            <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 tracking-tight !leading-[1.4] mb-4">
              Un Experto para Cada <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001529] from-30% to-[#0066cc]">Articulación.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Competimos con excelencia diagnóstica y destreza quirúrgica. Años de entrenamiento respaldan cada incisión.
            </p>
            <a 
              href="#contacto"
              className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-slate-50 text-slate-900 font-bold rounded-full border border-slate-200 hover:bg-slate-100 transition-all shadow-sm"
            >
              Agenda Cita <Calendar className="w-4 h-4" />
            </a>
          </div>

          {/* Grid de Doctores */}
          {team.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[620px] rounded-[2rem] overflow-hidden bg-[#e6f0ff] transition-all duration-500 cursor-pointer"
            >
              {/* Fondo con degradado en Hover */}
              {/* Fondo con degradado en Hover (Ajustado a z-0) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#003c7f] to-slate-950 z-0" />

              {/* Imagen del Doctor (Ajustada a z-10 y fondo transparente) */}
              {/* Contenedor de Imágenes con Crossfade */}
              <div className="absolute inset-0 z-10 p-4 pb-32">
                <div className="relative w-full h-full overflow-hidden rounded-[1.5rem]">

                  {/* Imagen Principal */}
                  {/*<img 
                    src={doc.image} 
                    alt={doc.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-110"
                  />*/}

                  {/* Imagen Secundaria (Hover) */}
                  {/*<img 
                    src={doc.imageHover} 
                    alt={`${doc.name} secundario`}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out"
                  />*/}

                  {/* Imagen Principal */}
                  <img 
                    src={doc.image} 
                    alt={doc.name}
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-110 [will-change:opacity,transform]"
                  />
                  {/* Imagen Secundaria (Hover) */}
                  <img 
                    src={doc.imageHover} 
                    alt={`${doc.name} secundario`}
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out [will-change:opacity,transform]"
                  />


                </div>
              </div>

              {/* Información Inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col items-center">
                <div className="bg-white rounded-2xl p-4 w-full text-center shadow-xl mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {doc.role}
                  </p>
                </div>
                
                {/* Botón Plus */}
                <button 
                  onClick={() => setSelectedDoctor(doc)}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#003e7c] shadow-lg hover:scale-110 transition-transform"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Biografía */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
            >


              <div className="p-8 md:p-12">
                <button 
                  onClick={() => setSelectedDoctor(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
                
                <div className="mb-6">
                  <span className="text-[#003e7c] font-bold text-sm tracking-widest uppercase mb-2 block">Trayectoria Profesional</span>
                  <h3 className="text-3xl font-bold text-slate-900">{selectedDoctor.name}</h3>
                  <p className="text-blue-600 font-semibold">{selectedDoctor.role}</p>
                </div>

                
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedDoctor.bio}
                </p>

                <a 
                  href={`https://wa.me/5213340974859?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20el%20${encodeURIComponent(selectedDoctor.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedDoctor(null)}
                  className="block w-full py-4 bg-[#003e7c] text-white text-center font-bold rounded-2xl hover:bg-[#002d5a] transition-colors shadow-lg"
                >
                  Contactar Especialista
                </a>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}