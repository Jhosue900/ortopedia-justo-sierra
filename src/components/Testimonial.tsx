import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';
import { useState } from 'react';

const googleReviews = [
  {
    name: "Paciente de Traumatología",
    date: "hace 2 meses",
    text: "Llegué muy asustada por una fractura, pero desde el primer momento el Dr. Garibaldi me dio mucha tranquilidad. Es un excelente médico y se nota que sabe lo que hace. ¡Muchas gracias!",
    rating: 5
  },
  {
    name: "Deportista de Alto Rendimiento",
    date: "hace 1 mes",
    text: "Me lesioné la rodilla haciendo deporte. La artroscopia con el Dr. Alan Fajardo fue la mejor decisión. Un especialista joven, actualizado y profesional. Ya estoy en rehabilitación y me siento de maravilla.",
    rating: 5
  },
  {
    name: "Familia Chávez",
    date: "hace 3 meses",
    text: "Le realizaron un reemplazo de cadera a mi mamá con el Dr. Johnatan Chávez. El doctor tiene un trato humano excepcional y ver a mi madre caminar de nuevo sin dolor no tiene precio.",
    rating: 5
  },
  {
    name: "Paciente de Hombro",
    date: "hace 4 meses",
    text: "El mejor para temas de hombro. El Dr. Schiavon es super honesto y se nota la experiencia que tiene. Muy buen trato y excelentes resultados.",
    rating: 5
  },
  {
    name: "Paciente Recuperado",
    date: "hace 1 mes",
    text: "Excelente cirujano de columna el Dr. Oscar Rodríguez. Me operó hace un mes y ya ando como si nada. Muy profesional, lo recomiendo ampliamente.",
    rating: 5
  }
];




const videoTestimonials = [
  { 
    src: "https://res.cloudinary.com/dodxaehv3/video/upload/v1778778729/TESTIMONIO_1_u429v9.mp4",
    poster: "https://res.cloudinary.com/dodxaehv3/video/upload/v1778778729/TESTIMONIO_1_u429v9.jpg"
  },
  { 
    src: "https://res.cloudinary.com/dodxaehv3/video/upload/v1778778666/TESTIMONIO_2_fbsiow.mp4",
    poster: "https://res.cloudinary.com/dodxaehv3/video/upload/v1778778666/TESTIMONIO_2_fbsiow.jpg"
  },
  { 
    src: "https://res.cloudinary.com/dodxaehv3/video/upload/v1778778623/testimonio3_wsiyck.mp4",
    poster: "https://res.cloudinary.com/dodxaehv3/video/upload/v1778778623/testimonio3_wsiyck.jpg"
  },
  { 
    src: "https://res.cloudinary.com/dodxaehv3/video/upload/v1778778672/testimonio4_kd9xuw.mp4",
    poster: "https://res.cloudinary.com/dodxaehv3/video/upload/v1778778672/testimonio4_kd9xuw.jpg"
  },
];






export default function Testimonial() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  return (
    <section className="py-24 bg-white overflow-hidden" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                

        {/* Header de Reseñas */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-[#a4d1ff] text-[#11327c] text-xs font-bold tracking-tight uppercase rounded-full mb-4 inline-block">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Pacientes Sin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001529] from-1% to-[#0066cc]">Dolor</span>
          </h2>
        </div>

        {/* Reseñas de Google */}
        {/* Reseñas de Google */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 items-start">
          {/* Perfil de Google */}
          <div className="lg:col-span-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center lg:text-left sticky top-24">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
              <Star className="text-blue-600 fill-blue-600 w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">Ortopedia Justo Sierra</h3>
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              <span className="text-sm text-slate-500 ml-2">18 reseñas Google</span>
            </div>
            <button className="w-full py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              Escribe una reseña
            </button>
          </div>

          {/* Cards de Reseñas */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {googleReviews.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow">
                <Quote className="absolute top-6 right-8 w-8 h-8 text-blue-50 group-hover:text-blue-100 transition-colors" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 leading-tight">{review.name}</h4>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de Videos */}
        {/* Sección de Video Testimonios Horizontal */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Play className="w-6 h-6 text-blue-600 fill-blue-600" />
              Historias de Éxito
            </h3>
            <span className="text-sm text-slate-400 hidden sm:block">Desliza para ver más →</span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {videoTestimonials.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[280px] md:min-w-[320px] aspect-[9/16] snap-center relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 rounded-[2.5rem] pointer-events-none" />
                
                <video
                  src={video.src}
                  poster={video.poster}
                  className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white ring-1 ring-slate-200"
                  controls
                  playsInline
                  preload="none"
                />
                
                {/* Overlay decorativo para resaltar que es premium */}
                <div className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
                   <Star className="w-4 h-4 text-white fill-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}