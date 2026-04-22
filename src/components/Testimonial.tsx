import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';
import { useState } from 'react';

const googleReviews = [
  {
    name: "Nutrialia Mid",
    date: "hace 7 meses",
    text: "Es la mejor cirujana bariatra en Mérida, Yucatán. Su empatía, profesionalismo y trato humano hacen que cada paciente se sienta seguro y acompañado en...",
    rating: 5
  },
  {
    name: "María de los Milagros Sara...",
    date: "hace 7 meses",
    text: "No pude haber tomado mejor decisión en mi vida, estoy encantada con el trato tan humano que he recibido de la doctora y de todo su equipo, he...",
    rating: 5
  }
];


const videoTestimonials = [
  { src: "/videos/testimonio1.mp4" },
  { src: "/videos/testimonio2.mp4" },
  { src: "/videos/testimonio3.mp4" },
  { src: "/videos/testimonio4.mp4" },
];

export default function Testimonial() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  return (
    <section className="py-24 bg-white overflow-hidden" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Parte Superior: Stacked Images (Imagen 1) */}
        {/* Parte Superior: Stacked Images */}
        <div className="mb-24 relative h-[300px] md:h-[450px] flex justify-center items-center">
          <div className="absolute inset-0 bg-blue-900/5 rounded-[3rem] -rotate-1 scale-105" />
          {[
            "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800",
            "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800",
            "https://images.unsplash.com/photo-1579154235602-3c2c2446026b?q=80&w=800"
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="absolute w-48 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              style={{ 
                zIndex: 3 - i,
                transform: `translateX(${(i - 1) * 80}px) rotate(${(i - 1) * 5}deg)`
              }}
            >
              <img src={img} className="w-full h-full object-cover" alt="Cirugía" />
            </motion.div>
          ))}
        </div>
        

        {/* Header de Reseñas */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-[#a4d1ff] text-blue-600 text-xs font-bold tracking-tight uppercase rounded-full mb-4 inline-block">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Pacientes <span className="text-blue-700 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Sin Dolor</span>
          </h2>
        </div>

        {/* Reseñas de Google */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-center">
          {/* Perfil de Google */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center lg:text-left">
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
          {googleReviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 right-8 w-8 h-8 text-blue-50 group-hover:text-blue-100 transition-colors" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{review.name}</h4>
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

        {/* Grid de Videos */}
                {/* Grid de Videos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {videoTestimonials.map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-lg group"
            >
              <video
                src={video.src}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                playsInline
              />
              {/* Borde decorativo */}
              <div className="absolute inset-0 border-[8px] border-white/10 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}