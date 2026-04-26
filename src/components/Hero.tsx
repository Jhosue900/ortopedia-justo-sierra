import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import HeroBG from '../images/HeroBG.jpeg';

// Importación de tus imágenes locales
import dr1 from '../images/hero/84-IMG_3711.jpg';
import dr2 from '../images/hero/119-IMG_3620.jpg';
import dr3 from '../images/hero/129-IMG_3597.jpg';
import dr4 from '../images/hero/IMG_2774.jpeg';
import dr5 from '../images/hero/IMG_6620.jpeg';

const surgeonImages = [dr1, dr2, dr3, dr4, dr5];



export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % surgeonImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getStackPosition = (index: number) => {
    const total = surgeonImages.length;
    let diff = index - activeIndex;
    
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    return {
      zIndex: 40 - absDiff * 10,
      x: diff * 160, // Espaciado horizontal elegante
      scale: isCenter ? 1 : 0.85,
      opacity: absDiff > 1 ? 0 : isCenter ? 1 : 0.4, // Solo muestra la central y las 2 de los lados
      grayscale: isCenter ? 0 : 0.5, // Menos agresivo el blanco y negro
      brightness: isCenter ? 1 : 0.8,
    };
  };

  return (
    <section className="relative min-h-screen rounded-3xl m-2 flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroBG})`,
        }}
      />
      <div className="absolute inset-0 bg-[#003c7fcc]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[7rem] pb-[13rem]">
        <div className="flex flex-col gap-4 lg:gap-4 items-center">
          <div className="order-1 text-center flex flex-col items-center justify-center pt-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-6 py-[3px] bg-transparent border border-gray-200/50 rounded-full mb-2"
            >
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" /> 
              <span className="text-white text-sm font-bold tracking-tight">Expertos Subespecialistas</span>
              
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-extrabold text-white !leading-[1.3] tracking-tighter mb-4 max-w-4xl max-[1020px]:max-w-3xl max-[740px]:text-[2.4rem] max-[740px]:max-w-xl max-[585px]:text-[1.8rem]"
            >
              Unidad de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Especialidades
              </span>{' '}
              Ortopédicas y Traumatológicas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white text-lg leading-relaxed mb-4 max-w-[40rem] tracking-tight max-[740px]:text-[1rem] max-[740px]:max-w-[33rem]"
            >
              Recupera tu calidad de vida con tecnología de punta y cirujanos con certificación internacional.
              Atención priorista para pacientes con diagnóstico.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-4 justify-center"
            >
              <a
                href="https://wa.me/5213340974859?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20un%20especialista%20ortop%C3%A9dico."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-2 bg-white text-[#003366] font-bold text-base rounded-full hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                <Calendar className="w-4 h-4" />
                Agenda Cita
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="inline-flex items-center gap-3 px-6 py-1 border-white/20 backdrop-blur-sm rounded-full">
                <div className="text-start">
                  <p className="text-white font-bold text-base leading-tight">10,000+</p>
                  <p className="text-white text-base leading-tight">Procedimientos Quirúrgicos</p>
                </div>
              </div>
            </motion.div>

            
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative w-72 h-80 sm:w-[40rem] sm:h-96 mt-12">
              {surgeonImages.map((src, i) => {
                const pos = getStackPosition(i);
                return (
                  <motion.div
                    key={i}
                    animate={{
                      x: pos.x,
                      scale: pos.scale,
                      opacity: pos.opacity,
                      zIndex: pos.zIndex,
                      filter: `grayscale(${pos.grayscale}) brightness(${pos.brightness})`,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                    onClick={() => setActiveIndex(i)}
                    className="absolute inset-0 cursor-pointer flex justify-center items-center"
                  >
                    {/* Ajustamos el ancho para que se vea más estilizado como en la foto */}
                    <div className="w-64 h-80 sm:w-80 sm:h-[28rem] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                      <img
                        src={src}
                        alt="Cirujano especialista"
                        className="w-full h-full object-cover grayscale"
                        loading="eager"
                      />
                      {/* Overlay sutil para mejorar el contraste del texto si decides ponerle encima */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                );
              })}

              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                {surgeonImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === activeIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
