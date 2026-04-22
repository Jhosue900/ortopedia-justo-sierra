import { motion } from 'framer-motion';
import { Calendar, ClipboardCheck, Stethoscope, BedDouble } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: '1. Agenda tu Cita',
    description: 'Un asesor médico validará tu información y coordinará tu cita ágilmente.',
  },
  {
    icon: ClipboardCheck,
    title: '2. Valoración',
    description: 'Evaluamos tus estudios de imagen y diagnóstico previo.',
  },
  {
    icon: Stethoscope,
    title: '3. Cirugía',
    description: 'Intervención utilizando técnicas de mínima invasión y tecnología de punta.',
  },
  {
    icon: BedDouble,
    title: '4. Postoperatorio',
    description: 'Línea directa con nuestro equipo, retiro de puntos y primera consulta de revisión.',
  },
];

export default function Process() {
  return (
    <section className="pt-24 pb-32 bg-[#0a1526] text-white" id="proceso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight !leading-snug">
            Más que una Cirugía<br />
            <span className="text-blue-400">Acompañamiento Integral.</span>
          </h2>
          <p className="text-gray-200/80 text-lg max-w-2xl mx-auto tracking-tight">
            Diseñamos un proceso quirúrgico transparente, seguro y acompañado en todo momento.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea conectora horizontal (solo en desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-blue-900/50" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icono */}
                <div className="relative z-10 w-20 h-20 rounded-[20px] bg-[#0a1526] border-2 border-blue-500/30 flex items-center justify-center mb-6 transition-all group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <step.icon className="w-8 h-8 text-blue-400" />
                </div>

                {/* Texto */}
                {/* Texto */}
                {index === 0 ? (
                  <a 
                    href="#contacto"
                    className="text-xl font-extrabold mb-3 tracking-tight px-6 py-2 bg-transparent border border-white/20 rounded-full hover:bg-white/10 transition-all cursor-pointer inline-flex items-center"
                  >
                    {step.title}
                  </a>
                ) : (
                  <h3 className="text-2xl font-extrabold mb-3 tracking-tight">{step.title}</h3>
                )}
                <p className="text-gray-200/80 text-base leading-relaxed max-w-[220px] tracking-tight pt-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}