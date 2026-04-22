import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const specialties = [
  {
    title: 'Prótesis Articulares',
    description: 'Reemplazo total o parcial para recuperar tu movilidad. (Rodilla, Cadera, Hombro).',
    image: 'https://conideintelligente.com/wp-content/uploads/2023/05/cirugia_robotizada_protesis_rodilla_2-1-1024x768.jpeg',
  },
  {
    title: 'Artroscopía',
    description: 'Intervenciones precisas con recuperación acelerada. (Ligamento Cruzado Anterior, Menisco, Hombro).',
    image: 'https://cecoten.com/wp-content/uploads/2020/11/Una-artroscopia-1.jpg',
  },
  {
    title: 'Cirugía de Columna',
    description: 'Solución definitiva al dolor crónico y compresión nerviosa. (Hernia de Columna Lumbar).',
    image: 'https://drhectorgonzalez.mx/app/uploads/2025/09/cirugia-de-columna.jpg',
  },
];

export default function Specialties() {
  return (
    <section className="py-24 bg-slate-50" id="especialidades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 inline-block">
            Especialidades
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight !leading-snug pb-4">
            Soluciones Quirúrgicas <br />
            de Alta{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#0066cc]">
              Especialidad
            </span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Máxima precisión quirúrgica: un subespecialista dedicado a tu articulación.
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[380px] rounded-[2rem] overflow-hidden bg-white border border-slate-100 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Imagen de fondo (invisible por defecto, aparece en hover) */}
              <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay oscuro para legibilidad */}
                <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]" />
              </div>

              {/* Contenido de la Card */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-end text-left">
                <h3 className={`text-2xl font-bold mb-4 transition-colors tracking-tight duration-500 ${
                  'group-hover:text-white text-slate-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-base leading-relaxed mb-6 transition-colors tracking-tight duration-500 ${
                  'group-hover:text-blue-50 text-black'
                }`}>
                  {item.description}
                </p>
                <a 
                  href="#" 
                  className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-500 ${
                    'group-hover:text-white text-slate-900'
                  }`}
                >
                  Más Información
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}