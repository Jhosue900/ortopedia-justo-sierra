import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, Award, Shield, Clock } from 'lucide-react';
import HeroBG from '../images/HeroBG.jpeg';

const surgeonImages = [
  'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
];



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
    // Calculamos la distancia relativa al centro (-1, 0, 1, etc.)
    let diff = index - activeIndex;
    
    // Ajuste para que sea un carrusel infinito circular
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    return {
      zIndex: 40 - absDiff * 10,
      x: diff * 120, // Desplazamiento horizontal (ajusta este número según desees)
      scale: isCenter ? 1 : 0.8,
      opacity: isCenter ? 1 : 0.6,
      grayscale: isCenter ? 0 : 1, // 0 es color, 1 es blanco y negro
      brightness: isCenter ? 1 : 0.7,
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-[13rem]">
        <div className="flex flex-col gap-4 lg:gap-4 items-center">
          <div className="order-2 lg:order-1 text-center flex flex-col items-center justify-center pt-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-6 py-1.5 bg-transparent border border-white rounded-full mb-4"
            >
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" /> 
              <span className="text-white text-sm font-bold tracking-tight">Expertos Subespecialistas</span>
              
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-5xl lg:text-6xl font-extrabold text-white !leading-[1.3] tracking-tighter mb-4 max-w-4xl"
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
              className="text-white text-lg leading-relaxed mb-4 max-w-3xl"
            >
              Recupera tu calidad de vida con tecnología de punta y cirujanos con certificación internacional.
              Atención pluralista para pacientes con diagnóstico complejo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-4"
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-2 bg-white text-[#003366] font-bold text-base rounded-full hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                <Calendar className="w-4 h-4" />
                Agenda Cita
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="inline-flex items-center gap-3 px-6 py-1 border-white/20 backdrop-blur-sm rounded-full">
                <div className="text-start">
                  <p className="text-white font-bold text-base leading-tight">10,000+</p>
                  <p className="text-blue-300 text-base leading-tight">Procedimientos Quirúrgicos</p>
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
                        className="w-full h-full object-cover"
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
