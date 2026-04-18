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

const stats = [
  { icon: Award, value: '10,000+', label: 'Procedimientos Quirúrgicos' },
  { icon: Shield, value: '25+', label: 'Años de Experiencia' },
  { icon: Clock, value: '98%', label: 'Tasa de Satisfacción' },
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
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return { zIndex: 40, x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 };
    if (diff === 1) return { zIndex: 30, x: 18, y: 10, scale: 0.92, rotate: 3, opacity: 0.85 };
    if (diff === 2) return { zIndex: 20, x: 34, y: 20, scale: 0.84, rotate: 6, opacity: 0.65 };
    return { zIndex: 10, x: 48, y: 30, scale: 0.76, rotate: 9, opacity: 0.4 };
  };

  return (
    <section className="relative min-h-screen rounded-3xl m-2 flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroBG})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a3d]/95 via-[#002855]/88 to-[#003d80]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> 
              <span className="text-blue-300 text-sm font-medium tracking-wide">Expertos Subespecialistas</span>
              
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
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
              className="text-blue-100/80 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Recupera tu calidad de vida con tecnología de punta y cirujanos con certificación internacional.
              Atención pluralista para pacientes con diagnóstico complejo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#003366] font-bold text-sm rounded-full hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                <Calendar className="w-4 h-4" />
                Agenda Cita
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full">
                <div className="text-center">
                  <p className="text-white font-bold text-base leading-tight">10,000+</p>
                  <p className="text-blue-300 text-xs leading-tight">Procedimientos Quirúrgicos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-1">
                    <stat.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-white font-bold text-xl">{stat.value}</p>
                  <p className="text-blue-300/80 text-xs leading-tight">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              {surgeonImages.map((src, i) => {
                const pos = getStackPosition(i);
                return (
                  <motion.div
                    key={i}
                    animate={{
                      x: pos.x,
                      y: pos.y,
                      scale: pos.scale,
                      rotate: pos.rotate,
                      opacity: pos.opacity,
                      zIndex: pos.zIndex,
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    onClick={() => setActiveIndex(i)}
                    className="absolute inset-0 cursor-pointer"
                    style={{ zIndex: pos.zIndex }}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                      <img
                        src={src}
                        alt="Cirujano especialista"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001a3d]/60 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                );
              })}

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
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
